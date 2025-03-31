---
icon: html5
date: 2024-01-05
title: WebRTC——同一局域网不同标签页通讯
category:
  - web
tag:
  - html
  - WebRTC
  - js/ts
star: true
sticky: false
footer: WebRTC搞直播——全是"点对点"（双关：既指技术，又指主播和观众互相吐槽，令人忍俊不禁）
---



```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>跨设备WebRTC通信</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        textarea { width: 100%; height: 120px; margin: 10px 0; }
        button { padding: 8px 15px; margin: 5px; background: #4CAF50; color: white; border: none; cursor: pointer; }
        button:hover { background: #45a049; }
        .section { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
        .status { font-weight: bold; color: #2196F3; }
    </style>
</head>
<body>
<h1>跨设备WebRTC通信</h1>

<div class="section">
    <h2>1. 角色选择</h2>
    <button id="initiatorBtn">作为发起方</button>
    <button id="responderBtn">作为接收方</button>
    <p class="status" id="roleStatus">未选择角色</p>
</div>

<div class="section" id="offerSection" style="display:none;">
    <h2>2. Offer交换</h2>
    <textarea id="offerOutput" readonly></textarea>
    <p>请将上方内容复制给接收方</p>

    <h3>接收Answer:</h3>
    <textarea id="answerInput"></textarea>
    <button id="submitAnswerBtn">提交Answer</button>
</div>

<div class="section" id="responderSection" style="display:none;">
    <h2>2. 接收Offer</h2>
    <textarea id="offerInput"></textarea>
    <button id="submitOfferBtn">提交Offer</button>

    <h3>生成的Answer:</h3>
    <textarea id="answerOutput" readonly></textarea>
    <p>请将上方内容复制回发起方</p>
</div>

<div class="section" id="iceSection" style="display:none;">
    <h2>3. ICE候选交换</h2>
    <div id="localCandidates">
        <h3>你的ICE候选(复制给对方):</h3>
        <div id="iceOutput"></div>
    </div>

    <h3>对方的ICE候选:</h3>
    <textarea id="iceInput"></textarea>
    <button id="submitIceBtn">提交ICE候选</button>
</div>

<div class="section" id="chatSection" style="display:none;">
    <h2>4. 通信测试</h2>
    <div>
        <input type="text" id="messageInput" placeholder="输入消息">
        <button id="sendBtn">发送</button>
    </div>
    <div id="messages" style="margin-top:10px; border:1px solid #ddd; min-height:100px; padding:10px;"></div>
</div>

<script>
    // 全局变量
    let peerConnection;
    let dataChannel;
    let isInitiator = false;
    const messageQueue = [];

    // DOM元素
    const roleStatus = document.getElementById('roleStatus');
    const offerSection = document.getElementById('offerSection');
    const responderSection = document.getElementById('responderSection');
    const iceSection = document.getElementById('iceSection');
    const chatSection = document.getElementById('chatSection');

    // 初始化按钮事件
    document.getElementById('initiatorBtn').addEventListener('click', startAsInitiator);
    document.getElementById('responderBtn').addEventListener('click', startAsResponder);
    document.getElementById('submitAnswerBtn').addEventListener('click', processAnswer);
    document.getElementById('submitOfferBtn').addEventListener('click', processOffer);
    document.getElementById('submitIceBtn').addEventListener('click', processIceCandidate);
    document.getElementById('sendBtn').addEventListener('click', sendMessage);

    // 作为发起方
    async function startAsInitiator() {
        isInitiator = true;
        roleStatus.textContent = "角色: 发起方";
        offerSection.style.display = 'block';

        try {
            // 创建PeerConnection
            peerConnection = new RTCPeerConnection({
                iceServers: [
                     // 局域网内可以不加，但保留以便可能的跨网段通信
                ],
                iceTransportPolicy: 'all' // 允许局域网发现
            });

            // 设置ICE候选处理
            peerConnection.onicecandidate = (event) => {
                if (event.candidate) {
                    const iceDiv = document.createElement('div');
                    iceDiv.textContent = JSON.stringify({
                        type: 'ice-candidate',
                        candidate: event.candidate
                    });
                    document.getElementById('iceOutput').appendChild(iceDiv);
                    iceSection.style.display = 'block';
                }
            };

            // 创建数据通道
            dataChannel = peerConnection.createDataChannel('chat');
            setupDataChannel(dataChannel);

            // 创建Offer
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);

            // 显示Offer供复制
            document.getElementById('offerOutput').value = JSON.stringify({
                type: 'offer',
                offer: offer
            });

        } catch (error) {
            console.error('Error creating offer:', error);
            alert('创建Offer失败: ' + error.message);
        }
    }

    // 作为接收方
    async function startAsResponder() {
        isInitiator = false;
        roleStatus.textContent = "角色: 接收方";
        responderSection.style.display = 'block';

        // 初始化PeerConnection
        peerConnection = new RTCPeerConnection({
            iceServers: [

            ],
            iceTransportPolicy: 'all',
            bundlePolicy: 'max-bundle',  // 减少候选数量
            rtcpMuxPolicy: 'require',    // 强制RTCP复用
        });

        // 设置ICE候选处理
        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                const iceDiv = document.createElement('div');
                iceDiv.textContent = JSON.stringify({
                    type: 'ice-candidate',
                    candidate: event.candidate
                });
                document.getElementById('iceOutput').appendChild(iceDiv);
                iceSection.style.display = 'block';
            }
        };

        // 监听数据通道
        peerConnection.ondatachannel = (event) => {
            dataChannel = event.channel;
            setupDataChannel(dataChannel);
        };
    }

    // 处理接收到的Offer
    async function processOffer() {
        const offerInput = document.getElementById('offerInput').value;
        if (!offerInput) {
            alert('请粘贴Offer内容');
            return;
        }

        try {
            const message = JSON.parse(offerInput);
            if (message.type !== 'offer') {
                throw new Error('不是有效的Offer');
            }

            await peerConnection.setRemoteDescription(new RTCSessionDescription(message.offer));

            // 创建Answer
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);

            // 显示Answer供复制
            document.getElementById('answerOutput').value = JSON.stringify({
                type: 'answer',
                answer: answer
            });

        } catch (error) {
            console.error('Error processing offer:', error);
            alert('处理Offer失败: ' + error.message);
        }
    }

    // 处理接收到的Answer
    async function processAnswer() {
        const answerInput = document.getElementById('answerInput').value;
        if (!answerInput) {
            alert('请粘贴Answer内容');
            return;
        }

        try {
            const message = JSON.parse(answerInput);
            if (message.type !== 'answer') {
                throw new Error('不是有效的Answer');
            }

            await peerConnection.setRemoteDescription(new RTCSessionDescription(message.answer));

        } catch (error) {
            console.error('Error processing answer:', error);
            alert('处理Answer失败: ' + error.message);
        }
    }

    // 处理ICE候选
    async function processIceCandidate() {
        const iceInput = document.getElementById('iceInput').value;
        if (!iceInput) {
            alert('请粘贴ICE候选内容');
            return;
        }

        try {
            const message = JSON.parse(iceInput);
            if (message.type !== 'ice-candidate') {
                throw new Error('不是有效的ICE候选');
            }

            await peerConnection.addIceCandidate(new RTCIceCandidate(message.candidate));

        } catch (error) {
            console.error('Error adding ICE candidate:', error);
            alert('添加ICE候选失败: ' + error.message);
        }
    }

    // 设置数据通道
    function setupDataChannel(channel) {
        channel.onopen = () => {
            chatSection.style.display = 'block';
            alert('连接已建立！现在可以发送消息了');

            // 发送队列中的消息
            while (messageQueue.length > 0) {
                channel.send(messageQueue.shift());
            }
        };

        channel.onmessage = (event) => {
            const messagesDiv = document.getElementById('messages');
            const messageDiv = document.createElement('div');
            messageDiv.textContent = `对方: ${event.data}`;
            messagesDiv.appendChild(messageDiv);
        };

        channel.onclose = () => {
            alert('数据通道已关闭');
        };

        channel.onerror = (error) => {
            console.error('Data channel error:', error);
            alert('数据通道错误: ' + error.message);
        };
    }

    // 发送消息
    function sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();
        if (!message) return;

        if (dataChannel && dataChannel.readyState === 'open') {
            dataChannel.send(message);

            const messagesDiv = document.getElementById('messages');
            const messageDiv = document.createElement('div');
            messageDiv.textContent = `我: ${message}`;
            messagesDiv.appendChild(messageDiv);

            messageInput.value = '';
        } else {
            messageQueue.push(message);
            alert('消息已加入队列，等待连接建立');
        }
    }
</script>
</body>
</html>
```
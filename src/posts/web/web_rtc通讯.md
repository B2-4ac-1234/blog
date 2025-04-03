---
icon: html5
date: 2024-04-03
title: WebRTC通讯示例
category:
  - web
  - WebRTC
tag:
  - html
  - WebRTC
  - js/ts
star: true
sticky: false
footer: WebRTC搞直播——全是"点对点"（双关：既指技术，又指主播和观众互相吐槽，令人忍俊不禁）
---

## [web_rtc示例](https://b2-4ac-1234.github.io/project/web_rtc.html)

### 注意事项

1.WebRTC需要通过其他方式类似tcp协议/手动复制粘贴/服务器交互等等交换offer和answer构建通道，构建后实现/调用各种通讯功能
2.发送方和接收方在非移动数据情况下，使用stun服务器可以在不同ip的情况下通讯(代码默认提供谷歌公用stun服务器)；不使用stun服务器(即注释iceServers)情况下，在局域网(同一wifi应该也算)下也可通讯。
3.在不使用turn服务器，发送方或接受方任意一方或两方处于移动数据情况下，都不可通讯(大概率与移动运营商有关)。
4.turn服务器可以通过配置特定vpn代替，其实还是形成局域网环境。

## 示例代码

可通过同一浏览器不同标签页测试效果，如果有其他代码(如flutter)运行有类似手动复制粘贴offer和answer效果，也可以与网页通讯

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>WebRTC</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .panel {
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
            background-color: white;
        }
        button {
            padding: 10px 15px;
            background-color: #4285f4;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        button:hover {
            background-color: #3367d6;
        }
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        textarea {
            width: 100%;
            height: 100px;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .status {
            margin-top: 10px;
            padding: 10px;
            background-color: #f8f8f8;
            border-radius: 4px;
        }
        .video-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 20px;
        }
        .video-box {
            flex: 1;
            min-width: 300px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px;
        }
        video {
            width: 100%;
            background-color: #222;
            border-radius: 4px;
        }
        .no-video {
            width: 100%;
            height: 240px;
            background-color: #333;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
        }
        .chat-container {
            margin-top: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 10px;
        }
        .chat-messages {
            height: 200px;
            overflow-y: auto;
            border: 1px solid #eee;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #f9f9f9;
        }
        .chat-input {
            display: flex;
            gap: 10px;
        }
        .chat-input input {
            flex: 1;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        /* 文件传输相关样式 */
        .file-transfer {
            margin-top: 15px;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
        .file-input-container {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .file-list {
            margin-top: 10px;
            max-height: 150px;
            overflow-y: auto;
            border: 1px solid #eee;
            padding: 10px;
            background-color: #f9f9f9;
        }
        .file-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            border-bottom: 1px solid #eee;
        }
        .file-item:last-child {
            border-bottom: none;
        }
        .progress-bar {
            height: 5px;
            background-color: #e0e0e0;
            border-radius: 3px;
            margin-top: 5px;
            overflow: hidden;
        }
        .progress {
            height: 100%;
            background-color: #4285f4;
            width: 0%;
            transition: width 0.3s;
        }
        h1 {
            color: #4285f4;
            text-align: center;
        }
        h2 {
            color: #555;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
    </style>
</head>

<body>
<h1>WebRTC</h1>

<div class="container">
    <div class="panel">
        <h2>通话控制</h2>
        <div class="controls">
            <button id="startBtn">开始通话</button>
            <button id="copyOfferBtn" disabled>复制Offer</button>
            <button id="pasteAnswerBtn" disabled>粘贴Answer</button>
            <button id="copyAnswerBtn" disabled>复制Answer</button>
            <button id="pasteOfferBtn" disabled>粘贴Offer</button>
            <button id="hangupBtn" disabled>挂断</button>
        </div>
        <div id="status" class="status">准备开始</div>
        <textarea id="sdpTextarea" placeholder="在此粘贴SDP信息"></textarea>

        <div class="video-container">
            <div class="video-box">
                <span>本地视频</span>
                <div id="localVideoPlaceholder" class="no-video">无视频设备</div>
                <video
                        id="localVideo"
                        autoplay
                        muted
                        playsinline
                        style="display: none"
                ></video>
            </div>
            <div class="video-box">
                <span>远程视频</span>
                <div id="remoteVideoPlaceholder" class="no-video">等待连接...</div>
                <video
                        id="remoteVideo"
                        autoplay
                        playsinline
                        style="display: none"
                ></video>
            </div>
        </div>
    </div>

    <div class="panel chat-container">
        <h2>文本聊天</h2>
        <div id="chatMessages" class="chat-messages"></div>
        <div class="chat-input">
            <input
                    id="chatInput"
                    type="text"
                    placeholder="输入消息..."
                    disabled
            />
            <button id="sendBtn" disabled>发送</button>
        </div>

        <!-- 添加文件传输部分 -->
        <div class="file-transfer">
            <h3>文件传输</h3>
            <div class="file-input-container">
                <input type="file" id="fileInput" disabled />
                <button id="sendFileBtn" disabled>发送文件</button>
            </div>
            <div id="fileList" class="file-list"></div>
        </div>
    </div>

    <div class="panel">
        <h3>使用说明</h3>
        <ol>
            <li>
                <strong>发起方操作：</strong>
                <ol>
                    <li>点击"开始通话"按钮</li>
                    <li>点击"复制Offer"按钮复制SDP信息</li>
                    <li>将Offer发送给接收方</li>
                    <li>接收方发回Answer后，粘贴到文本框并点击"粘贴Answer"</li>
                </ol>
            </li>
            <li>
                <strong>接收方操作：</strong>
                <ol>
                    <li>点击"开始通话"按钮</li>
                    <li>将收到的Offer粘贴到文本框并点击"粘贴Offer"</li>
                    <li>点击"复制Answer"按钮复制SDP信息</li>
                    <li>将Answer发送回发起方</li>
                </ol>
            </li>
        </ol>
    </div>
</div>

<script>
    // 配置STUN/TURN服务器
    const configuration = {
        //若注释iceServers，则只能在局域网使用；没有配置turn服务器，移动数据环境下不能使用
        iceServers: [
            {
              urls: "stun:stun.l.google.com:19302"
            }
        ],
    };

    let peerConnection;
    let localStream;
    let isCaller = false;
    let dataChannel;

    // DOM元素
    const elements = {
        startBtn: document.getElementById("startBtn"),
        copyOfferBtn: document.getElementById("copyOfferBtn"),
        pasteAnswerBtn: document.getElementById("pasteAnswerBtn"),
        copyAnswerBtn: document.getElementById("copyAnswerBtn"),
        pasteOfferBtn: document.getElementById("pasteOfferBtn"),
        hangupBtn: document.getElementById("hangupBtn"),
        statusDiv: document.getElementById("status"),
        sdpTextarea: document.getElementById("sdpTextarea"),
        localVideo: document.getElementById("localVideo"),
        remoteVideo: document.getElementById("remoteVideo"),
        localVideoPlaceholder: document.getElementById("localVideoPlaceholder"),
        remoteVideoPlaceholder: document.getElementById(
                "remoteVideoPlaceholder"
        ),
        chatMessages: document.getElementById("chatMessages"),
        chatInput: document.getElementById("chatInput"),
        sendBtn: document.getElementById("sendBtn"),
        // 添加文件传输相关元素
        fileInput: document.getElementById("fileInput"),
        sendFileBtn: document.getElementById("sendFileBtn"),
        fileList: document.getElementById("fileList"),
    };

    // 文件传输相关变量
    let fileChannel;
    const chunkSize = 16384; // 16KB 分块大小
    let fileQueue = [];
    let currentFile = null;
    let receiveBuffer = [];
    let receivedSize = 0;
    let fileInfo = null;

    // 开始通话
    elements.startBtn.onclick = async () => {
        try {
            elements.statusDiv.textContent = "正在获取媒体设备...";
            disableAllButtons();

            // 询问用户角色
            isCaller = confirm(
                    "您是发起方吗？(点击确定作为发起方，取消作为接收方)"
            );

            // 获取媒体流（添加具体约束）
            localStream = await navigator.mediaDevices
                    .getUserMedia({
                        audio: {
                            echoCancellation: true,
                            noiseSuppression: true,
                            autoGainControl: true,
                        },
                        video: {
                            width: { ideal: 1280 },
                            height: { ideal: 720 },
                            frameRate: { ideal: 30 },
                        },
                    })
                    .catch(async (err) => {
                        console.error("视频获取失败:", err);
                        elements.statusDiv.textContent =
                                "未检测到视频设备，尝试仅音频模式";
                        return await navigator.mediaDevices.getUserMedia({
                            audio: {
                                echoCancellation: true,
                                noiseSuppression: true,
                            },
                        });
                    });

            // 显示本地视频
            if (localStream && localStream.getVideoTracks().length > 0) {
                elements.localVideoPlaceholder.style.display = "none";
                elements.localVideo.srcObject = localStream;
                elements.localVideo.style.display = "block";
                await elements.localVideo
                        .play()
                        .catch((e) => console.error("本地视频播放失败:", e));
            }

            // 创建PeerConnection
            peerConnection = new RTCPeerConnection(configuration);

            // 添加本地流（修改添加方式）
            if (localStream) {
                localStream.getTracks().forEach((track) => {
                    const sender = peerConnection.addTrack(track, localStream);
                    console.log(`添加本地轨道: ${track.kind}`, sender);
                });
            }

            // 如果是发起方，创建数据通道
            if (isCaller) {
                dataChannel = peerConnection.createDataChannel("chat");
                setupDataChannel(dataChannel);

                // 创建文件传输通道
                fileChannel = peerConnection.createDataChannel("file");
                setupFileChannel(fileChannel);
            } else {
                // 如果是接收方，监听数据通道
                peerConnection.ondatachannel = (event) => {
                    if (event.channel.label === "chat") {
                        dataChannel = event.channel;
                        setupDataChannel(dataChannel);
                    } else if (event.channel.label === "file") {
                        fileChannel = event.channel;
                        setupFileChannel(fileChannel);
                    }
                };
            }

            // ICE候选处理
            peerConnection.onicecandidate = (event) => {
                if (event.candidate) {
                    console.log("ICE candidate:", event.candidate);
                }
            };

            // 远程流到达（改进处理方式）
            peerConnection.ontrack = (event) => {
                console.log("收到远程轨道:", event.track.kind);
                const stream = event.streams[0];

                if (event.track.kind === "video") {
                    elements.remoteVideoPlaceholder.style.display = "none";
                    elements.remoteVideo.srcObject = stream;
                    elements.remoteVideo.style.display = "block";

                    // 确保视频正常播放
                    elements.remoteVideo
                            .play()
                            .catch((e) => console.error("远程视频播放失败:", e));
                }

                if (event.track.kind === "audio") {
                    // 确保音频正常播放
                    const audioElement = document.createElement("audio");
                    audioElement.autoplay = true;
                    audioElement.srcObject = stream;
                    document.body.appendChild(audioElement);
                }

                elements.statusDiv.textContent = "通话已连接";
                elements.hangupBtn.disabled = false;
                elements.chatInput.disabled = false;
                elements.sendBtn.disabled = false;
                // 启用文件传输按钮
                elements.fileInput.disabled = false;
                elements.sendFileBtn.disabled = false;
            };

            // 添加连接状态监控
            peerConnection.oniceconnectionstatechange = () => {
                console.log("ICE连接状态:", peerConnection.iceConnectionState);
                elements.statusDiv.textContent = `ICE状态: ${peerConnection.iceConnectionState}`;
            };

            peerConnection.onconnectionstatechange = () => {
                console.log("连接状态:", peerConnection.connectionState);
                if (peerConnection.connectionState === "connected") {
                    elements.statusDiv.textContent = "音视频连接已建立";
                }
            };

            // 根据角色执行不同流程
            if (isCaller) {
                elements.statusDiv.textContent = "正在创建Offer...";
                const offer = await peerConnection.createOffer({
                    offerToReceiveAudio: true,
                    offerToReceiveVideo: true,
                });
                await peerConnection.setLocalDescription(offer);

                elements.statusDiv.textContent = "Offer创建完成，请复制";
                elements.copyOfferBtn.disabled = false;
                elements.pasteAnswerBtn.disabled = false;
            } else {
                elements.statusDiv.textContent = "准备接收Offer";
                elements.pasteOfferBtn.disabled = false;
            }
        } catch (err) {
            elements.statusDiv.textContent = "错误: " + err.message;
            console.error(err);
            enableStartButton();
        }
    };

    // 设置数据通道
    function setupDataChannel(channel) {
        channel.onopen = () => {
            addMessage("系统", "聊天连接已建立");
        };

        channel.onclose = () => {
            addMessage("系统", "聊天连接已关闭");
        };

        channel.onmessage = (event) => {
            try {
                console.log(event);
                const message = JSON.parse(event.data);
                addMessage(message.sender, message.content);
            } catch {
                addMessage("对方", event.data);
            }
        };
    }

    // 设置文件传输通道
    function setupFileChannel(channel) {
        channel.binaryType = "arraybuffer";

        channel.onopen = () => {
            console.log("文件传输通道已打开");
            elements.fileInput.disabled = false;
            elements.sendFileBtn.disabled = false;
        };

        channel.onclose = () => {
            console.log("文件传输通道已关闭");
            elements.fileInput.disabled = true;
            elements.sendFileBtn.disabled = true;
        };

        channel.onmessage = (event) => {
            const data = event.data;

            // 如果是字符串，则是文件信息
            if (typeof data === "string") {
                const message = JSON.parse(data);

                if (message.type === "file-info") {
                    // 接收到新文件信息
                    fileInfo = message;
                    receiveBuffer = [];
                    receivedSize = 0;

                    // 显示接收文件信息
                    const fileItem = document.createElement("div");
                    fileItem.className = "file-item";
                    fileItem.id = `file-receive-${fileInfo.timestamp}`;
                    fileItem.innerHTML = `
                <div>
                  <strong>接收文件:</strong> ${fileInfo.name} (${formatBytes(
                            fileInfo.size
                    )})
                  <div class="progress-bar">
                    <div class="progress" style="width: 0%"></div>
                  </div>
                </div>
              `;
                    elements.fileList.appendChild(fileItem);

                    addMessage("系统", `正在接收文件: ${fileInfo.name}`);
                }
            } else {
                // 接收文件数据块
                receiveBuffer.push(data);
                receivedSize += data.byteLength;

                // 更新进度条
                if (fileInfo) {
                    const progress = Math.floor((receivedSize / fileInfo.size) * 100);
                    const fileItem = document.getElementById(
                            `file-receive-${fileInfo.timestamp}`
                    );
                    if (fileItem) {
                        const progressBar = fileItem.querySelector(".progress");
                        progressBar.style.width = `${progress}%`;
                    }

                    // 文件接收完成
                    if (receivedSize === fileInfo.size) {
                        const received = new Blob(receiveBuffer);
                        receiveBuffer = [];

                        // 创建下载链接
                        const downloadLink = document.createElement("a");
                        downloadLink.href = URL.createObjectURL(received);
                        downloadLink.download = fileInfo.name;
                        downloadLink.textContent = "下载";
                        downloadLink.className = "download-link";

                        const fileItem = document.getElementById(
                                `file-receive-${fileInfo.timestamp}`
                        );
                        if (fileItem) {
                            fileItem.querySelector("div").appendChild(downloadLink);
                        }

                        addMessage("系统", `文件接收完成: ${fileInfo.name}`);
                        fileInfo = null;
                    }
                }
            }
        };
    }

    // 发送文件按钮点击事件
    elements.sendFileBtn.onclick = () => {
        const fileInput = elements.fileInput;
        if (fileInput.files.length === 0) {
            alert("请先选择文件");
            return;
        }

        // 将选择的文件添加到队列
        for (let i = 0; i < fileInput.files.length; i++) {
            fileQueue.push(fileInput.files[i]);
        }

        // 显示文件队列
        updateFileQueueDisplay();

        // 如果没有正在传输的文件，开始传输
        if (!currentFile) {
            sendNextFile();
        }

        // 清空文件选择
        fileInput.value = "";
    };

    // 更新文件队列显示
    function updateFileQueueDisplay() {
        fileQueue.forEach((file, index) => {
            // 检查是否已经显示
            const existingItem = document.getElementById(`file-queue-${index}`);
            if (!existingItem) {
                const fileItem = document.createElement("div");
                fileItem.className = "file-item";
                fileItem.id = `file-queue-${index}`;
                fileItem.innerHTML = `
              <div>
                <strong>等待发送:</strong> ${file.name} (${formatBytes(
                        file.size
                )})
                <div class="progress-bar">
                  <div class="progress" style="width: 0%"></div>
                </div>
              </div>
            `;
                elements.fileList.appendChild(fileItem);
            }
        });
    }

    // 发送下一个文件
    function sendNextFile() {
        if (
                fileQueue.length === 0 ||
                !fileChannel ||
                fileChannel.readyState !== "open"
        ) {
            currentFile = null;
            return;
        }

        currentFile = fileQueue.shift();
        const fileReader = new FileReader();
        let offset = 0;
        const timestamp = Date.now();

        // 发送文件信息
        const fileInfo = {
            type: "file-info",
            name: currentFile.name,
            size: currentFile.size,
            timestamp: timestamp,
        };
        fileChannel.send(JSON.stringify(fileInfo));

        // 添加发送文件显示
        const fileItem = document.createElement("div");
        fileItem.className = "file-item";
        fileItem.id = `file-send-${timestamp}`;
        fileItem.innerHTML = `
          <div>
            <strong>发送文件:</strong> ${currentFile.name} (${formatBytes(
                currentFile.size
        )})
            <div class="progress-bar">
              <div class="progress" style="width: 0%"></div>
            </div>
          </div>
        `;
        elements.fileList.appendChild(fileItem);

        addMessage("系统", `开始发送文件: ${currentFile.name}`);

        // 读取并发送文件分块
        fileReader.onload = (e) => {
            if (fileChannel.readyState === "open") {
                fileChannel.send(e.target.result);
                offset += e.target.result.byteLength;

                // 更新进度条
                const progress = Math.floor((offset / currentFile.size) * 100);
                const fileItem = document.getElementById(`file-send-${timestamp}`);
                if (fileItem) {
                    const progressBar = fileItem.querySelector(".progress");
                    progressBar.style.width = `${progress}%`;
                }

                // 继续读取下一块
                if (offset < currentFile.size) {
                    readSlice(offset);
                } else {
                    // 文件发送完成
                    addMessage("系统", `文件发送完成: ${currentFile.name}`);

                    // 发送下一个文件
                    setTimeout(() => {
                        sendNextFile();
                    }, 500);
                }
            }
        };

        // 读取文件分块
        const readSlice = (o) => {
            const slice = currentFile.slice(o, o + chunkSize);
            fileReader.readAsArrayBuffer(slice);
        };

        readSlice(0);
    }

    // 格式化字节大小
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return (
                parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
        );
    }

    // 添加消息到聊天窗口
    function addMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        elements.chatMessages.appendChild(messageDiv);
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }

    // 发送消息
    elements.sendBtn.onclick = () => {
        const message = elements.chatInput.value;
        if (
                message.trim() &&
                dataChannel &&
                dataChannel.readyState === "open"
        ) {
            const messageObj = {
                type: "text",
                sender: "对方",
                content: message,
                timestamp: new Date().toString(),
            };
            dataChannel.send(JSON.stringify(messageObj));
            addMessage("我", message);
            elements.chatInput.value = "";
        }
    };

    // 按Enter发送消息
    elements.chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            elements.sendBtn.click();
        }
    });

    // 复制Offer
    elements.copyOfferBtn.onclick = () => {
        const offer = peerConnection.localDescription;
        elements.sdpTextarea.value = JSON.stringify(offer);
        navigator.clipboard
                .writeText(JSON.stringify(offer))
                .then(() => {
                    elements.statusDiv.textContent = "Offer已复制到剪贴板";
                })
                .catch((err) => {
                    elements.statusDiv.textContent = "复制失败: " + err.message;
                });
    };

    // 粘贴Answer
    elements.pasteAnswerBtn.onclick = async () => {
        try {
            const answer = JSON.parse(elements.sdpTextarea.value);
            if (!answer.type || answer.type !== "answer") {
                throw new Error("无效的Answer格式");
            }
            await peerConnection.setRemoteDescription(
                    new RTCSessionDescription(answer)
            );
            elements.statusDiv.textContent = "Answer设置成功，连接建立中...";
        } catch (err) {
            elements.statusDiv.textContent = "设置Answer错误: " + err.message;
        }
    };

    // 粘贴Offer
    elements.pasteOfferBtn.onclick = async () => {
        try {
            const offer = JSON.parse(elements.sdpTextarea.value);
            if (!offer.type || offer.type !== "offer") {
                throw new Error("无效的Offer格式");
            }

            await peerConnection.setRemoteDescription(
                    new RTCSessionDescription(offer)
            );

            // 创建Answer
            elements.statusDiv.textContent = "正在创建Answer...";
            const answer = await peerConnection.createAnswer({
                offerToReceiveAudio: true,
                offerToReceiveVideo: true,
            });
            await peerConnection.setLocalDescription(answer);

            elements.statusDiv.textContent = "Answer创建完成，请复制";
            elements.copyAnswerBtn.disabled = false;
        } catch (err) {
            elements.statusDiv.textContent = "设置Offer错误: " + err.message;
        }
    };

    // 复制Answer
    elements.copyAnswerBtn.onclick = () => {
        const answer = peerConnection.localDescription;
        elements.sdpTextarea.value = JSON.stringify(answer);
        navigator.clipboard
                .writeText(JSON.stringify(answer))
                .then(() => {
                    elements.statusDiv.textContent = "Answer已复制到剪贴板";
                })
                .catch((err) => {
                    elements.statusDiv.textContent = "复制失败: " + err.message;
                });
    };

    // 挂断通话
    elements.hangupBtn.onclick = hangup;

    function hangup() {
        if (peerConnection) {
            peerConnection.close();
            peerConnection = null;
        }
        if (localStream) {
            localStream.getTracks().forEach((track) => track.stop());
            localStream = null;
            elements.localVideo.srcObject = null;
        }
        elements.remoteVideo.srcObject = null;
        elements.localVideoPlaceholder.style.display = "block";
        elements.remoteVideoPlaceholder.style.display = "block";
        elements.remoteVideoPlaceholder.textContent = "通话已结束";
        elements.statusDiv.textContent = "通话已结束";
        elements.chatInput.disabled = true;
        elements.sendBtn.disabled = true;
        enableStartButton();
        elements.hangupBtn.disabled = true;
        addMessage("系统", "通话已结束");
    }

    // 禁用所有按钮
    function disableAllButtons() {
        Object.keys(elements).forEach((key) => {
            if (key.endsWith("Btn") && elements[key].disabled !== undefined) {
                elements[key].disabled = true;
            }
        });
    }

    // 启用开始按钮
    function enableStartButton() {
        disableAllButtons();
        elements.startBtn.disabled = false;
    }
</script>
</body>
</html>
```
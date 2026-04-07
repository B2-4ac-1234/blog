---
date: 2025-12-24
title: Flutter虚拟机多平台同步脚本.md
description: 以macos平台的虚拟机(Vmware Fusion)，对windows和linux为例
category:
- Flutter
tag:
- Flutter
footer: flutter有六个平台(windows,macos,android,ios,linux,web)要测，你知道么？”我愈不耐烦了，努着嘴走远。
---

## 开发环境
虽然实际配置与运行脚本有对平台有适配，但对出macos平台没有对应测试。代码来源由本人反复调试Claude Sonnet 4.5得出。

* macos Sonoma 14.1.1
* Vmware Fusion 13.0.2
* linux ubuntu 20.04.6 LTS
* windows windows 10 专业版 22H2

### 配置文件sync-config.yaml
```yaml
# Flutter 项目同步配置文件
# 配置虚拟机连接信息

# Linux 虚拟机配置
linux:
  enabled: true
  host: [IP_ADDRESS]        # Linux 虚拟机 IP 地址
  user: username             # SSH 用户名
  password: ""             # SSH 密码（留空则使用 SSH 密钥认证）
  path: /home/username/flutter_projects/project_name  # 目标路径

# Windows 虚拟机配置
windows:
  enabled: true
  host: [IP_ADDRESS]        # Windows 虚拟机 IP 地址
  user: username             # SSH 用户名 (需要安装 OpenSSH Server)
  password: "password"   # SSH 密码
  path: /c/Users/username/flutter_projects/project_name  # 目标路径 (使用 Unix 风格路径)

# macOS 虚拟机配置(未测试)
macos:
  enabled: false
  host: [IP_ADDRESS]        # macOS 虚拟机 IP 地址
  user: username             # SSH 用户名
  password: "password"             # SSH 密码（留空则使用 SSH 密钥认证）
  path: /Users/kbboss/Documents/flutter/handcent_connect_s  # 目标路径
# 同步选项
options:
  auto_pub_get: true         # 同步后自动执行 flutter pub get
  clean_before_sync: false   # 同步前执行 flutter clean
  show_progress: true        # 显示同步进度
```
### 脚本flutter-sync.sh
```shell
#!/bin/bash

# Flutter 项目同步工具
# 支持同步到 Linux 和 Windows 虚拟机

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 脚本目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/sync-config.yaml"

# 打印函数
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 显示使用帮助
show_help() {
    cat <<EOF
Flutter 项目同步工具

用法:
    $(basename "$0") [选项] [目标]

选项:
    -h, --help              显示此帮助信息

目标:
    linux                   仅同步到 Linux 虚拟机
    windows                 仅同步到 Windows 虚拟机
    macos                   仅同步到 macOS 虚拟机
    all                     同步到所有虚拟机 (默认)

示例:
    $(basename "$0")                    # 同步到所有虚拟机
    $(basename "$0") windows            # 仅同步到 Windows
    $(basename "$0") macos              # 仅同步到 macOS

EOF
}

# 解析参数
TARGET_VM="all"
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        linux|windows|macos|all)
            TARGET_VM="$1"
            shift
            ;;
        *)
            print_error "未知参数: $1"
            show_help
            exit 1
            ;;
    esac
done

# 检查配置文件
if [ ! -f "$CONFIG_FILE" ]; then
    print_error "配置文件不存在: $CONFIG_FILE"
    exit 1
fi

# 检查项目
if [ ! -f "pubspec.yaml" ]; then
    print_error "不是有效的 Flutter 项目"
    exit 1
fi

PROJECT_NAME=$(basename "$(pwd)")

echo ""
print_info "Flutter 项目同步工具"
echo ""
print_success "检测到 Flutter 项目: $PROJECT_NAME"

# 读取配置
read_config() {
    local vm_type=$1
    local key=$2
    grep -A 6 "^${vm_type}:" "$CONFIG_FILE" | grep "${key}:" | head -1 | sed "s/^[[:space:]]*${key}:[[:space:]]*//" | tr -d '"' | tr -d "'" | sed 's/[[:space:]]*#.*//'
}

# 同步到虚拟机
sync_to_vm() {
    local vm_name=$1
    local vm_host=$2
    local vm_user=$3
    local vm_path=$4
    local use_password=$5
    
    print_info "==========================================="
    print_info "开始同步到 $vm_name ($vm_host)"
    print_info "==========================================="
    
    # 检查网络连接
    print_info "检查虚拟机连接: $vm_user@$vm_host"
    if ! ping -c 1 -W 2 "$vm_host" &> /dev/null; then
        print_error "无法 ping 通虚拟机: $vm_host"
        return 1
    fi
    
    # 准备文件列表
    print_info "准备同步文件列表..."
    TEMP_LIST=$(mktemp)
    
    find . -type f \
        ! -path "./.dart_tool/*" \
        ! -path "./build/*" \
        ! -path "./.idea/*" \
        ! -path "./.git/*" \
        ! -path "./.vscode/*" \
        ! -path "./android/.gradle/*" \
        ! -path "./android/app/build/*" \
        ! -path "./android/build/*" \
        ! -path "./ios/Pods/*" \
        ! -path "./ios/.symlinks/*" \
        ! -path "./ios/Flutter/Flutter.framework/*" \
        ! -path "./macos/Pods/*" \
        ! -path "./windows/flutter/ephemeral/*" \
        ! -path "./linux/flutter/ephemeral/*" \
        ! -path "./.flutter-plugins-dependencies" \
        ! -path "./.flutter-plugins" \
        ! -path "./.packages" \
        ! -path "./pubspec.lock" \
        ! -name "*.iml" \
        ! -name ".DS_Store" \
        ! -name "*.log" \
        ! -name ".sync-password" \
        ! -name "*.swp" \
        ! -name "*~" \
        > "$TEMP_LIST"
    
    FILE_COUNT=$(wc -l < "$TEMP_LIST")
    print_info "准备同步 $FILE_COUNT 个文件"
    
    # 同步文件
    print_info "开始同步文件..."
    
    if [ "$use_password" = "true" ]; then
        # 使用密码认证 - 从配置文件读取密码
        local vm_type=$(echo "$vm_name" | tr '[:upper:]' '[:lower:]')
        PASSWORD=$(read_config "$vm_type" "password")
        
        if [ -z "$PASSWORD" ]; then
            print_error "未设置 ${vm_name} 的密码"
            print_info "请在 sync-config.yaml 中设置 ${vm_type}.password"
            rm -f "$TEMP_LIST"
            return 1
        fi
        
        # 创建目标目录
        if [[ "$vm_path" == C:* ]] || [[ "$vm_path" == D:* ]]; then
            # Windows 路径
            print_info "使用 SCP 传输文件到 Windows..."
            
            # 转换为 Unix 风格路径用于 SCP
            UNIX_PATH=$(echo "$vm_path" | sed 's/\\/\//g' | sed 's/C:/\/c/' | sed 's/D:/\/d/')
            
            # 使用 scp 逐个传输文件（Windows 兼容）
            while IFS= read -r file; do
                # 获取文件的目录
                dir=$(dirname "$file")
                if [ "$dir" != "." ]; then
                    # 创建目录
                    sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$vm_user@$vm_host" \
                        "mkdir -p '$UNIX_PATH/$dir'" 2>/dev/null || true
                fi
                
                # 传输文件
                sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no \
                    "$file" "$vm_user@$vm_host:$UNIX_PATH/$file" 2>/dev/null || true
            done < "$TEMP_LIST"
        else
            # Linux/Unix 路径，使用 tar
            sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$vm_user@$vm_host" \
                "mkdir -p '$vm_path'" 2>/dev/null || true
            
            tar czf - --files-from="$TEMP_LIST" | \
                sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$vm_user@$vm_host" \
                "cd '$vm_path' && tar xzf -"
        fi
    else
        # 使用 SSH 密钥认证
        if ! ssh -o ConnectTimeout=5 -o BatchMode=yes "$vm_user@$vm_host" "exit" &> /dev/null; then
            print_error "无法 SSH 连接到虚拟机: $vm_user@$vm_host"
            print_info "请确保已配置 SSH 密钥认证或使用密码认证"
            rm -f "$TEMP_LIST"
            return 1
        fi
        
        # 使用 rsync
        rsync -avz --delete --files-from="$TEMP_LIST" ./ "$vm_user@$vm_host:$vm_path/"
    fi
    
    if [ $? -eq 0 ]; then
        print_success "文件同步完成!"
        print_info "在虚拟机上运行: cd $vm_path && flutter pub get"
    else
        print_error "文件同步失败"
        rm -f "$TEMP_LIST"
        return 1
    fi
    
    rm -f "$TEMP_LIST"
    echo ""
    return 0
}

# 同步计数
SUCCESS_COUNT=0
FAIL_COUNT=0

# 同步到 Linux
if [ "$TARGET_VM" = "all" ] || [ "$TARGET_VM" = "linux" ]; then
    LINUX_ENABLED=$(read_config "linux" "enabled")
    
    if [ "$LINUX_ENABLED" = "true" ]; then
        LINUX_HOST=$(read_config "linux" "host")
        LINUX_USER=$(read_config "linux" "user")
        LINUX_PATH=$(read_config "linux" "path")
        
        if sync_to_vm "LINUX" "$LINUX_HOST" "$LINUX_USER" "$LINUX_PATH" "false"; then
            ((SUCCESS_COUNT++))
        else
            ((FAIL_COUNT++))
        fi
    fi
fi

# 同步到 Windows
if [ "$TARGET_VM" = "all" ] || [ "$TARGET_VM" = "windows" ]; then
    WINDOWS_ENABLED=$(read_config "windows" "enabled")
    
    if [ "$WINDOWS_ENABLED" = "true" ]; then
        WINDOWS_HOST=$(read_config "windows" "host")
        WINDOWS_USER=$(read_config "windows" "user")
        WINDOWS_PATH=$(read_config "windows" "path")
        
        if sync_to_vm "WINDOWS" "$WINDOWS_HOST" "$WINDOWS_USER" "$WINDOWS_PATH" "true"; then
            ((SUCCESS_COUNT++))
        else
            ((FAIL_COUNT++))
        fi
    fi
fi

# 同步到 macOS
if [ "$TARGET_VM" = "all" ] || [ "$TARGET_VM" = "macos" ]; then
    MACOS_ENABLED=$(read_config "macos" "enabled")
    
    if [ "$MACOS_ENABLED" = "true" ]; then
        MACOS_HOST=$(read_config "macos" "host")
        MACOS_USER=$(read_config "macos" "user")
        MACOS_PATH=$(read_config "macos" "path")
        MACOS_PASSWORD=$(read_config "macos" "password")
        
        # macOS 使用密码或密钥认证
        if [ -n "$MACOS_PASSWORD" ]; then
            USE_PASSWORD="true"
        else
            USE_PASSWORD="false"
        fi
        
        if sync_to_vm "MACOS" "$MACOS_HOST" "$MACOS_USER" "$MACOS_PATH" "$USE_PASSWORD"; then
            ((SUCCESS_COUNT++))
        else
            ((FAIL_COUNT++))
        fi
    fi
fi

# 显示总结
print_info "==========================================="
print_info "同步总结"
print_info "==========================================="
print_success "成功: $SUCCESS_COUNT"
if [ $FAIL_COUNT -gt 0 ]; then
    print_error "失败: $FAIL_COUNT"
fi

echo ""
print_success "所有操作完成!"
echo ""

```

### 脚本flutter-sync.ps1(windows PowerShell运行,未测试)
```shell
#!/bin/bash

# Flutter 项目同步工具
# 支持同步到 Linux 和 Windows 虚拟机

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 脚本目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/sync-config.yaml"

# 打印函数
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 显示使用帮助
show_help() {
    cat <<EOF
Flutter 项目同步工具

用法:
    $(basename "$0") [选项] [目标]

选项:
    -h, --help              显示此帮助信息

目标:
    linux                   仅同步到 Linux 虚拟机
    windows                 仅同步到 Windows 虚拟机
    macos                   仅同步到 macOS 虚拟机
    all                     同步到所有虚拟机 (默认)

示例:
    $(basename "$0")                    # 同步到所有虚拟机
    $(basename "$0") windows            # 仅同步到 Windows
    $(basename "$0") macos              # 仅同步到 macOS

EOF
}

# 解析参数
TARGET_VM="all"
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        linux|windows|macos|all)
            TARGET_VM="$1"
            shift
            ;;
        *)
            print_error "未知参数: $1"
            show_help
            exit 1
            ;;
    esac
done

# 检查配置文件
if [ ! -f "$CONFIG_FILE" ]; then
    print_error "配置文件不存在: $CONFIG_FILE"
    exit 1
fi

# 检查项目
if [ ! -f "pubspec.yaml" ]; then
    print_error "不是有效的 Flutter 项目"
    exit 1
fi

PROJECT_NAME=$(basename "$(pwd)")

echo ""
print_info "Flutter 项目同步工具"
echo ""
print_success "检测到 Flutter 项目: $PROJECT_NAME"

# 读取配置
read_config() {
    local vm_type=$1
    local key=$2
    grep -A 6 "^${vm_type}:" "$CONFIG_FILE" | grep "${key}:" | head -1 | sed "s/^[[:space:]]*${key}:[[:space:]]*//" | tr -d '"' | tr -d "'" | sed 's/[[:space:]]*#.*//'
}

# 同步到虚拟机
sync_to_vm() {
    local vm_name=$1
    local vm_host=$2
    local vm_user=$3
    local vm_path=$4
    local use_password=$5
    
    print_info "==========================================="
    print_info "开始同步到 $vm_name ($vm_host)"
    print_info "==========================================="
    
    # 检查网络连接
    print_info "检查虚拟机连接: $vm_user@$vm_host"
    if ! ping -c 1 -W 2 "$vm_host" &> /dev/null; then
        print_error "无法 ping 通虚拟机: $vm_host"
        return 1
    fi
    
    # 准备文件列表
    print_info "准备同步文件列表..."
    TEMP_LIST=$(mktemp)
    
    # 根据目标平台排除不需要的平台文件夹
    PLATFORM_EXCLUDES=""
    case "$vm_name" in
        WINDOWS)
            PLATFORM_EXCLUDES="! -path \"*/web/*\" ! -path \"*/android/*\" ! -path \"*/ios/*\" ! -path \"*/macos/*\" ! -path \"*/linux/*\""
            print_info "Windows 平台: 排除 web, android, ios, macos, linux 目录"
            ;;
        LINUX)
            PLATFORM_EXCLUDES="! -path \"*/web/*\" ! -path \"*/android/*\" ! -path \"*/ios/*\" ! -path \"*/macos/*\" ! -path \"*/windows/*\""
            print_info "Linux 平台: 排除 web, android, ios, macos, windows 目录"
            ;;
        MACOS)
            PLATFORM_EXCLUDES="! -path \"*/web/*\" ! -path \"*/android/*\" ! -path \"*/ios/*\" ! -path \"*/linux/*\" ! -path \"*/windows/*\""
            print_info "macOS 平台: 排除 web, android, ios, linux, windows 目录"
            ;;
    esac
    
    # 只排除隐藏文件(以.开头)和build目录,以及不需要的平台目录
    eval "find . -type f \
        ! -path \"*/.*\" \
        ! -path \"*/build/*\" \
        $PLATFORM_EXCLUDES" > "$TEMP_LIST"
    
    FILE_COUNT=$(wc -l < "$TEMP_LIST")
    print_info "准备同步 $FILE_COUNT 个文件"
    
    # 同步文件
    print_info "开始同步文件..."
    
    if [ "$use_password" = "true" ]; then
        # 使用密码认证 - 从配置文件读取密码
        local vm_type=$(echo "$vm_name" | tr '[:upper:]' '[:lower:]')
        PASSWORD=$(read_config "$vm_type" "password")
        
        if [ -z "$PASSWORD" ]; then
            print_error "未设置 ${vm_name} 的密码"
            print_info "请在 sync-config.yaml 中设置 ${vm_type}.password"
            rm -f "$TEMP_LIST"
            return 1
        fi
        
        # 创建目标目录
        if [[ "$vm_path" == C:* ]] || [[ "$vm_path" == D:* ]]; then
            # Windows 路径
            print_info "使用 SCP 传输文件到 Windows..."
            
            # Windows SCP 路径: 保持 C:/ 格式,只需要将反斜杠转为正斜杠
            SCP_PATH=$(echo "$vm_path" | sed 's/\\/\//g')
            
            # 首先创建根目录 (使用 PowerShell 命令)
            print_info "创建根目录: $vm_path"
            # 使用 PowerShell 创建目录,更可靠
            if ! sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$vm_user@$vm_host" \
                "powershell -Command \"New-Item -ItemType Directory -Force -Path '$vm_path'\"" 2>&1 | grep -q "Directory"; then
                print_warning "目录可能已存在或创建失败,继续尝试同步..."
            fi
            
            # 使用 scp 逐个传输文件（Windows 兼容）
            FAILED_FILES=0
            TOTAL_FILES=$(wc -l < "$TEMP_LIST")
            CURRENT=0
            FAILED_LIST=$(mktemp)
            
            # 预先创建所有需要的目录
            print_info "预创建目录结构..."
            DIRS_TO_CREATE=$(mktemp)
            while IFS= read -r file; do
                clean_file=$(echo "$file" | sed 's|^\./||')
                dir=$(dirname "$clean_file")
                if [ "$dir" != "." ]; then
                    echo "$dir"
                fi
            done < "$TEMP_LIST" | sort -u > "$DIRS_TO_CREATE"
            
            # 批量创建目录 - 使用单个 PowerShell 命令
            DIR_COUNT=$(wc -l < "$DIRS_TO_CREATE")
            print_info "需要创建 $DIR_COUNT 个目录"
            
            if [ $DIR_COUNT -gt 0 ]; then
                # 构建 PowerShell 脚本
                PS_SCRIPT=""
                while IFS= read -r dir; do
                    PS_SCRIPT="${PS_SCRIPT}New-Item -ItemType Directory -Force -Path '$vm_path/$dir' | Out-Null; "
                done < "$DIRS_TO_CREATE"
                
                # 执行 PowerShell 脚本
                sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$vm_user@$vm_host" \
                    "powershell -Command \"$PS_SCRIPT\"" 2>/dev/null || print_warning "部分目录创建可能失败"
            fi
            
            rm -f "$DIRS_TO_CREATE"
            
            print_info "开始传输文件..."
            
            while IFS= read -r file; do
                ((CURRENT++))
                printf "\r传输进度: %d/%d" "$CURRENT" "$TOTAL_FILES"
                
                # 清理文件路径,移除 ./ 前缀 (Windows OpenSSH 不支持)
                clean_file=$(echo "$file" | sed 's|^\./||')
                
                # 传输文件 (使用 C:/ 格式的路径)
                ERROR_MSG=$(sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no \
                    "$file" "$vm_user@$vm_host:$SCP_PATH/$clean_file" 2>&1)
                if [ $? -ne 0 ]; then
                    ((FAILED_FILES++))
                    echo "$file: $ERROR_MSG" >> "$FAILED_LIST"
                fi
            done < "$TEMP_LIST"
            
            echo ""  # 换行
            
            print_info "传输统计: 成功 $((TOTAL_FILES - FAILED_FILES)) 个, 失败 $FAILED_FILES 个"
            
            if [ $FAILED_FILES -gt 0 ]; then
                print_error "有 $FAILED_FILES 个文件传输失败"
                print_info "失败详情:"
                cat "$FAILED_LIST"
                rm -f "$FAILED_LIST"
                rm -f "$TEMP_LIST"
                return 1
            fi
            
            rm -f "$FAILED_LIST"
        else
            # Linux/Unix 路径，使用 tar
            sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$vm_user@$vm_host" \
                "mkdir -p '$vm_path'" 2>/dev/null || true
            
            tar czf - --files-from="$TEMP_LIST" | \
                sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$vm_user@$vm_host" \
                "cd '$vm_path' && tar xzf -"
        fi
    else
        # 使用 SSH 密钥认证
        if ! ssh -o ConnectTimeout=5 -o BatchMode=yes "$vm_user@$vm_host" "exit" &> /dev/null; then
            print_error "无法 SSH 连接到虚拟机: $vm_user@$vm_host"
            print_info "请确保已配置 SSH 密钥认证或使用密码认证"
            rm -f "$TEMP_LIST"
            return 1
        fi
        
        # 使用 rsync
        rsync -avz --delete --files-from="$TEMP_LIST" ./ "$vm_user@$vm_host:$vm_path/"
    fi
    
    if [ $? -eq 0 ]; then
        print_success "文件同步完成!"
        print_info "在虚拟机上运行: cd $vm_path && flutter pub get"
    else
        print_error "文件同步失败"
        rm -f "$TEMP_LIST"
        return 1
    fi
    
    rm -f "$TEMP_LIST"
    echo ""
    return 0
}

# 同步计数
SUCCESS_COUNT=0
FAIL_COUNT=0

# 同步到 Linux
if [ "$TARGET_VM" = "all" ] || [ "$TARGET_VM" = "linux" ]; then
    LINUX_ENABLED=$(read_config "linux" "enabled")
    
    if [ "$LINUX_ENABLED" = "true" ]; then
        LINUX_HOST=$(read_config "linux" "host")
        LINUX_USER=$(read_config "linux" "user")
        LINUX_PATH=$(read_config "linux" "path")
        
        if sync_to_vm "LINUX" "$LINUX_HOST" "$LINUX_USER" "$LINUX_PATH" "false"; then
            ((SUCCESS_COUNT++))
        else
            ((FAIL_COUNT++))
        fi
    fi
fi

# 同步到 Windows
if [ "$TARGET_VM" = "all" ] || [ "$TARGET_VM" = "windows" ]; then
    WINDOWS_ENABLED=$(read_config "windows" "enabled")
    
    if [ "$WINDOWS_ENABLED" = "true" ]; then
        WINDOWS_HOST=$(read_config "windows" "host")
        WINDOWS_USER=$(read_config "windows" "user")
        WINDOWS_PATH=$(read_config "windows" "path")
        
        if sync_to_vm "WINDOWS" "$WINDOWS_HOST" "$WINDOWS_USER" "$WINDOWS_PATH" "true"; then
            ((SUCCESS_COUNT++))
        else
            ((FAIL_COUNT++))
        fi
    fi
fi

# 同步到 macOS
if [ "$TARGET_VM" = "all" ] || [ "$TARGET_VM" = "macos" ]; then
    MACOS_ENABLED=$(read_config "macos" "enabled")
    
    if [ "$MACOS_ENABLED" = "true" ]; then
        MACOS_HOST=$(read_config "macos" "host")
        MACOS_USER=$(read_config "macos" "user")
        MACOS_PATH=$(read_config "macos" "path")
        MACOS_PASSWORD=$(read_config "macos" "password")
        
        # macOS 使用密码或密钥认证
        if [ -n "$MACOS_PASSWORD" ]; then
            USE_PASSWORD="true"
        else
            USE_PASSWORD="false"
        fi
        
        if sync_to_vm "MACOS" "$MACOS_HOST" "$MACOS_USER" "$MACOS_PATH" "$USE_PASSWORD"; then
            ((SUCCESS_COUNT++))
        else
            ((FAIL_COUNT++))
        fi
    fi
fi

# 显示总结
print_info "==========================================="
print_info "同步总结"
print_info "==========================================="
print_success "成功: $SUCCESS_COUNT"
if [ $FAIL_COUNT -gt 0 ]; then
    print_error "失败: $FAIL_COUNT"
fi

echo ""
print_success "所有操作完成!"
echo ""

```

### 运行方法
将配置文件和脚本放到项目目录下，设置配置文件，命令行运行"./flutter-sync.sh"或者"./flutter-sync.sh linux"等等，可以同步单一平台或者多平台。
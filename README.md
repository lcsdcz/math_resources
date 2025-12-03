# 高中数学资源下载中心

一个简洁美观的高中数学试卷资源下载网站。

## 功能特点

- 📚 **分类浏览**：高一、高二、高三、高考卷、数学竞赛五大分类
- 🔍 **搜索功能**：快速搜索试卷名称
- 📱 **响应式设计**：支持手机、平板、电脑等各种设备
- 🎨 **现代 UI**：简洁美观的界面设计

## 目录结构

```
math/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── app.js          # 主逻辑
│   └── resources.js    # 资源配置（在此添加文件信息）
├── files/              # 文件存放目录
│   ├── grade1/         # 高一试卷
│   ├── grade2/         # 高二试卷
│   ├── grade3/         # 高三试卷
│   ├── gaokao/         # 高考真题
│   └── competition/    # 数学竞赛
└── README.md
```

## 如何添加新文件

### 步骤 1：上传文件

将试卷文件（PDF、Word 等）放入对应的文件夹：

- 高一试卷 → `files/grade1/`
- 高二试卷 → `files/grade2/`
- 高三试卷 → `files/grade3/`
- 高考真题 → `files/gaokao/`
- 数学竞赛 → `files/competition/`

### 步骤 2：更新配置

打开 `js/resources.js` 文件，在对应分类的数组中添加文件信息：

```javascript
// 例如添加一个高一试卷
grade1: [
    // ... 已有文件
    {
        name: "新试卷的显示名称",      // 页面上显示的名称
        filename: "实际文件名.pdf",    // 文件夹中的实际文件名
        size: "1.5MB",                 // 文件大小
        date: "2024-12-01"             // 上传日期
    }
]
```

## 本地运行

由于浏览器安全限制，直接双击打开 `index.html` 可能无法正常工作。请使用以下方式之一：

### 方式 1：使用 VS Code Live Server

1. 安装 VS Code 的 Live Server 扩展
2. 右键点击 `index.html`，选择 "Open with Live Server"

### 方式 2：使用 Python 简易服务器

```bash
# Python 3
python -m http.server 8080

# 然后访问 http://localhost:8080
```

### 方式 3：使用 Node.js

```bash
# 安装 serve
npm install -g serve

# 运行
serve .

# 然后访问显示的地址
```

## 部署到服务器

将整个 `math` 文件夹上传到你的 Web 服务器即可。

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript
- Font Awesome 图标

## 许可

仅供学习交流使用。

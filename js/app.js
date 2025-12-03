// 当前状态
let currentGrade = null;
let currentFolder = null;

// DOM 元素
const homePage = document.getElementById('homePage');
const gradePage = document.getElementById('gradePage');
const gradeCards = document.querySelectorAll('.grade-card');
const backBtn = document.getElementById('backBtn');
const gradeTitle = document.getElementById('gradeTitle');
const folderGrid = document.getElementById('folderGrid');
const folderCards = document.querySelectorAll('.folder-card');
const fileSection = document.getElementById('fileSection');
const backFolderBtn = document.getElementById('backFolderBtn');
const folderTitle = document.getElementById('folderTitle');
const fileCount = document.getElementById('fileCount');
const searchInput = document.getElementById('searchInput');
const fileGrid = document.getElementById('fileGrid');
const emptyState = document.getElementById('emptyState');

// 创建文件卡片 HTML
function createFileCard(file, grade) {
    const folderPath = folderPaths[grade];
    
    let buttonsHtml = '<div class="download-buttons">';
    
    if (file.paper) {
        buttonsHtml += `
            <a href="${folderPath}${file.paper}" class="download-btn paper-btn" download>
                <i class="fas fa-file-alt"></i>
                下载试卷
            </a>
        `;
    }
    
    if (file.answer) {
        buttonsHtml += `
            <a href="${folderPath}${file.answer}" class="download-btn answer-btn" download>
                <i class="fas fa-check-circle"></i>
                下载解析
            </a>
        `;
    }
    
    buttonsHtml += '</div>';

    return `
        <div class="file-card">
            <div class="file-icon">
                <i class="fas fa-book"></i>
            </div>
            <h3 class="file-name">${file.name}</h3>
            <div class="file-info">
                <span><i class="fas fa-calendar"></i> ${file.date}</span>
                <span><i class="fas fa-file"></i> ${file.paper ? '试卷' : ''}${file.paper && file.answer ? '+' : ''}${file.answer ? '解析' : ''}</span>
            </div>
            ${buttonsHtml}
        </div>
    `;
}

// 渲染文件列表
function renderFiles(searchTerm = '') {
    if (!currentGrade || !currentFolder) return;
    
    const files = resources[currentGrade]?.[currentFolder] || [];
    
    // 过滤搜索结果
    const filteredFiles = searchTerm 
        ? files.filter(file => file.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : files;

    // 更新计数
    fileCount.textContent = `${filteredFiles.length} 套`;

    // 渲染文件卡片
    if (filteredFiles.length === 0) {
        fileGrid.innerHTML = '';
        emptyState.style.display = 'block';
        if (searchTerm) {
            emptyState.querySelector('p').textContent = '未找到匹配的文件';
            emptyState.querySelector('span').textContent = '请尝试其他搜索关键词';
        } else {
            emptyState.querySelector('p').textContent = '暂无资源';
            emptyState.querySelector('span').textContent = '该分类下还没有上传文件';
        }
    } else {
        emptyState.style.display = 'none';
        fileGrid.innerHTML = filteredFiles
            .map(file => createFileCard(file, currentGrade))
            .join('');
    }
}

// 更新文件夹计数
function updateFolderCounts() {
    if (!currentGrade) return;
    
    const gradeData = resources[currentGrade];
    folderCards.forEach(card => {
        const folder = card.dataset.folder;
        const count = gradeData?.[folder]?.length || 0;
        card.querySelector('.folder-count').textContent = `${count} 套试卷`;
    });
}

// 进入年级页面
function enterGradePage(grade) {
    currentGrade = grade;
    currentFolder = null;
    
    // 更新标题
    gradeTitle.textContent = gradeNames[grade];
    
    // 更新文件夹计数
    updateFolderCounts();
    
    // 显示文件夹，隐藏文件列表
    folderGrid.style.display = 'grid';
    fileSection.style.display = 'none';
    
    // 切换页面
    homePage.classList.remove('active');
    gradePage.classList.add('active');
}

// 进入文件夹
function enterFolder(folder) {
    currentFolder = folder;
    
    // 更新标题
    folderTitle.textContent = folderNames[folder];
    
    // 清空搜索
    searchInput.value = '';
    
    // 隐藏文件夹，显示文件列表
    folderGrid.style.display = 'none';
    fileSection.style.display = 'block';
    
    // 渲染文件
    renderFiles();
}

// 返回首页
function goHome() {
    currentGrade = null;
    currentFolder = null;
    
    gradePage.classList.remove('active');
    homePage.classList.add('active');
}

// 返回文件夹列表
function goBackToFolders() {
    currentFolder = null;
    
    folderGrid.style.display = 'grid';
    fileSection.style.display = 'none';
}

// 事件监听：年级卡片点击
gradeCards.forEach(card => {
    card.addEventListener('click', () => {
        enterGradePage(card.dataset.grade);
    });
});

// 事件监听：返回首页
backBtn.addEventListener('click', goHome);

// 事件监听：文件夹卡片点击
folderCards.forEach(card => {
    card.addEventListener('click', () => {
        enterFolder(card.dataset.folder);
    });
});

// 事件监听：返回文件夹列表
backFolderBtn.addEventListener('click', goBackToFolders);

// 事件监听：搜索
searchInput.addEventListener('input', (e) => {
    renderFiles(e.target.value);
});

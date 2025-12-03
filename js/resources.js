/**
 * 资源配置文件
 * 
 * 结构说明：
 * resources[年级][文件夹类型] = 试卷数组
 * 
 * 年级: grade1(高一), grade2(高二), grade3(高三), gaokao(高考), competition(竞赛)
 * 文件夹类型: exams(期末试卷), chapters(章节练习), mock(模拟测试)
 */

const resources = {
    // 高一
    grade1: {
        exams: [
            {
                name: "2025年4月宁波六校联考",
                paper: "数学卷-2504高一宁波六校.pdf",
                answer: "数学答案-2504高一宁波六校.pdf",
                date: "2025-04"
            },
            {
                name: "2025年4月浙南名校联考",
                paper: "数学卷-2504高一浙南名校.pdf",
                answer: "数学答案-2504高一浙南名校.pdf",
                date: "2025-04"
            }
        ],
        chapters: [],
        mock: []
    },

    // 高二
    grade2: {
        exams: [],
        chapters: [],
        mock: []
    },

    // 高三
    grade3: {
        exams: [
            {
                name: "2025年9月江苏南京市高三学情调研",
                paper: "2025年9月江苏南京市2026届高三年级学情调研试卷.docx",
                answer: null,
                date: "2025-09"
            },
            {
                name: "2025年9月江西南昌市高三摸底考试",
                paper: "2025年9月江西省南昌市高三摸底考试数学试卷.docx",
                answer: "2025年9月江西省南昌市高三摸底考试数学全解析.docx",
                date: "2025-09"
            },
            {
                name: "2025年9月杭州高级中学高三月考",
                paper: "2025年9月浙江省杭州高级中学高三月考数学试卷.docx",
                answer: "2025年9月浙江省杭州高级中学高三月考数学答案.docx",
                date: "2025-09"
            },
            {
                name: "2025年9月苏州市高三阳光调研",
                paper: "2025年9月苏州市高三期初阳光调研数学试卷.docx",
                answer: "2025年9月苏州市高三期初阳光调研数学全解析.docx",
                date: "2025-09"
            }
        ],
        chapters: [
            {
                name: "2025年9月河北高三省级联考",
                paper: null,
                answer: "2025年9月河北高三省级联考全解析.docx",
                date: "2025-09"
            },
            {
                name: "2025年9月福建漳州市高三质检",
                paper: null,
                answer: "2025年9月福建省漳州市2026届高三毕业班第一次教学质量检测数学全解析.docx",
                date: "2025-09"
            }
        ],
        mock: [
            {
                name: "2025年3月宁波十校联考",
                paper: "数学卷-2503宁波十校.pdf",
                answer: "数学答案-2503宁波十校.pdf",
                date: "2025-03"
            },
            {
                name: "2025年3月金丽衢十二校联考",
                paper: "数学卷-2503金丽衢十二校.pdf",
                answer: "数学答案-2503金丽衢十二校.pdf",
                date: "2025-03"
            },
            {
                name: "2025年4月稽阳联谊",
                paper: "数学卷-2504稽阳联谊.pdf",
                answer: "数学答案-2504稽阳联谊.pdf",
                date: "2025-04"
            }
        ]
    },

    // 高考真题
    gaokao: {
        exams: [
            {
                name: "2025年新高考I卷",
                paper: "2025年新高考1卷数学试卷.docx",
                answer: "2025年新高考1卷数学试卷全解析.docx",
                date: "2025-06"
            },
            {
                name: "2024年新高考I卷",
                paper: "2024年全国新高考1卷数学试题.docx",
                answer: "2024年全国新高考1卷数学全解析.docx",
                date: "2024-06"
            },
            {
                name: "2023年新高考I卷",
                paper: "2023年普通高等学校招生全国统一考试新高考I卷.docx",
                answer: "2023年普通高等学校招生全国统一考试新高考I卷全解析.docx",
                date: "2023-06"
            }
        ],
        chapters: [],
        mock: []
    },

    // 数学竞赛
    competition: {
        exams: [],
        chapters: [],
        mock: []
    }
};

// 年级名称映射
const gradeNames = {
    grade1: "高一数学",
    grade2: "高二数学",
    grade3: "高三数学",
    gaokao: "高考真题",
    competition: "数学竞赛"
};

// 文件夹名称映射
const folderNames = {
    exams: "各地期末试卷",
    chapters: "各章节练习",
    mock: "模拟测试卷"
};

// 文件夹路径映射
const folderPaths = {
    grade1: "files/grade1/",
    grade2: "files/grade2/",
    grade3: "files/grade3/",
    gaokao: "files/gaokao/",
    competition: "files/competition/"
};

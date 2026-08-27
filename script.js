const translations = {
  zh: {
    pageTitle: "杨一帆 / Evan Yang — 算法工程师",
    pageDescription: "杨一帆，蚂蚁集团算法工程师，专注于多模态大语言模型训练引擎与超大规模训练集群。",
    navExperience: "经历", navWork: "项目", navAbout: "关于", hello: "你好，我是", namePrimary: "杨一帆", nameSecondary: "Evan Yang",
    role: "算法工程师", introLabel: "简介",
    introText: "我是一名算法工程师，热衷于构建事物并探究其运作原理。我的兴趣涵盖大模型训练及其底层原理，也对大模型算法本身有浓厚兴趣。",
    experienceTitle: "工作经历", antDate: "2026.07 — 至今", antGroup: "蚂蚁集团", location: "中国 · 杭州",
    antRole: "算法工程师", antDescription: "从事多模态大语言模型训练引擎研发，研究超大规模训练集群的稳定性与 MFU 提升，以及跨集群、低精度、容错和弹性训练。",
    educationTitle: "教育经历", ustc: "中国科学技术大学", graduateDegree: "计算机科学与技术 · 硕士",
    npu: "西北工业大学", bachelorDegree: "计算机科学与技术 · 本科", selectedWorkTitle: "精选项目",
    workPlaceholderTitle: "正在整理中", workPlaceholderText: "值得分享的工作与个人项目会陆续出现在这里。",
    aboutTitle: "关于", aboutText: "我是杨一帆，一名关注系统效率与工程质量的基础设施工程师。目前的兴趣集中在训练系统、分布式计算与大模型工程。",
    contactTitle: "保持联系", contactText: "如果你也在做 AI Infra，欢迎交流。", footerText: "杭州，中国",
  },
  en: {
    pageTitle: "Evan Yang — Algorithm Engineer",
    pageDescription: "Evan Yang is an Algorithm Engineer at Ant Group, focused on multimodal LLM training engines and ultra-scale training clusters.",
    navExperience: "Experience", navWork: "Work", navAbout: "About", hello: "Hello, I’m", namePrimary: "Evan Yang", nameSecondary: "杨一帆",
    role: "Algorithm Engineer", introLabel: "Intro",
    introText: "I’m an algorithm engineer who enjoys building things and understanding how they work. My interests span large-model training and its underlying principles, as well as the algorithms behind large models themselves.",
    experienceTitle: "Work Experience", antDate: "Jul 2026 — Present", antGroup: "Ant Group", location: "Hangzhou, China",
    antRole: "Algorithm Engineer", antDescription: "Developing multimodal LLM training engines and improving stability and MFU in ultra-scale clusters, with a focus on cross-cluster, low-precision, fault-tolerant, and elastic training.",
    educationTitle: "Education", ustc: "University of Science and Technology of China", graduateDegree: "M.S. in Computer Science and Technology",
    npu: "Northwestern Polytechnical University", bachelorDegree: "B.E. in Computer Science and Technology", selectedWorkTitle: "Selected Work",
    workPlaceholderTitle: "Work in progress", workPlaceholderText: "Projects and work worth sharing will be added here over time.",
    aboutTitle: "About", aboutText: "I’m Evan Yang, an infrastructure engineer who cares about systems efficiency and engineering quality. My current interests include training systems, distributed computing, and LLM engineering.",
    contactTitle: "Let’s connect", contactText: "If you’re building AI infrastructure too, I’d be happy to talk.", footerText: "Hangzhou, China",
  },
};

const toggle = document.querySelector(".language-button");
const languageLabel = document.querySelector("[data-language-label]");
const metaDescription = document.querySelector('meta[name="description"]');

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = copy.pageTitle;
  metaDescription.content = copy.pageDescription;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelector(".avatar").alt = language === "zh" ? "杨一帆的头像" : "Portrait of Evan Yang";
  languageLabel.textContent = language === "zh" ? "EN" : "中";
  toggle.dataset.language = language;
  toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换至中文");
  localStorage.setItem("preferred-language", language);
}

toggle.addEventListener("click", () => setLanguage(toggle.dataset.language === "zh" ? "en" : "zh"));
document.querySelector("[data-year]").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("preferred-language") || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en"));

// 스크린 사이즈가 작아지면 나오는 메뉴 관련
const toggleBtn = document.querySelector('.nav_toogleBtn');
const icon = document.querySelector('.nav_menu_icon');
const menu = document.querySelector('.nav_menu');
const content1 = document.querySelector('#content1.contents_container');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icon.classList.toggle('active');
    content1.classList.toggle('active');
});

// 사이트 언어 관련
const lang = {
    en: {
        title: "Chaipang Chinese",
        composition: "Features and composition",
        howEnjoy: "How to enjoy",
        cFriends: "Chaipang friends",
        company: "Company",
        content1_info1: "Learn Chinese tones and pronunciation naturally while singing and dancing!",
        content1_info2: "where children can learn straight away.",
        content2_title: "Have fun in a fantasy world!",
        content2_info0: "With ",
        content2_info1: "“Chaipang Friends”",
        content2_info2: "",
        content2_info3: "You can speak Chinese right away without memorizing and studying!",
        content3_title: "How to enjoy Chaipang Chinese",
        content3_info0: "with ",
        content3_info1: "",
        content4_title1: "Introducing Chaipang friends",
        content4_title2: "in a fantasy world!",
        content4_info1_1: "You can meet unicorn ",
        content4_info1_2: "Conzy and Malco in stage 1",
        content4_info1_3: "",
        content4_info1_4: "",
        content4_info2_1: "dragon ",
        content4_info2_2: "Dora and Gon in stage 2",
        content4_info2_3: "",
        content4_info2_4: "",
        content4_info3_1: "and mermaid ",
        content4_info3_2: "Gabi and Finn in stage 3",
        content4_info3_3: "",
        content4_info3_4: "",
        content4_info3_5: "",
        content5_info1: "Wecref Co.,Ltd. is an EdTech company that creates a fantasy world for children around the world.",
        content5_info2: "",
        content5_info3: "By providing children with ‘highly interesting and informative’ content, we aim to create a fantasy world for children both online and offline.",
        content5_info4: "",
        content5_info5: "",
        content5_info6: "We produce a variety of educational content with the characters of 'Chaipang friends', and sell and distribute them through Apps, YouTube, and other digital media.",
        content5_info7: "",
        content5_info8: "",
        content5_info9: "In March 2021, we launched our flagship service 'Chaipang Chinese'.",
    },
    ko: {
        title: "차이팡 중국어",
        composition: "특징 및 구성",
        howEnjoy: "이용방법",
        cFriends: "차이팡친구들",
        company: "회사소개",
        content1_info1: "노래하고 춤추면 성조와 발음이 저절로!",
        content1_info2: "아이들이 바로 말 할 수 있는",
        content2_title: "환상의 세계에서 신나게 놀아요!",
        content2_info0: "",
        content2_info1: "'차이팡 친구들'",
        content2_info2: " 과 함께라면",
        content2_info3: "외워서 공부하지 않아도 바로 중국어를 말할 수 있어요!",
        content3_title: "차이팡 친구들과 함께!",
        content3_info0: "",
        content3_info1: "를 즐기는 방법",
        content4_title1: "환상의 세계 속",
        content4_title2: "차이팡 친구들을 소개합니다!",
        content4_info1_1: "",
        content4_info1_2: "'1단계'",
        content4_info1_3: "에서는 유니콘, ",
        content4_info1_4: "콘지와 말코",
        content4_info2_1: "",
        content4_info2_2: "'2단계'",
        content4_info2_3: "에서는 드래곤, ",
        content4_info2_4: "도라와 곤",
        content4_info3_1: "",
        content4_info3_2: "'3단계'",
        content4_info3_3: "에서는 인어, ",
        content4_info3_4: "가비와 핀",
        content4_info3_5: "을 만나요!",
        content5_info1: "(주)위크리프는 전 세계 어린이들을 위한 ",
        content5_info2: "환상의 세계를 만드는 에듀테크 기업입니다.",
        content5_info3: "'안전하고 유익한' 콘텐츠를 제공하여, ",
        content5_info4: "온라인과 오프라인 환경 모두에서 아이들을 위한 ",
        content5_info5: "환상의 세계를 만들기 위해 노력합니다.",
        content5_info6: "'차이팡 친구들' 캐릭터와 함께 하는 ",
        content5_info7: "교육 콘텐츠를 제작하고, 2021년 3월 ",
        content5_info8: "주력 서비스인 '차이팡 중국어'를 런칭하였습니다.",
        content5_info9: "",
    }
};
// 초기 작업
const currentLang = getLanguage();
render(currentLang.substr(0, 2));

// 버튼 이벤트
document.getElementById("btn-en").addEventListener("click", e => {
    render("en");
});
document.getElementById("btn-ko").addEventListener("click", e => {
    render("ko");
});
function getLanguage() {
    return navigator.language || navigator.userLanguage;
};
function render(locale) {
    const $lang = document.querySelectorAll("[data-lang]")
    $lang.forEach(el => {
        const code = el.dataset.lang
        el.textContent = lang[locale][code]
    });
};
const works = [
  {
    title: "서초구청 세금알아보기",
    desc: "서초구청 세금알아보기 사이트 구축",
    url: "https://www.seocho.go.kr/site/tax/main.do",
  },
  {
    title: "서초구청",
    desc: "서초구청 사이트 유지보수",
    url: "https://www.seocho.go.kr/site/seocho/main.do",
  },
  {
    title: "국민연금 ESG 경영",
    desc: "선거관리위원회 및 산하 웹서비스 구축·유지보수",
    url: "https://www.nps.or.kr/esg/main.do",
  },
  {
    title: "부천시 빅데이터",
    desc: "부천시 빅데이터 사이트 구축",
    url: "https://insight.bucheon.go.kr/px/user/main/pageMain.do",
  },
  {
    title: "NHN 인재INC",
    desc: "NHN 인재INC 사이트 리뉴얼",
    url: "https://www.injeinc.co.kr/new/main/main.asp",
  },
  {
    title: "선거관리위원회 온라인투표",
    desc: "온라인투표 사이트 웹접근성·유지보수",
    url: "https://vote.kvoting.go.kr/",
  },
  {
    title: "행정안전부 국가기록원",
    desc: "행정안전부 국가기록원 사이트 구축",
    url: "https://theme.archives.go.kr/next/exhibition/index.do",
  },
  {
    title: "중앙선거관리위원회",
    desc: "중앙선거관리위원회 사이트 웹접근성·유지보수",
    url: "https://www.nec.go.kr/site/nec/main.do#anchor1",
  },
  {
    title: "서현기술단",
    desc: "서현기술단 사이트 구축",
    url: "http://seohyuneng.co.kr/",
  },
  {
    title: "엠아이듀",
    desc: "엠아이듀 사이트 구축",
    url: "https://miedu.co.kr/web/intro.php",
  },
  {
    title: "삼성포리머",
    desc: "삼성포리머 사이트 구축",
    url: "http://www.sspol.com/web/home.php",
  },
];

const workList = document.getElementById("workList");
const moreBtn = document.getElementById("moreBtn");

let page = 0;
const perPage = 6;

function renderWorks() {
  const start = page * perPage;
  const end = start + perPage;
  const currentWorks = works.slice(start, end);

  currentWorks.forEach((work) => {
    const card = document.createElement("article");
    card.className = "workCard";

    card.innerHTML = `
      <h3>${work.title}</h3>
      <p>${work.desc}</p>
      <a href="${work.url}" target="_blank" rel="noopener noreferrer">사이트보기</a>
    `;

    workList.appendChild(card);
  });

  page++;

  if (page * perPage >= works.length) {
    moreBtn.style.display = "none";
  }
}

renderWorks();

moreBtn.addEventListener("click", renderWorks);

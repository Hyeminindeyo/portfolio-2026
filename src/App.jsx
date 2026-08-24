import { useEffect, useState } from "react";
import "../asset/css/reset.css";
import "../asset/css/main.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const showElements = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("on");
        }
      });
    };
    const observer = new IntersectionObserver(showElements);
    revealElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "on" : ""}`}>
        <div className="Inner">
          <h1 className="Logo">
            <a href="#Home">Hyemin Portfolio</a>
          </h1>
          <nav>
            <ul className="menu">
              <li className="menuList">
                <a href="#Career">Career</a>
              </li>
              <li className="menuList">
                <a href="#Work">Work</a>
              </li>
              <li className="menuList">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="Home" className="section1">
          <div className="Inner">
            <div className="slogan">
              <p className="slogan_text reveal">HYEMIN'S PORTFOLIO</p>
            </div>
          </div>
        </section>
        <section id="Career" className="section2">
          <div className="Inner">
            <h2 className="reveal">Career</h2>
            <div className="careerBoxWrap reveal">
              <div className="careerBox">
                <h3>신비웹</h3>
                <p className="careerDate">2018.10 - 2019.12</p>
                <p className="careerName">Web Publisher</p>
                <div className="careerSection">
                  <h4>주요 업무</h4>
                  <ul>
                    <li>신규 사이트 구축 및 퍼블리싱</li>
                    <li>기존 사이트 유지보수</li>
                    <li>반응형 웹 제작</li>
                  </ul>
                </div>
                <div className="careerSection">
                  <h4>사용 기술</h4>
                  <div className="skillTag">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                  </div>
                </div>
                <div className="careerSection">
                  <h4>대표 프로젝트</h4>
                  <ul>
                    <li>이화여자대학교 화학신소재공학 사이트 구축</li>
                    <li>서현 기술단 사이트 구축</li>
                    <li>엠아이듀 사이트 구축</li>
                    <li>한양씨앤틱 사이트 구축</li>
                    <li>삼성포리머 사이트 구축</li>
                  </ul>
                </div>
              </div>
              <div className="careerBox">
                <h3>NHN inje INC</h3>
                <p className="careerDate">2022.03 - 2024.11</p>
                <p className="careerName">Web Publisher</p>
                <div className="careerSection">
                  <h4>주요 업무</h4>
                  <ul>
                    <li>신규 사이트 구축 및 퍼블리싱</li>
                    <li>기존 사이트 유지보수</li>
                    <li>반응형 웹 제작</li>
                    <li>웹 접근성 준수 및 개선</li>
                    <li>크로스 브라우징 대응</li>
                    <li>퍼블리싱 가이드 제작</li>
                  </ul>
                </div>
                <div className="careerSection">
                  <h4>사용 기술</h4>
                  <div className="skillTag">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                  </div>
                </div>
                <div className="careerSection">
                  <h4>대표 프로젝트</h4>
                  <ul>
                    <li>국민연금 관련 사이트 구축 및 유지보수</li>
                    <li>서초구청 사이트 유지보수</li>
                    <li>선거관리위원회 및 산하 웹서비스 구축·유지보수</li>
                    <li>선거관리위원회 관련 웹사이트 웹접근성 개선</li>
                    <li>부천시 빅데이터 사이트 구축</li>
                    <li>NHN 인재INC 사이트 리뉴얼</li>
                    <li>국가 기록원 사이트 구축</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Work" className="section3">
          <div className="Inner">
            <h2 className="reveal">Work</h2>
            <div className="workList reveal" id="workList"></div>
            <button type="button" className="moreBtn reveal" id="moreBtn">
              더보기 +
            </button>
          </div>
        </section>
        <section id="Contact" className="section4">
          <div className="Inner">
            <h2 className="reveal">Contact Me</h2>
            <div className="reveal">
              <h3>
                새로운 기회와 협업을 기다리고 있습니다. <br />
                언제든 편하게 연락해주세요.
              </h3>
              <p>
                <strong> 전화번호 : </strong>
                <a href="tel:01072002389">010-7200-2389</a>
              </p>
              <p>
                <strong>이메일 :</strong>
                <a href="mailto:phsoo1997@daum.net">phsoo1997@daum.net</a>
              </p>
              <p>
                <strong>Github :</strong>
                <a
                  href="https://github.com/Hyeminindeyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Hyeminindeyo
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

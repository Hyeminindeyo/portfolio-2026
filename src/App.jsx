import { useEffect, useState } from "react";
import Header from "./components/Header";
import Career from "./components/Career";
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
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />

      <main>
        <section id="Home" className="section1">
          <div className="Inner">
            <div className="slogan">
              <p className="slogan_text reveal">HYEMIN'S PORTFOLIO</p>
            </div>
          </div>
        </section>
        <Career />
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

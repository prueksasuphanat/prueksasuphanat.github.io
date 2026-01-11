export default {
  props: {},

  data() {
    return {
      lang: localStorage.getItem("lang") || "en",
    };
  },
  methods: {},
  template: `
    <div class="portfolio section" id="portfolio">
        <h2 class="section__title">{{ $t("text.Portfolio") }}</h2>
        <div class="portfolio__container container grid">
            <div class="portfolio__img">
                <img src="./images/demo2.png"/>
            </div>
            <div class="portfolio__content">
                
                <h3 class="portfolio__title">E Commerce 🏠 ({{ $t("text.y2023") }})</h3>
                <p class="portfolio__description">A furniture sales website utilizing HTML and CSS for practice purposes. This website features responsive web design but does not include sales function   </p>
                <div class="portfolio__subtitle">
                    <p>Html</p>
                    <p>Css</p>
                    <p>Javascript</p>
                    <p>Bootstrap</p>
                </div>
                <div class="portfolio__link">
                    <a href="https://github.com/prueksasuphanat/prueksasuphanat.github.io/tree/main/mid-term-project" class="contact__button portfolio__button"><i class='bx bxl-github portfolio__icon' ></i>Code<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    <a href="/mid-term-project/index.html" class="contact__button portfolio__button"><i class='bx bx-code-alt portfolio__icon'></i>Demo<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>    
                </div>

            </div>
        </div>
        <div class="portfolio__container container grid">
            <div class="portfolio__img">
                <img src="./images/demo1.png"/>
            </div>
            <div class="portfolio__content">
                
                <h3 class="portfolio__title">Online course 🎓 ({{ $t("text.y2023") }})</h3>
                <p class="portfolio__description">A online course website that allows user to learn about programming.This project is intended to practice web development using React and utilizing APIs.  </p>
                <div class="portfolio__subtitle">
                    <p>React</p>
                    <p>Css</p>
                    <p>Typescript</p>
                </div>
                <div class="portfolio__link">
                    <a href="https://github.com/prueksasuphanat/Final-Project" class="contact__button portfolio__button"><i class='bx bxl-github portfolio__icon' ></i>Code<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    <a href="" class="contact__button portfolio__button"><i class='bx bx-code-alt portfolio__icon'></i>Demo<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>    
                </div>
            </div>
        </div>
        <div class="portfolio__container container grid">
            <div class="portfolio__img">
                <img src="./images/demo3.png"/>
            </div>
            <div class="portfolio__content">
                <h3 class="portfolio__title">Personal Blog 👦🏻 ({{ $t("text.y2023") }})</h3>
                <p class="portfolio__description">This is a blog website from Devint Course, which does not include backend development. The website consists of various frontend sections such as Home, Create Blog, Profile. Developing this website allows learning about adjusting web page layouts into Dark mode.</p>
                <div class="portfolio__subtitle">
                    <p>Html</p>
                    <p>Css</p>
                    <p>Javascript</p>

                </div>
                <div class="portfolio__link">
                    <a href="" class="contact__button portfolio__button"><i class='bx bxl-github portfolio__icon' ></i>Code<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    <a href="/prueksasuphanat.github.io/Blog-Platform/home.html" class="contact__button portfolio__button"><i class='bx bx-code-alt portfolio__icon'></i>Demo<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>    
                </div>
            </div>
        </div>

         <div class="portfolio__container container grid">
            <div class="portfolio__img">
                <img src="./images/demo4.png"/>
            </div>
            <div class="portfolio__content">
                <h3 class="portfolio__title">My Cash Book 📊 ({{ $t("text.y2025") }})</h3>
                <p class="portfolio__description">{{ $t("text.ContentDemo4") }}</p>
                <div class="portfolio__subtitle">
                    <p>Html</p>
                    <p>Css</p>
                    <p>Javascript</p>

                </div>
                <div class="portfolio__link">
                    <a href="" class="contact__button portfolio__button"><i class='bx bxl-github portfolio__icon' ></i>Code<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    <a href="/prueksasuphanat.github.io/Blog-Platform/home.html" class="contact__button portfolio__button"><i class='bx bx-code-alt portfolio__icon'></i>Demo<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>    
                </div>
            </div>
                  
        </div>
        
    </div>

    `,
};

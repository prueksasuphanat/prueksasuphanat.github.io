export default {
  props: {},

  data() {
    return {};
  },
  methods: {},
  template: `
    <div class="home__container container grid" id="home">
        <div class="home__content grid">
            <div class="home__social">
                <a class="home__social-icon" target="_blank" href="http://www.linkedin.com/in/suphanat-panyakom-1483522bb">
                    <i class="uil uil-linkedin-alt"></i>
                </a>
                <a class="home__social-icon" target="_blank" href="https://github.com/prueksasuphanat">
                    <i class="uil uil-github-alt"></i>                
                </a>
                <a class="home__social-icon" target="_blank" href="https://www.instagram.com/py24.7/">
                    <i class="uil uil-instagram"></i>
                </a>
            </div>
                
                <div class="home__img"></div> 

                <div class="home__data">
                    <h1 class="home__title">{{ $t("text.Hello") }}, I'm {{ $t("text.Pruek") }} 👋</h1>
                    <h3 class="home__subtitle">{{$t("text.Suphanat")}} {{$t("text.Panyakom")}}</h3>
                    <p class="home__description">{{  $t("text.ContentAboutMe")}}</p>

                </div>

        </div>
    </div>

    `,
};

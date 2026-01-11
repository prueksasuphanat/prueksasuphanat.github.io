export default {
  props: {},

  data() {
    return {
      selectedLanguage: localStorage.getItem("lang") || "en",
    };
  },
  methods: {
    ChangeLanguage() {
      this.selectedLanguage === "en"
        ? (this.selectedLanguage = "th")
        : (this.selectedLanguage = "en");
      localStorage.setItem("lang", this.selectedLanguage);
      this.$root.$i18n.locale = this.selectedLanguage;
    },
  },
  template: `
    <div>
        <header class="header">
            <nav class="nav container">
            <div class="logo__container">
                <a class="nav__logo" href="#"><h2>{{ $t("text.Pruek") }}</h2></a>
                <div class="checkbox_item ">
                    <span class="th">TH</span>

                    <label class="checkbox_wrap">
                    <input class = "toggle" type="checkbox" :checked="selectedLanguage === 'en'" @change="ChangeLanguage">
                    <span class="checkbox_mark"></span>
                    </label>
                    <span class="en">EN</span>

                </div>
            </div>
                <div class="nav__menu">
                    <ul class="nav__list grid">
                        <li class="nav__item">
                            <a class="nav__link active-link" href="home" onclick="scrollToSection('home')">
                                <i class="uil uil-home nav__icon"></i>
                                {{ $t("text.Home") }}
                            </a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="about" onclick="scrollToSection('about')">
                                <i class="uil uil-user nav__icon"></i>
                                {{ $t("text.About") }}
                            </a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="portfolio" onclick="scrollToSection('portfolio')">
                                <i class="uil uil-scenery nav__icon"></i>
                                {{ $t("text.Portfolio") }}
                            </a>
                        </li>
                        <li class="nav__item">
                            <a class="nav__link" href="contact" onclick="scrollToSection('contact')">
                                <i class="uil uil-message nav__icon"></i>
                                {{ $t("text.Contact") }}
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onclick="CloseMenu()"></i>
                </div>
                <div class="nav__toggle" onclick="ToggleMenu()">
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    </div>
    `,
};

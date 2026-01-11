export default {
  props: {},

  data() {
    return {};
  },
  methods: {},
  template: `
    <div class="Contact section" id="contact">
        <h2 class="section__title">{{ $t("text.ContactMe") }}</h2>
        <div class="contact__container container grid">
            <div class="contact__content">
                <h3 class="contact__title">Talk to me</h3>
                    <div class="contact__info" >
                        <div class="contact__card">
                            <i class="bx bx-mail-send contact__card-icon"></i>
                            <h3 class="contact__card-title">Email</h3>
                            <span class="contact__card-data">suphanat.pruek@gmail.com</span>

                            <a href="" class="contact__button">Write me<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                        <div class="contact__card">
                            <i class="bx bx-phone-call contact__card-icon "></i>
                            <h3 class="contact__card-title">Phone</h3>
                            <span class="contact__card-data">098-669-9033</span>

                            <a href="" class="contact__button">Write me<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                        <div class="contact__card">
                            <i class='bx bxl-discord-alt bx-tada contact__card-icon' ></i>
                            <h3 class="contact__card-title">Discord</h3>
                            <span class="contact__card-data">suphanat.pruek@gmail.com</span>

                            <a href="https://www.discordapp.com/users/389665555906297856" class="contact__button">Write me<i class="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>

            </div>
            <div class="contact__content">
                <h3 class="contact__title">Write somthing to me</h3>
                <form class="contact__form">
                    <div class="contact__form-div">
                        <label class="contact__form-tag">Name</label>
                        <input type = "text" name="name" class="contact__form-input" placeholder="Insert your name." />

                    </div>
                    <div class="contact__form-div">
                        <label class="contact__form-tag">Mail</label>
                        <input type = "email" name="email" class="contact__form-input" placeholder="Insert your email." />

                    </div>
                    <div class="contact__form-div contact__form-area">
                        <label class="contact__form-tag">Something</label>
                        <textarea name="" id="" cols="30" row="10" 
                        class="contact__form-input" placeholder="Write something."></textarea>

                    </div>
                    
                <a disabled style="pointer-events: none;" class="button button--flex about__btn">Send Message<span class="material-symbols-outlined">send</span></a>
                </form>



            </div>


        </div>
            
    </div>
    
    `,
};

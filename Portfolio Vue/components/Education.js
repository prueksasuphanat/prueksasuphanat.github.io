export default {
    props: {
        

    },

    data() {
        return {

            
        };
    },
    methods: {


    },
    template: `
    
    <div class="education section">
        <h2 class="section__title">{{ $t("text.Education") }} & {{ $t("text.Experience") }}</h2>

        <div class="education__container container">
            <div class="education__tabs">
                <div class="education__button button--flex education__btn--education " onclick="toggleContent('education')">
                    <i class="uil uil-graduation-cap  education__icon" 
                     ></i>{{ $t("text.Education") }}
                </div>
                <div class="education__button button--flex education__btn--experience" onclick="toggleContent('experience')" >
                    <i class="uil uil-briefcase-alt education__icon"
                    ></i>{{ $t("text.Experience") }}
                </div>
            </div>
            <div class="education__sections">
                <div class="education__content education__content--experience">
                    <div class="education__data">
                        <div>
                            <h3 class="education__title">Road to Frontend Developer Bootcamp #2</h3>
                            <span class="education__subtitle">Certificate-BorntoDev</span>
                            <div class="education__calender">
                                <i class="uil uil-calendar-alt"></i> 2023 - 2024
                            </div>
                        </div>
                        <div>
                            <span class="education__rounder">
                            </span>
                            <span class="education__line">
                            </span>
                        </div>
                    </div>
                    <div class="education__data">
                        <div></div>
                        <div>
                            <span class="education__rounder">
                            </span>
                            <span class="education__line">
                            </span>
                        </div>
                        <div>
                            <h3 class="education__title">Dev Init Project</h3>
                            <span class="education__subtitle">BorntoDev</span>
                            <div class="education__calender">
                                <i class="uil uil-calendar-alt"></i> 2024 - present
                            </div>
                        </div>              
                    </div>             
                </div>
                <div class="education__content-active education__content--education">
                    <div class="education__data">
                        <div class="education__info">
                            <h3 class="education__title">High School</h3>
                            <span class="education__subtitle">Phadungpanya <br>(Tak,Thailand)</span>
                            <div class="education__calender">
                                <i class="uil uil-calendar-alt"></i> 2023 - 2024

                            </div>
                        </div>
                        <div >
                            <span class="education__rounder">
                            </span>
                            <span class="education__line">
                            </span>
                        </div>
                        
                    </div>
                    
                    <div class="education__data">
                        <div></div>
                        <div class="line">
                            <span class="education__rounder">
                            </span>
                            <span class="education__line">
                            </span>
                        </div>
                        <div>
                            <h3 class="education__title">B.Eng<br>(Industrial Engineering)</h3>
                            <span class="education__subtitle">ChiangMai <br> University</span>
                            <div class="education__calender">
                                <i class="uil uil-calendar-alt"></i> 2015 - 2019
                            </div> 
                        </div>                             
                    </div>                        
                    <div class="education__data">                                                        
                        <div>
                            <h3 class="education__title">M.Eng<br>(Industrial Engineering)</h3>
                            <span class="education__subtitle">ChiangMai<br>University</span>
                            <div class="education__calender">
                                <i class="uil uil-calendar-alt"></i> 2019 - 2023
                            </div>                            
                        </div> 
                        <div class="line">                            
                            <span class="education__rounder">
                            </span>
                            <span class="education__line">
                            </span>
                        </div>                                                                 
                    </div>                                   
                </div>                   
            </div>           
       </div>
    </div>
    
    `
}

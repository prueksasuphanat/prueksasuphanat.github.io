export default {
  data() {
    return {
      lang: localStorage.getItem("lang") || "en",
    };
  },
  computed: {},
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
                                  <i class="uil uil-calendar-alt"></i> {{ $t("text.Nov")}} {{ $t("text.y2023") }} - {{ $t("text.Feb")}} {{ $t("text.y2024") }}
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
                              <h3 class="education__title">IT-CAT Co.,Ltd ({{ $t("text.ChiangMai")}})</h3>
                              <span class="education__subtitle">Frontend Dev</span>
                              <div class="education__calender">
                                  <i class="uil uil-calendar-alt"></i> {{ $t("text.Apr")}} {{ $t("text.y2024") }} - {{ $t("text.Jul")}} {{ $t("text.y2024") }}  
                              </div>
                          </div>              
                      </div>    
                      
                      <div class="education__data">
                          <div>
                              <h3 class="education__title">Wolves Corporation ({{ $t("text.ChiangMai")}})</h3>
                              <span class="education__subtitle">Frontend Dev (1 {{ $t("text.month")}}), Backend Dev</span>
                              <div class="education__calender">
                                  <i class="uil uil-calendar-alt"></i> {{ $t("text.Aug")}} {{ $t("text.y2024") }} - {{ $t("text.Dec")}} {{ $t("text.y2024") }}
                              </div>
                          </div>
                          <div>
                              <span class="education__rounder">
                              </span>
                              <span class="education__line">
                              </span>
                          </div>
                      </div>
                  </div>
                  <div class="education__content-active education__content--education">
                      <div class="education__data">
                          <div class="education__info">
                              <h3 class="education__title">{{  $t("text.HighSchool")}}</h3>
                              <span class="education__subtitle">{{  $t("text.PhadungPanya")}}<br>({{  $t("text.Tak")}},{{  $t("text.Thailand")}})</span>
                              <div class="education__calender">
                                  <i class="uil uil-calendar-alt"></i> {{ $t("text.y2008") }} - {{ $t("text.y2014") }}
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
                              <h3 class="education__title">{{ $t("text.BEngFull") }}<br>({{$t("text.IndustrialEng")}})</h3>
                              <span class="education__subtitle">{{  $t("text.ChiangMai")}} <br> {{  $t("text.University")}}</span>
                              <div class="education__calender">
                                  <i class="uil uil-calendar-alt"></i> {{ $t("text.y2015") }} - {{ $t("text.y2019") }}
                              </div> 
                          </div>                             
                      </div>                        
                      <div class="education__data">                                                        
                          <div>
                              <h3 class="education__title">{{  $t("text.MEngIEFull") }}<br>({{$t("text.IndustrialEng")}})</h3>
                              <span class="education__subtitle">{{  $t("text.ChiangMai")}} <br> {{  $t("text.University")}}</span>
                              <div class="education__calender">
                                  <i class="uil uil-calendar-alt"></i> {{ $t("text.y2019") }} - {{ $t("text.y2023") }}
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
      
      `,
};

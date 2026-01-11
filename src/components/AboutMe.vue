<template>
  <div>
    <div class="about section" id="about">
      <h2 class="section__title">{{ t('text.AboutMe') }}</h2>
      <div class="about__container container grid">
        <img src="/images/IMG_7121.jpg" alt="" class="about__img" />
        <div class="about__data">
          <div class="about__info grid">
            <div class="about__box">
              <i class="material-symbols-outlined about__icon"> editor_choice </i>
              <h3 class="about__title">{{ t('text.Experience') }}</h3>
              <span class="about__subtitle">9 {{ t('text.Month') }} 0 {{ t('text.Year') }}</span>
            </div>
            <div class="about__box">
              <i class="material-symbols-outlined about__icon"> business_center </i>
              <h3 class="about__title">{{ t('text.ProjectComplete') }}</h3>
              <span class="about__subtitle">4 {{ t('text.Projects') }}</span>
            </div>
            <div class="about__box">
              <i class="material-symbols-outlined about__icon"> school </i>
              <h3 class="about__title">{{ t('text.Education') }}</h3>
              <span class="about__subtitle">{{ t('text.BEng') }},{{ t('text.MEngIE') }}</span>
            </div>
          </div>
          <div class="about__description">
            <p>{{ t('text.Suphanat') }} {{ t('text.Panyakom') }}</p>
            <p>{{ t('text.Age') }}: 27</p>
            <p>{{ t('text.DateOfBirth') }}: 09.05.1997</p>
          </div>
          <a download="" href="" class="button button--flex about__btn"
            >{{ t('text.DownloadCV')
            }}<span class="material-symbols-outlined"> description </span></a
          >
        </div>
      </div>
    </div>

    <div class="skill section">
      <h2 class="section__title">{{ t('text.Skills') }}</h2>
      <div class="skills__container container grid">
        <div class="skills__content">
          <h3 class="skills__title">Frontend developer</h3>
          <div class="skills__box">
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Html</h3>
                </div>
              </div>
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Css</h3>
                </div>
              </div>
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                  <h3 class="skills__name">Javascript, Typescript</h3>
                </div>
              </div>
            </div>
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Vue</h3>
                </div>
              </div>
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Nuxt.js</h3>
                </div>
              </div>
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">React</h3>
                  <h3 class="skills__name">({{ t('text.Littlebit') }})</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="skills__content">
          <h3 class="skills__title">Backend developer</h3>
          <div class="skills__box">
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Php</h3>
                </div>
              </div>
              <div class="skills__data">
                <div>
                  <h3 class="skills__name"></h3>
                </div>
              </div>
              <div class="skills__data">
                <div>
                  <h3 class="skills__name"></h3>
                </div>
              </div>
            </div>
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                  <h3 class="skills__name">MySQL</h3>
                  <h3 class="skills__name">({{ t('text.Littlebit') }})</h3>
                </div>
              </div>
              <div class="skills__data">
                <div>
                  <h3 class="skills__name"></h3>
                </div>
              </div>
              <div class="skills__data">
                <div>
                  <h3 class="skills__name"></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="skills__content">
          <h3 class="skills__title">Other</h3>
          <div class="skills__box">
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Python</h3>
                </div>
              </div>
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Bootstrap</h3>
                </div>
              </div>
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Material UI</h3>
                </div>
              </div>
            </div>
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Photoshop</h3>
                </div>
              </div>
              <div class="skills__data">
                <i class="bx bx-badge-check"></i>
                <div>
                  <h3 class="skills__name">Tailwind</h3>
                </div>
              </div>
              <div class="skills__data">
                <div>
                  <h3 class="skills__name"></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

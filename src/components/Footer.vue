<template>
  <footer class="footer">
    <div class="footer__container container">
      <h1 class="footer__title">Pruek</h1>
      <ul class="footer__list">
        <li>
          <a href="#home" class="footer__link" @click.prevent="scrollToSection('home')"> Home </a>
        </li>
        <li>
          <a href="#about" class="footer__link" @click.prevent="scrollToSection('about')">
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" class="footer__link" @click.prevent="scrollToSection('portfolio')">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" class="footer__link" @click.prevent="scrollToSection('contact')">
            Contact
          </a>
        </li>
      </ul>
      <div class="footer__social">
        <a
          class="footer__social-link"
          target="_blank"
          href="https://www.facebook.com/suphanat.panyakom/"
        >
          <i class="bx bxl-facebook"></i>
        </a>

        <a class="footer__social-link" target="_blank" href="https://www.instagram.com/py24.7/">
          <i class="uil uil-instagram"></i>
        </a>
      </div>
    </div>

    <a
      href="#"
      class="scrollup"
      :class="{ 'show-scroll': showScroll }"
      @click.prevent="scrollToTop"
    >
      <i class="uil uil-arrow-up scrollup__icon"></i>
    </a>
  </footer>
</template>

<script setup lang="ts">
import { useScroll } from '@/composables/useScroll'
import { scrollToSection } from '@/utils/scroll'

const { showScroll, scrollToTop } = useScroll()
</script>


const Vue = window.Vue;

Vue.use(VueI18n);

import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Education from "./components/Education.js";
import Footer from "./components/Footer.js";
import contact from "./components/contact.js";






const i18n = new VueI18n({
    locale: localStorage.getItem("lang"),
    messages: {
      en: {
        text: {
          Home: 'Home',
          About: 'About',
          Portfolio: 'Portfolio',
          Contact: 'Contact',
          Pruek:'Pruek',
          Hello: 'Hello',
          Suphanat :'Suphanat',
          Panyakom : 'Panyakom',
          Education : 'Education',
          Experience : 'Experience',
          ContactMe : 'Contact Me'
          
          
        
          
        }
      },
      th: {
        text: {
            Home: 'หน้าแรก',
            About: 'เกี่ยวกับ',
            Portfolio: 'ผลงาน',
            Contact: 'ติดต่อ',
            Pruek:'พฤกษ์',
            Hello:'สวัสดี',
            Suphanat :'ศุภณัฐ',
            Panyakom : 'ปัญญาคม',
            Education : 'การศึกษา',
            Experience : 'ประสบการณ์',
            ContactMe : 'ติดต่อฉัน'
          
        }
      }
    }
  });



new Vue({
    data(){
        return{
            locale: localStorage.getItem("lang") || 'en', 
            languages: {
                'en': 'English',
                'th': 'Thai'
            }
        }

    },
    components:{
        Navbar,
        Home,
        Education,
        Footer,
        contact
    },
    i18n,

    template:`
    
    <div>
        <Navbar></Navbar>
        <Home/>
        <Education/>
        <contact/>
        <Footer/>
        
    </div>
    
    `
}).$mount('#app');

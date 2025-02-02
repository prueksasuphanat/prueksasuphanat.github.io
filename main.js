const Vue = window.Vue;

Vue.use(VueI18n);

import AboutMe from "./components/AboutMe.js";
import contact from "./components/contact.js";
import Education from "./components/Education.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Portfolio from "./components/Portfolio.js";

const i18n = new VueI18n({
  locale: localStorage.getItem("lang"),
  messages: {
    en: {
      text: {
        Home: "Home",
        About: "About",
        AboutMe: "About Me",
        Portfolio: "Portfolio",
        Contact: "Contact",
        Pruek: "Pruek",
        Hello: "Hello",
        Suphanat: "Suphanat",
        Panyakom: "Panyakom",
        Education: "Education",
        Experience: "Experience",
        ContactMe: "Contact Me",
        ChiangMai: "Chiang Mai",
        AgeHeader: "Age",
        DateOfBirth: "Date of Birth",
        DownloadCV: "Download CV",
        Skills: "Skills",
        Portfolio: "Portfolio",
        Experience: "Experience",
        Month: "Month",
        Year: "Year",
        ProjectComplete: "Complete",
        Projects: "Projects",
        BEng: "B.Eng.IE",
        MEngIE: "M.Eng.IE",
        Age: "Age",
        Littlebit: "Little bit",
        HighSchool: "High School",
        PhadungPanya: "Phadung Panya School",
        Tak: "Tak",
        Thailand: "Thailand",
        University: "University",
        BEngFull: "B.Eng.",
        MEngIEFull: "M.Eng.IE",
        IndustrialEng: "Industrial Engineering",
        y2008: "2008",
        y2014: "2014",
        y2015: "2015",
        y2019: "2019",
        y2023: "2023",
        y2024: "2024",
        y2025: "2025",
        Jan: "Jan",
        Feb: "Feb",
        Mar: "Mar",
        Apr: "Apr",
        May: "May",
        Jun: "Jun",
        Jul: "Jul",
        Aug: "Aug",
        Sep: "Sep",
        Oct: "Oct",
        Nov: "Nov",
        Dec: "Dec",
        month: "month",
        ContentAboutMe:
          "I live in Chiang Mai. I'm interested in frontend developer and backend developer",
        ContentDemo4:
          "This website is created for practicing Vue with TypeScript on the frontend, while the backend API is developed using PHP with database management. The website consists of two sections: Admin and User. The Admin can log in with the username: admin and password: 123456, while the User can log in with the username: user and password: 123456.",
        ContentDemo1:
          "A furniture sales website utilizing HTML and CSS for practice purposes. This website features responsive web design but does not include sales function",
        ContentDemo2:
          "A online course website that allows user to learn about programming.This project is intended to practice web development using React and utilizing APIs.",
        ContentDemo3:
          "This is a blog website from Devint Course, which does not include backend development. The website consists of various frontend sections such as Home, Create Blog, Profile. Developing this website allows learning about adjusting web page layouts into Dark mode.",
      },
    },
    th: {
      text: {
        Home: "หน้าแรก",
        About: "เกี่ยวกับ",
        AboutMe: "เกี่ยวกับฉัน",
        Portfolio: "ผลงาน",
        Contact: "ติดต่อ",
        Pruek: "พฤกษ์",
        Hello: "สวัสดี",
        Suphanat: "ศุภณัฐ",
        Panyakom: "ปัญญาคม",
        Education: "การศึกษา",
        Experience: "ประสบการณ์",
        ContactMe: "ติดต่อฉัน",
        ChiangMai: "เชียงใหม่",
        AgeHeader: "อายุ",
        DateOfBirth: "วันเกิด",
        DownloadCV: "ดาวน์โหลด CV",
        Skills: "ความสามารถ",
        Portfolio: "ผลงาน",
        Experience: "ประสบการณ์",
        Month: "เดือน",
        Year: "ปี",
        ProjectComplete: "ผลงานที่เสร็จสิ้น",
        Projects: "ผลงาน",
        BEng: "ป.ตรี วิศวกรรม IE",
        MEngIE: "ป.โท วิศวกรรม IE",
        Age: "อายุ",
        Littlebit: "นิดหน่อย",
        HighSchool: "มัธยมศึกษา",
        PhadungPanya: "โรงเรียนผดุงปัญญา",
        Tak: "ตาก",
        Thailand: "ไทย",
        University: "มหาวิทยาลัยเชียงใหม่",
        BEngFull: "ปริญญาตรี วิศวกรรมศาสตร์",
        MEngIEFull: "ปริญญาโท วิศวกรรมศาสตร์",
        IndustrialEng: "อุตสาหการ",
        y2008: "2551",
        y2014: "2554",
        y2015: "2555",
        y2019: "2562",
        y2023: "2566",
        y2024: "2567",
        y2025: "2568",
        Jan: "ม.ค.",
        Feb: "ก.พ.",
        Mar: "มี.ค.",
        Apr: "เม.ย.",
        May: "พ.ค.",
        Jun: "มิ.ย.",
        Jul: "ก.ค.",
        Aug: "ส.ค.",
        Sep: "ก.ย.",
        Oct: "ต.ค.",
        Nov: "พ.ย.",
        Dec: "ธ.ค.",
        month: "เดือน",
        ContentAboutMe:
          "ผมอาศัยอยู่ที่จังหวัดเชียงใหม่ มีความสนใจในงาน frontend Developer และ backend Developer",
        ContentDemo4:
          "เว็บไซต์นี้ถูกสร้างขึ้นเพื่อฝึกฝนการใช้ Vue กับ TypeScript บนฝั่ง Frontend ในขณะที่ API ฝั่ง Backend ถูกพัฒนาด้วย PHP และมีระบบจัดการฐานข้อมูลเว็บไซต์ประกอบด้วยสองส่วน ได้แก่ Admin และ User Admin สามารถเข้าสู่ระบบด้วย ชื่อผู้ใช้: admin รหัสผ่าน: 123456 User สามารถเข้าสู่ระบบด้วย ชื่อผู้ใช้: user รหัสผ่าน: 123456",
        ContentDemo1:
          "เว็บไซต์ขายเฟอร์นิเจอร์ที่ใช้ HTML และ CSS เพื่อการฝึกฝน เว็บไซต์นี้มีการออกแบบให้รองรับการแสดงผลบนอุปกรณ์ต่าง ๆ (Responsive Web Design) แต่ไม่มีฟังก์ชันการขายสินค้า",
        ContentDemo2:
          "เว็บไซต์คอร์สเรียนออนไลน์ที่ให้ผู้ใช้เรียนรู้เกี่ยวกับการเขียนโปรแกรม โปรเจกต์นี้ถูกสร้างขึ้นเพื่อฝึกฝนการพัฒนาเว็บโดยใช้ React และการใช้งาน API",
        ContentDemo3:
          "นี่คือเว็บไซต์บล็อกจาก Devint Course ซึ่งไม่มีการพัฒนาฝั่ง Backend เว็บไซต์ประกอบด้วยส่วนต่าง ๆ ของ Frontend เช่น หน้าแรก (Home), สร้างบล็อก (Create Blog), และโปรไฟล์ (Profile) การพัฒนาเว็บไซต์นี้ช่วยให้เรียนรู้เกี่ยวกับการปรับแต่งเลย์เอาต์ของหน้าเว็บให้รองรับ โหมดมืด (Dark Mode)",
      },
    },
  },
});

new Vue({
  data() {
    return {
      locale: localStorage.getItem("lang") || "en",
      languages: {
        en: "English",
        th: "Thai",
      },
    };
  },
  components: {
    Navbar,
    Home,
    Education,
    Footer,
    contact,
    AboutMe,
    Portfolio,
  },
  i18n,

  template: `
    
    <div>
        <Navbar></Navbar>
        <Home/>
        <AboutMe/>
        <Education/>
        <Portfolio/>
        <contact/>
        <Footer/>
    </div>
    
    `,
}).$mount("#app");

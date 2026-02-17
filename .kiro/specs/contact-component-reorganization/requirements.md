# Contact Component Reorganization - Requirements

## Overview
ปรับปรุงการจัดเรียงและโครงสร้างของ Contact components ให้มี layout ที่สวยงาม ใช้งานง่าย และเป็นไปตาม Vue 3 best practices

## User Stories

### 1. Layout Reorganization
**As a** user  
**I want** Contact section ที่มี layout สวยงามและใช้งานง่าย  
**So that** ฉันสามารถติดต่อได้สะดวกและรวดเร็ว

**Acceptance Criteria:**
- 1.1 ContactForm อยู่ด้านซ้าย (ให้ความสำคัญกับการส่งข้อความ)
- 1.2 ContactInfo อยู่ด้านขวา (แสดงช่องทางติดต่ออื่นๆ)
- 1.3 บนมือถือ ContactForm แสดงก่อน ContactInfo
- 1.4 Responsive design ทำงานได้ดีทุกขนาดหน้าจอ

### 2. Component Organization
**As a** developer  
**I want** Contact components ที่มีโครงสร้างชัดเจนและเป็นระเบียบ  
**So that** ง่ายต่อการบำรุงรักษาและขยายฟีเจอร์ในอนาคต

**Acceptance Criteria:**
- 2.1 Components ทั้งหมดใช้ `<script setup>` syntax
- 2.2 การจัดเรียงโค้ดภายใน component เป็นไปตาม Vue 3 best practices (imports → props → emits → state → computed → methods → lifecycle)
- 2.3 มีการแยก concerns ระหว่าง presentation และ business logic อย่างชัดเจน
- 2.4 แยก ContactCard เป็น component ย่อยเพื่อลด duplication

### 3. Type Safety
**As a** developer  
**I want** Contact components ที่มี TypeScript types ที่ชัดเจน  
**So that** ลดข้อผิดพลาดและเพิ่มความปลอดภัยของโค้ด

**Acceptance Criteria:**
- 3.1 มีการกำหนด TypeScript interfaces สำหรับ form data และ contact information
- 3.2 Props และ emits มี type definitions ที่ชัดเจน
- 3.3 Refs ทั้งหมดมี explicit types

### 4. Form Validation
**As a** user  
**I want** form validation ที่ชัดเจนและเป็นมิตร  
**So that** ฉันรู้ว่าข้อมูลที่กรอกถูกต้องหรือไม่

**Acceptance Criteria:**
- 4.1 มี validation สำหรับ required fields
- 4.2 มี validation สำหรับ email format
- 4.3 แสดง error messages ที่เข้าใจง่าย
- 4.4 ปิดการใช้งานปุ่ม submit เมื่อ form ไม่ valid

### 5. Internationalization
**As a** user  
**I want** Contact section ที่รองรับหลายภาษา  
**So that** ฉันสามารถใช้งานในภาษาที่ฉันเข้าใจได้

**Acceptance Criteria:**
- 5.1 ข้อความทั้งหมดใช้ i18n
- 5.2 รองรับภาษาไทยและอังกฤษ
- 5.3 Form labels และ placeholders แปลได้

### 6. Accessibility
**As a** user with disabilities  
**I want** Contact form ที่เข้าถึงได้  
**So that** ฉันสามารถใช้งานได้ด้วย assistive technologies

**Acceptance Criteria:**
- 6.1 Form inputs มี proper labels และ aria attributes
- 6.2 Error messages มี aria-live regions
- 6.3 ปุ่มทั้งหมดมี aria-label ที่เหมาะสม
- 6.4 รองรับ keyboard navigation

### 7. Composable Logic
**As a** developer  
**I want** form logic ที่แยกออกเป็น composable  
**So that** สามารถนำกลับมาใช้ใหม่ได้และทดสอบง่าย

**Acceptance Criteria:**
- 7.1 สร้าง `useContactForm` composable สำหรับจัดการ form state และ validation
- 7.2 Composable return reactive values และ methods ที่จำเป็น
- 7.3 Logic แยกออกจาก component เพื่อความสามารถในการทดสอบ

## Technical Requirements

### Component Structure
```
src/components/features/contact/
├── ContactSection.vue      # Main container
├── ContactInfo.vue         # Contact information cards
├── ContactForm.vue         # Contact form
└── ContactCard.vue         # Individual contact card (new)
```

### Composables
```
src/composables/features/
└── useContactForm.ts       # Form logic composable
```

### Types
```
src/types/
└── contact.ts              # Contact-related types
```

### i18n Keys
```
contact:
  title: "Contact Me"
  talkToMe: "Talk to me"
  writeToMe: "Write something to me"
  form:
    name: "Name"
    email: "Email"
    message: "Message"
    namePlaceholder: "Insert your name"
    emailPlaceholder: "Insert your email"
    messagePlaceholder: "Write something"
    submit: "Send Message"
    sending: "Sending..."
    success: "Message sent successfully!"
    error: "Failed to send message. Please try again."
  validation:
    required: "This field is required"
    invalidEmail: "Please enter a valid email address"
```

## Out of Scope
- การเชื่อมต่อกับ backend API จริง (ใช้ mock/console.log ในขั้นตอนนี้)
- การเพิ่ม CAPTCHA หรือ spam protection
- การบันทึก form submissions ลง database

## Dependencies
- vue-i18n (already installed)
- TypeScript (already configured)
- Existing styling system

## Success Metrics
- Components ทั้งหมดผ่าน TypeScript type checking
- Code organization เป็นไปตาม Vue 3 best practices
- Form validation ทำงานถูกต้อง
- รองรับ i18n ครบถ้วน
- Accessibility score ดีขึ้น

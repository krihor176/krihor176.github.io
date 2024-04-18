<template>
  <section class="footer-menu-wrapper">
    <div class="footer-menu">
      <div class="footer-links">
        <div class="footer-navigation">
          <div class="home-page-link">
            <a class="navbar" href >   <div class="home2">.home</div> </a>
          </div>
          <div class="menu1">
            <a class="navbar" href="#about-me" >   <div class="home2">.about me</div> </a>
            <div class="contact-links">
              <a class="navbar" href="#projects" >   <div class="home2">.projects</div> </a>
            </div>
            <div class="contact-links1">
              <a class="navbar" href="#contact" >   <div class="home2">.contact</div> </a>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-info">
        <div class="contact-details">
          <div class="email-address-icon-wrapper">
            <div class="email-address-icon">+45 21 21 60</div>
          </div>
          <div class="wrapper">
            <div class="div">+385 91 6129 111</div>
          </div>
          <div class="kristijankiki13gmailcom1">kristijan.kiki13@gmail.com</div>
        </div>
      </div>
      <div class="message-form">
        <EmailForm
          line171="pending_2039:380"
          line172="pending_2039:381"
        /><EmailForm line171="pending_2044:3956" line172="pending_2044:3957" />
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";
  import EmailForm from "./EmailForm.vue";

  export default defineComponent({
    name: "FrameComponent",
    components: { EmailForm },
  });
</script>
<style scoped>

.navbar {
    text-decoration: none;
    color: var(--color-gray-100);
  }
.home2 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 67px;
    z-index: 1;
  }
  .home-page-link {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lg) 0px var(--padding-lgi);
  }
  .about-me2 {
    position: relative;
    font-weight: 500;
    color: var(--white);
    display: inline-block;
    min-width: 104px;
  }
  .projects3 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 87px;
  }
  .contact-links {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xs) 0px var(--padding-4xs);
  }
  .contact2 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 83px;
  }
  .contact-links1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xs) 0px var(--padding-2xs);
  }
  .menu1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
    z-index: 1;
    color: var(--color-gray-100);
  }
  .footer-navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
  }
  .footer-links {
    width: 258px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-56xl) 0px 0px;
    box-sizing: border-box;
  }
  .email-address-icon {
    flex: 1;
    position: relative;
    font-weight: 500;
    white-space: nowrap;
    z-index: 1;
  }
  .email-address-icon-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-53xl);
  }
  .div {
    flex: 1;
    position: relative;
    font-weight: 500;
    white-space: nowrap;
    z-index: 1;
  }
  .wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-37xl);
  }
  .kristijankiki13gmailcom1 {
    position: relative;
    font-weight: 500;
    white-space: nowrap;
    z-index: 1;
  }
  .contact-details {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-smi);
  }
  .contact-info {
    width: 273px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-56xl) 0px 0px;
    box-sizing: border-box;
  }
  .message-form {
    height: 535px;
    width: 565px;
    position: relative;
    max-width: 100%;
    font-size: var(--body1-size);
    font-family: var(--body1);
  }
  .footer-menu {
    width: 1310px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .footer-menu-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1200px) {
    .footer-menu {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 750px) {
    .message-form {
      height: auto;
      max-height: 600px;
    }
  }
  @media screen and (max-width: 450px) {
    .home2 {
      font-size: var(--body1-size);
    }

    .about-me2 {
      font-size: var(--body1-size);
    }

    .projects3 {
      font-size: var(--body1-size);
    }

    .contact2 {
      font-size: var(--body1-size);
    }

    .email-address-icon {
      font-size: var(--body1-size);
    }

    .email-address-icon-wrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .div {
      font-size: var(--body1-size);
    }

    .wrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .kristijankiki13gmailcom1 {
      font-size: var(--body1-size);
    }
  }
</style>

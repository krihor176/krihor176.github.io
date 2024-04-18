<template>
  <footer class="contact-form">
    <form class="input-fields1">
      <div class="name-inputs1">
        <div class="component-81">
          <div class="component-8-item" />
          <div class="component-8-inner" />
          <h2 class="first-name1">First Name*</h2>
        </div>
        <button class="rectangle-group">
          <div class="frame-child4" />
          <div class="last-name1">Last Name*</div>
        </button>
      </div>
      <div class="email-input1">
        <div class="email-input-child" />
        <input class="email1" placeholder="Email*" type="text" />
      </div>
      <div class="message-inputs">
        <div class="rectangle-container">
          <div class="frame-child5" />
          <input
            class="phone-number1"
            placeholder="Phone Number*"
            type="text"
          />
        </div>
        <textarea
          class="phone-message"
          placeholder="Your message..."
          rows="5"
          cols="13"
        />
        <div class="submit-button-container">
          <button class="submit-button1">
            <div class="send-message1">Send Message</div>
          </button>
        </div>
      </div>
    </form>
    <div class="component-21" />
    <div class="navigation">
      <div class="navigation-content">
        <div class="navigation-items">
          <div class="home3">.home</div>
          <div class="about-me3">.about me</div>
          <div class="projects5">.projects</div>
          <div class="contact3">.contact</div>
        </div>
        <div class="contact-information">
          <div class="contact-details1">
            <div class="phone-number2">+45 21 21 60</div>
            <div class="location">+385 91 6129 111</div>
            <div class="kristijankiki13gmailcom3">
              kristijan.kiki13@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="social-media1">
      <div class="social-background" />
      <img class="social-media-child" alt="" src="/line-4.svg" />
      <img class="image-7-icon" loading="lazy" alt="" src="/image-7@2x.png" />
      <img class="linkedin-icon3" alt="" src="/linkedin-1@2x.png" />
      <img class="github-icon3" alt="" src="/github-1@2x.png" />
      <img
        class="social-media-item"
        loading="lazy"
        alt=""
        src="/ellipse-2.svg"
      />
      <img
        class="social-media-inner"
        loading="lazy"
        alt=""
        src="/ellipse-2.svg"
      />
      <img
        class="social-media-child1"
        loading="lazy"
        alt=""
        src="/ellipse-2.svg"
      />
    </div>
  </footer>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ContactForm",
  });
</script>
<style scoped>

::selection {
  color: #D40848;
  background-color: white;

}
  .component-8-item {
    height: 50px;
    width: 115px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    display: none;
  }
  .component-8-inner {
    height: 25px;
    width: 36px;
    display: none;
  }
  .first-name1 {
    margin: 0;
    position: relative;
    font-size: var(--body1-size);
    line-height: 26px;
    font-weight: 400;
    font-family: var(--body1);
    color: var(--color-snow);
    text-align: left;
    display: inline-block;
    min-width: 99px;
    z-index: 2;
  }
  .component-81 {
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-dimgray);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px var(--padding-3xs) var(--padding-sm);
    z-index: 1;
  }
  .frame-child4 {
    height: 49px;
    width: 131px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
    display: none;
  }
  .last-name1 {
    flex: 1;
    position: relative;
    font-size: var(--body1-size);
    line-height: 26px;
    font-family: var(--body1);
    color: var(--white);
    text-align: left;
    z-index: 1;
  }
  .rectangle-group {
    cursor: pointer;
    border: 1px solid var(--color-gray-200);
    padding: var(--padding-3xs) var(--padding-2xs) var(--padding-3xs)
      var(--padding-lgi);
    background-color: var(--color-dimgray);
    flex: 1;
    border-radius: var(--br-3xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    white-space: nowrap;
    z-index: 1;
  }
  .name-inputs1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .email-input-child {
    height: 50px;
    width: 262px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
    display: none;
  }
  .email1 {
    width: 128px;
    border: none;
    outline: none;
    font-family: var(--body1);
    font-size: var(--body1-size);
    background-color: transparent;
    height: 25px;
    position: relative;
    line-height: 26px;
    color: var(--white);
    text-align: left;
    display: inline-block;
    padding: 0;
    z-index: 2;
  }
  .email-input1 {
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-base) var(--padding-2xs);
    z-index: 1;
  }
  .frame-child5 {
    height: 50px;
    width: 262px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
    display: none;
  }
  .phone-number1 {
    width: 128px;
    border: none;
    outline: none;
    font-family: var(--body1);
    font-size: var(--body1-size);
    background-color: transparent;
    height: 25px;
    position: relative;
    line-height: 26px;
    color: var(--white);
    text-align: left;
    display: inline-block;
    padding: 0;
    z-index: 1;
  }
  .rectangle-container {
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) var(--padding-xl) var(--padding-3xs);
    z-index: 1;
  }
  .phone-message {
    border: 1px solid var(--color-gray-200);
    background-color: var(--color-dimgray);
    height: 105px;
    width: auto;
    outline: none;
    align-self: stretch;
    border-radius: var(--br-3xs);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl);
    font-family: var(--body1);
    font-size: var(--body1-size);
    color: var(--white);
    z-index: 2;
  }
  .send-message1 {
    position: relative;
    font-size: var(--font-size-xs);
    font-weight: 600;
    font-family: var(--body1);
    color: var(--white);
    text-align: left;
    display: inline-block;
    min-width: 82px;
  }
  .submit-button1 {
    cursor: pointer;
    border: 1px solid var(--active-button);
    padding: var(--padding-8xs) var(--padding-54xl);
    background-color: var(--color-crimson);
    flex: 1;
    border-radius: var(--br-5xl);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    white-space: nowrap;
    z-index: 1;
  }
  .submit-button-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-2xs) 0px var(--padding-xl);
  }
  .message-inputs {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-mid);
  }
  .input-fields1 {
    margin: 0;
    width: 282px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-5xl-5);
  }
  .component-21 {
    width: 262px;
    height: 50px;
    position: relative;
    display: none;
    z-index: 1;
  }
  .home3 {
    width: 46px;
    position: relative;
    font-weight: 500;
    display: inline-block;
    z-index: 1;
  }
  .about-me3 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 56px;
    z-index: 1;
  }
  .projects5 {
    width: 52px;
    position: relative;
    font-weight: 500;
    color: var(--color-gray-100);
    display: inline-block;
    z-index: 1;
  }
  .contact3 {
    position: relative;
    font-weight: 500;
    color: var(--color-gray-100);
    display: inline-block;
    min-width: 46px;
    z-index: 1;
  }
  .navigation-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xs-3);
  }
  .phone-number2 {
    width: 82px;
    position: relative;
    font-weight: 500;
    display: inline-block;
    white-space: nowrap;
    z-index: 1;
  }
  .location {
    position: relative;
    font-size: var(--font-size-3xs);
    font-weight: 500;
    display: inline-block;
    min-width: 86px;
    white-space: nowrap;
    z-index: 1;
  }
  .kristijankiki13gmailcom3 {
    position: relative;
    font-size: var(--font-size-4xs);
    font-weight: 500;
    display: inline-block;
    min-width: 120px;
    white-space: nowrap;
    z-index: 1;
  }
  .contact-details1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .contact-information {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
    font-size: var(--font-size-2xs);
  }
  .navigation-content {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .navigation {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-base);
  }
  .social-background {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-darkslategray);
    width: 100%;
    height: 100%;
  }
  .social-media-child {
    position: absolute;
    top: 433px;
    left: 45px;
    width: 308px;
    height: 1px;
    z-index: 1;
  }
  .image-7-icon {
    position: absolute;
    top: 490px;
    left: 197px;
    width: 24px;
    height: 24px;
    object-fit: contain;
    z-index: 1;
  }
  .linkedin-icon3 {
    position: absolute;
    top: 453px;
    left: 197px;
    width: 24px;
    height: 24px;
    object-fit: contain;
    z-index: 1;
  }
  .github-icon3 {
    position: absolute;
    top: 527px;
    left: 197px;
    width: 24px;
    height: 24px;
    object-fit: contain;
    z-index: 1;
  }
  .social-media-item {
    position: absolute;
    top: 428px;
    left: 205px;
    width: 9px;
    height: 9px;
    z-index: 2;
  }
  .social-media-inner {
    position: absolute;
    top: 428px;
    left: 300px;
    width: 9px;
    height: 9px;
    z-index: 2;
  }
  .social-media-child1 {
    position: absolute;
    top: 429px;
    left: 110px;
    width: 9px;
    height: 9px;
    z-index: 2;
  }
  .social-media1 {
    width: 411px;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: -11px;
  }
  .contact-form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xl) var(--padding-4xs) var(--padding-46xl)
      var(--padding-45xl);
    position: relative;
    gap: var(--gap-45xl);
    text-align: left;
    font-size: var(--font-size-3xs);
    color: var(--white);
    font-family: var(--font-poppins);
  }
</style>

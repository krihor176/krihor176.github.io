<template>
  <div class="info-wrapper">
    <div class="frame-group">
      <div class="frame-wrapper">
        <div class="hello-i-am-kristijan-parent">
          <h1 class="hello-i-am">Hello, I am Kristijan.</h1>
          <div class="ambitious-and-motivated-but-a-wrapper">
            <div class="ambitious-and-motivated-but-a2">
              <p class="ambitious-and-motivated-but-a3">
                Ambitious and motivated, but also organised and persistent. 
              </p>
              <p class="i-always-think-positively-and1">
                I always think positively and hope for the best. I am glad to 
              </p>
              <p class="help-others-and-learn-new-thin1">
                help others and learn new things. 
              </p>
              <p class="i-am-openminded-and-always-rea1">
                I am openminded and always ready for new challenges. 
              </p>
              <p class="i-am-not-afraid-of-failure-i1">
                I am not afraid of failure, I consider it as a learned lesson.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="frame-container">
        <div class="social-options-parent">
          <div class="social-options">
            <div class="social-options-child" />
            <img
              class="linkedin-icon2"
              loading="lazy"
              alt=""
              src="/linkedin11@2x.png"
            />
            <div class="social-icons1">
              <a href="https://www.linkedin.com/in/kristijan-horvat-488b6227b/">
              <div class="linkedin1">LinkedIn</div></a>
            </div>
          </div>
          
          <div class="social-options1">
            <div class="social-options-item" />
            <img
              class="github-icon2"
              loading="lazy"
              alt=""
              src="/github11@2x.png"
            />
            <div class="github-wrapper">
              <div class="github1">GitHub</div>
            </div>
          </div>
          <div class="social-options2">
            <div class="social-options-inner"></div>
            <img
              class="email-icon2"
              loading="lazy"
              alt=""
              src="/email1@2x.png"
            />
            <div class="kristijankiki13gmailcom-wrapper">
              <div class="kristijankiki13gmailcom2">
                kristijan.kiki13@gmail.com
              </div>
            </div>
          </div>
          <div class="social-options3">
            <div class="social-options-child1" />
            <img
              class="resume-icon1"
              loading="lazy"
              alt=""
              src="/resume1@2x.png"
            />
            <div class="cv-wrapper">
              <div class="cv1">CV</div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-wrapper-parent">
        <div class="video-wrapper">
          <div class="content-box">
            <img
              class="fbf802-9987-49e5-a4e1-217925a9-icon1"
              loading="lazy"
              alt=""
              src="/42fbf802998749e5a4e1217925a94247-2@2x.png"
            />
            <div class="video-caption">
              <div class="step-into-my1">
                Step into my world through my video CV. Join me for a candid
                conversation where I share my journey, dreams, and the unique
                spark that fuels my passions. It's not just about
                qualifications; it's about connecting person-to-person, sharing
                stories, and building a bond beyond the resume.
              </div>
            </div>
          </div>
        </div>
        <div class="youtube-and-vimeo-video" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "InfoWrapper",
  });
</script>
<style scoped>
  .hello-i-am {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    white-space: pre-wrap;
  }
  .ambitious-and-motivated-but-a3 {
    margin: 0;
  }
  .i-always-think-positively-and1 {
    margin: 0;
  }
  .help-others-and-learn-new-thin1 {
    margin: 0;
  }
  .i-am-openminded-and-always-rea1 {
    margin: 0;
  }
  .i-am-not-afraid-of-failure-i1 {
    margin: 0;
  }
  .ambitious-and-motivated-but-a2 {
    flex: 1;
    position: relative;
    font-weight: 500;
  }
  .ambitious-and-motivated-but-a-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
    font-size: var(--font-size-3xs);
    color: var(--color-crimson);
  }
  .hello-i-am-kristijan-parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mini);
  }
  .frame-wrapper {
    width: 331px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .social-options-child {
    height: 19px;
    width: 63px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    display: none;
  }
  .linkedin-icon2 {
    height: 15px;
    width: 15px;
    position: relative;
    object-fit: contain;
    min-height: 15px;
    z-index: 1;
  }
  .linkedin1 {
    position: relative;
    display: inline-block;
    min-width: 33px;
    z-index: 1;
  }
  .social-icons1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .social-options {
    width: 63px;
    border-radius: var(--br-xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xs) 0px var(--padding-7xs);
    gap: var(--gap-11xs);
  }
  .social-options-item {
    height: 19px;
    width: 60px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    display: none;
  }
  .github-icon2 {
    height: 15px;
    width: 15px;
    position: relative;
    object-fit: contain;
    min-height: 15px;
    z-index: 1;
  }
  .github1 {
    position: relative;
    display: inline-block;
    min-width: 28px;
    z-index: 1;
  }
  .github-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .social-options1 {
    width: 60px;
    border-radius: var(--br-xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xs) 0px var(--padding-7xs);
    gap: var(--gap-9xs);
  }
  .social-options-inner {
    height: 19px;
    width: 133px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    display: none;
  }
  .email-icon2 {
    height: 14px;
    width: 16px;
    position: relative;
    object-fit: contain;
    min-height: 14px;
    z-index: 1;
  }
  .kristijankiki13gmailcom2 {
    position: relative;
    display: inline-block;
    min-width: 103px;
    white-space: nowrap;
    z-index: 1;
  }
  .kristijankiki13gmailcom-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .social-options2 {
    border-radius: var(--br-xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-10xs) var(--padding-12xs) var(--padding-8xs);
    gap: var(--gap-9xs);
  }
  .social-options-child1 {
    height: 19px;
    width: 45px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    display: none;
  }
  .resume-icon1 {
    height: 15px;
    width: 14px;
    position: relative;
    object-fit: contain;
    min-height: 15px;
    z-index: 1;
  }
  .cv1 {
    position: relative;
    display: inline-block;
    min-width: 12px;
    z-index: 1;
  }
  .cv-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .social-options3 {
    width: 45px;
    border-radius: var(--br-xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs);
    gap: var(--gap-9xs);
  }
  .social-options-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs-7);
    max-width: 100%;
  }
  .frame-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-base) 0px var(--padding-5xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-5xs);
  }
  .fbf802-9987-49e5-a4e1-217925a9-icon1 {
    height: 160px;
    width: 120px;
    position: relative;
    object-fit: cover;
  }
  .step-into-my1 {
    align-self: stretch;
    position: relative;
    font-weight: 500;
  }
  .video-caption {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
    min-width: 128px;
  }
  .content-box {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lg);
    max-width: 100%;
  }
  .video-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mid) 0px var(--padding-5xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .youtube-and-vimeo-video {
    align-self: stretch;
    height: 220px;
    position: relative;
  }
  .video-wrapper-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
    max-width: 100%;
    font-size: var(--font-size-3xs);
    color: var(--color-crimson);
  }
  .frame-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xl);
    max-width: 100%;
  }
  .info-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-mid) var(--padding-6xs) var(--padding-smi);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-6xl);
    color: var(--white);
    font-family: var(--font-poppins);
  }
</style>

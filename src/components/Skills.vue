<template>
  <div class="skills">
    <div class="skills-title-area">
      <div class="skills-title">
        <div class="hash-icon-area">
          <img class="hash-1-icon" loading="lazy" alt="" src="/hash-1.svg" />
        </div>
        <h1 class="skills1">Skills</h1>
      </div>
    </div>
    <div class="skill-categories">
      <div class="skill-category">
        <h3 class="web-development">Web Development:</h3>
        <div class="web-skills">
          <div class="languages-list">
            <div class="front-end-languages">
              <div class="html-area">
                <div class="html-icon">
                  <div class="html-icon-child" />
                  <div class="html">HTML</div>
                </div>
              </div>
              <div class="front-end-tech">
                <div class="front-end-tech-child" />
                <div class="css">CSS</div>
              </div>
              <div class="front-end-tech1">
                <div class="front-end-tech-item" />
                <div class="javascript">JavaScript</div>
              </div>
            </div>
          </div>
          <h3 class="frameworks">Frameworks:</h3>
        </div>
      </div>
    </div>
    <div class="tool-name-wrapper">
      <div class="tool-name">
        <div class="tool-name-child" />
        <div class="vue">Vue</div>
      </div>
    </div>
    <div class="design-software">
      <h3 class="design-programs">Design Programs:</h3>
      <div class="software-container">
        <div class="design-tools">
          <div class="image-editing-software">
            <div class="editing-tools">
              <div class="output-processor" />
              <div class="figma">Figma</div>
            </div>
          </div>
          <div class="image-editing-software1">
            <div class="logic-gate" />
            <div class="adobe-xd">Adobe XD</div>
          </div>
          <div class="image-editing-software2">
            <div class="rectangle-parent">
              <div class="frame-inner" />
              <div class="adobe-photoshop">Adobe Photoshop</div>
            </div>
          </div>
          <div class="image-editing-software3">
            <div class="image-editing-software-child" />
            <div class="adobe-illustator">Adobe Illustator</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Skills",
  });
</script>
<style scoped>
  .hash-1-icon {
    width: 32px;
    height: 32px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .hash-icon-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px 0px;
  }
  .skills1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    min-width: 85px;
  }
  .skills-title {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .skills-title-area {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs) var(--padding-8xs);
    font-size: var(--font-size-14xl);
  }
  .web-development {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 500;
    font-family: inherit;
  }
  .html-icon-child {
    height: 30px;
    width: 62px;
    position: absolute;
    margin: 0 !important;
    bottom: -5px;
    left: -13px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .html {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 41px;
    z-index: 1;
  }
  .html-icon {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .html-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xs) 0px 0px;
  }
  .front-end-tech-child {
    height: 30px;
    width: 57px;
    position: absolute;
    margin: 0 !important;
    bottom: -5px;
    left: -13px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .css {
    flex: 1;
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .front-end-tech {
    width: 41px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .front-end-tech-item {
    height: 30px;
    width: 102px;
    position: absolute;
    margin: 0 !important;
    bottom: -5px;
    left: -13px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .javascript {
    flex: 1;
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .front-end-tech1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    min-width: 77px;
  }
  .front-end-languages {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-7xl);
  }
  .languages-list {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-xs);
  }
  .frameworks {
    margin: 0;
    position: relative;
    font-size: var(--font-size-3xl);
    font-weight: 500;
    font-family: inherit;
  }
  .web-skills {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
    font-size: var(--font-size-mini);
  }
  .skill-category {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .skill-categories {
    width: 272px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs);
    box-sizing: border-box;
  }
  .tool-name-child {
    height: 30px;
    width: 50px;
    position: absolute;
    margin: 0 !important;
    bottom: -5px;
    left: -13px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .vue {
    flex: 1;
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .tool-name {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .tool-name-wrapper {
    width: 73px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-sm) var(--padding-xs);
    box-sizing: border-box;
    font-size: var(--font-size-mini);
  }
  .design-programs {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 500;
    font-family: inherit;
  }
  .output-processor {
    height: 30px;
    width: 72px;
    position: absolute;
    margin: 0 !important;
    bottom: -5px;
    left: -13px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .figma {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 49px;
    z-index: 1;
  }
  .editing-tools {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .image-editing-software {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-base) 0px 0px;
  }
  .logic-gate {
    height: 30px;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    bottom: -5px;
    left: -11px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .adobe-xd {
    flex: 1;
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .image-editing-software1 {
    width: 92px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .frame-inner {
    height: 30px;
    width: 160px;
    position: absolute;
    margin: 0 !important;
    bottom: -5px;
    left: calc(50% - 80px);
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .adobe-photoshop {
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .rectangle-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .image-editing-software2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lgi) 0px 0px;
  }
  .image-editing-software-child {
    height: 30px;
    width: 140px;
    position: absolute;
    margin: 0 !important;
    bottom: -5px;
    left: calc(50% - 80px);
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .adobe-illustator {
    flex: 1;
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .image-editing-software3 {
    width: 136px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .design-tools {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    max-width: 100%;
  }
  .software-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-smi);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-mini);
  }
  .design-software {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .skills {
    width: 521px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs) var(--padding-8xs) 0px;
    box-sizing: border-box;
    gap: var(--gap-5xs);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-3xl);
    color: var(--white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 750px) {
    .skills1 {
      font-size: var(--font-size-5xl);
    }

    .design-tools {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .skills1 {
      font-size: var(--font-size-xl);
    }

    .web-development {
      font-size: var(--font-size-lg);
    }

    .frameworks {
      font-size: var(--font-size-lg);
    }

    .design-programs {
      font-size: var(--font-size-lg);
    }
  }
</style>

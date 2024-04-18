<template>
  <div class="job-list-wrapper-wrapper">
    <div class="job-list-wrapper">
      <div class="skillset-wrapper-parent">
        <div class="skillset-wrapper1">
          <img class="hash-1-icon1" loading="lazy" alt="" src="/hash-11.svg" />
        </div>
        <h1 class="skills2">Skills</h1>
      </div>
      <div class="skill-list-wrapper">
        <div class="development-wrapper">
          <div class="development-title-wrapper">
            <div class="web-development1">Web Development:</div>
          </div>
          <div class="coding-languages-wrapper">
            <div class="language-options-parent">
              <div class="language-options">
                <div class="code-blocks">
                  <div class="blocks" />
                  <div class="html1">HTML</div>
                </div>
                <div class="code-blocks1">
                  <div class="code-blocks-child" />
                  <div class="css1">CSS</div>
                </div>
              </div>
              <div class="frame-wrapper1">
                <div class="frameworks-parent">
                  <div class="frameworks1">Frameworks</div>
                  <div class="example-block-parent">
                    <div class="example-block" />
                    <div class="vue1">Vue</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="script-wrapper">
              <div class="script-block" />
              <div class="javascript1">JavaScript</div>
            </div>
          </div>
        </div>
      </div>
      <div class="design-tools-wrapper">
        <div class="design-tools-title-wrapper">
          <div class="design-programs1">Design programs</div>
        </div>
        <div class="software-list-wrapper">
          <div class="software-options-wrapper-parent">
            <div class="software-options-wrapper">
              <div class="software-options">
                <div class="software-blocks">
                  <div class="blocks1" />
                  <div class="figma1">Figma</div>
                </div>
                <div class="software-blocks1">
                  <div class="software-blocks-child" />
                  <div class="adobe-xd1">Adobe XD</div>
                </div>
                <div class="software-blocks2">
                  <div class="software-blocks-item" />
                  <div class="adobe-photoshop1">Adobe Photoshop</div>
                </div>
              </div>
            </div>
            <div class="work-history-wrapper">
              <div class="work-history-title-wrapper">
                <div class="content-block">
                  <div class="icon-container">
                    <img
                      class="business-icon1"
                      loading="lazy"
                      alt=""
                      src="/business1@2x.png"
                    />
                  </div>
                  <h1 class="experience2">Experience</h1>
                </div>
              </div>
              <div class="experience-block">
                <div class="experience-block-inner">
                  <img class="frame-child3" alt="" src="/ellipse-3.svg" />
                </div>
                <div class="feb-2024-1">Feb 2024 - currently</div>
              </div>
            </div>
          </div>
          <div class="software-block">
            <div class="software-icon" />
            <div class="adobe-illustrator">Adobe Illustrator</div>
          </div>
        </div>
      </div>
      <div class="job-positions">
        <div class="guldegget-aps1">Guldegget ApS</div>
      </div>
      <div class="job-positions1">
        <div class="assistant-baker1">Assistant baker</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Frame",
  });
</script>
<style scoped>
  .hash-1-icon1 {
    width: 20px;
    height: 20px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .skillset-wrapper1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .skills2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    min-width: 52px;
  }
  .skillset-wrapper-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) var(--padding-5xs) 0px;
    gap: var(--gap-8xs);
    font-size: var(--font-size-xl);
  }
  .web-development1 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 125px;
  }
  .development-title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs);
  }
  .blocks {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 43px;
    height: 21px;
  }
  .html1 {
    position: absolute;
    top: 3px;
    left: 8px;
    font-weight: 500;
    display: inline-block;
    width: 41px;
    height: 15px;
    z-index: 1;
  }
  .code-blocks {
    height: 21px;
    flex: 1;
    position: relative;
  }
  .code-blocks-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 38px;
    height: 21px;
  }
  .css1 {
    position: absolute;
    top: 3px;
    left: 9px;
    font-weight: 500;
    display: inline-block;
    width: 40px;
    height: 15px;
    z-index: 1;
  }
  .code-blocks1 {
    height: 21px;
    flex: 1;
    position: relative;
  }
  .language-options {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .frameworks1 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 81px;
  }
  .example-block {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 38px;
    height: 21px;
  }
  .vue1 {
    position: absolute;
    top: 3px;
    left: 9px;
    font-weight: 500;
    display: inline-block;
    width: 41px;
    height: 15px;
    z-index: 1;
  }
  .example-block-parent {
    width: 70px;
    height: 21px;
    position: relative;
    font-size: var(--font-size-3xs);
  }
  .frameworks-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-7xs);
  }
  .frame-wrapper1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs);
    font-size: var(--font-size-smi);
  }
  .language-options-parent {
    width: 103px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xl);
  }
  .script-block {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 72px;
    height: 21px;
  }
  .javascript1 {
    position: absolute;
    top: 3px;
    left: 8px;
    font-weight: 500;
    display: inline-block;
    width: 119px;
    height: 15px;
    z-index: 1;
  }
  .script-wrapper {
    height: 21px;
    flex: 1;
    position: relative;
  }
  .coding-languages-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-size-3xs);
  }
  .development-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .skill-list-wrapper {
    width: 238px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs) var(--padding-xs);
    box-sizing: border-box;
  }
  .design-programs1 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 114px;
  }
  .design-tools-title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
  }
  .blocks1 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 44px;
    height: 21px;
  }
  .figma1 {
    position: absolute;
    top: 3px;
    left: 8px;
    font-weight: 500;
    display: inline-block;
    width: 36px;
    height: 22px;
    min-width: 36px;
    z-index: 1;
  }
  .software-blocks {
    height: 25px;
    width: 44px;
    position: relative;
  }
  .software-blocks-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 60px;
    height: 21px;
  }
  .adobe-xd1 {
    position: absolute;
    top: 3px;
    left: 8px;
    font-weight: 500;
    display: inline-block;
    width: 52px;
    height: 22px;
    min-width: 52px;
    z-index: 1;
  }
  .software-blocks1 {
    height: 25px;
    width: 60px;
    position: relative;
  }
  .software-blocks-item {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 105px;
    height: 21px;
  }
  .adobe-photoshop1 {
    position: absolute;
    top: 3px;
    left: 8px;
    font-weight: 500;
    display: inline-block;
    width: 92px;
    height: 22px;
    min-width: 92px;
    z-index: 1;
  }
  .software-blocks2 {
    height: 25px;
    flex: 1;
    position: relative;
  }
  .software-options {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
  }
  .software-options-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
  }
  .business-icon1 {
    width: 20px;
    height: 27px;
    position: relative;
    object-fit: cover;
  }
  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .experience2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    min-width: 111px;
  }
  .content-block {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .work-history-title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xs) 0px 0px;
  }
  .frame-child3 {
    width: 9px;
    height: 9px;
    position: relative;
  }
  .experience-block-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs-5) 0px 0px;
  }
  .feb-2024-1 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 112px;
  }
  .experience-block {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
    gap: var(--gap-2xs);
    font-size: var(--font-size-2xs);
    color: var(--color-crimson);
  }
  .work-history-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    gap: var(--gap-10xl);
    font-size: var(--font-size-xl);
  }
  .software-options-wrapper-parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-17xl);
  }
  .software-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-21xl);
    background-color: var(--color-darkslategray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 96px;
    height: 21px;
  }
  .adobe-illustrator {
    position: absolute;
    top: 3px;
    left: 8px;
    font-weight: 500;
    display: inline-block;
    width: 92px;
    height: 22px;
    min-width: 92px;
    z-index: 1;
  }
  .software-block {
    height: 25px;
    width: 100px;
    position: relative;
  }
  .software-list-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
    font-size: var(--font-size-3xs);
  }
  .design-tools-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
  }
  .guldegget-aps1 {
    flex: 1;
    position: relative;
    font-weight: 600;
  }
  .job-positions {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xl) 0px var(--padding-4xl);
  }
  .assistant-baker1 {
    flex: 1;
    position: relative;
    font-weight: 500;
  }
  .job-positions1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xl) 0px var(--padding-4xl);
    font-size: var(--font-size-2xs);
  }
  .job-list-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mini);
    max-width: 100%;
  }
  .job-list-wrapper-wrapper {
    width: 363px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-4xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-smi);
    color: var(--white);
    font-family: var(--font-poppins);
  }
</style>

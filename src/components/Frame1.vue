<template>
  <div class="language-wrapper-wrapper">
    <div class="language-wrapper">
      <div class="language-details">
        <div class="language-icon-wrapper">
          <img
            class="language-1-icon1"
            loading="lazy"
            alt=""
            src="/language-11.svg"
          />
        </div>
        <h1 class="languages2">Languages</h1>
      </div>
      <div class="language-list">
        <div class="croatian-native1">Croatian - Native</div>
        <div class="english-professional1">
          English - Professional Proficiency (C1)
        </div>
        <div class="additional-languages">
          <div class="danish-continuously1">
            Danish - continuously learning on Duolingo for more than 2 years
          </div>
          <img
            class="additional-languages-child"
            loading="lazy"
            alt=""
            src="/line-221.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Frame1",
  });
</script>
<style scoped>
  .language-1-icon1 {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .language-icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .languages2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    min-width: 114px;
  }
  .language-details {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .croatian-native1 {
    position: relative;
    font-weight: 500;
    display: inline-block;
    min-width: 79px;
  }
  .english-professional1 {
    position: relative;
    font-weight: 500;
  }
  .danish-continuously1 {
    flex: 1;
    position: relative;
    font-weight: 500;
    white-space: pre-wrap;
    display: inline-block;
    max-width: 100%;
  }
  .additional-languages-child {
    height: 108px;
    width: 299px;
    position: absolute;
    margin: 0 !important;
    top: -78px;
    left: 0px;
    border-radius: var(--br-981xl);
    object-fit: contain;
    z-index: 1;
  }
  .additional-languages {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
  }
  .language-list {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-23xl);
    max-width: 100%;
    font-size: var(--font-size-4xs);
  }
  .language-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xl);
    max-width: 100%;
  }
  .language-wrapper-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xl) var(--padding-sm) var(--padding-17xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--white);
    font-family: var(--font-poppins);
  }
</style>

<template>
  <div class="languages">
    <div class="languages-header">
      <div class="languages-title-area">
        <div class="languages-title">
          <div class="icon-area">
            <img
              class="language-1-icon"
              loading="lazy"
              alt=""
              src="/language-1.svg"
            />
          </div>
          <h1 class="languages1">Languages</h1>
        </div>
      </div>
      <h3 class="croatian-native">Croatian - Native</h3>
    </div>
    <h3 class="english-professional">
      English - Professional Proficiency (C1)
    </h3>
    <div class="additional-language">
      <h3 class="danish-continuously">
        Danish - continuously learning on Duolingo for more than 2 years
      </h3>
      <img
        class="additional-language-child"
        loading="lazy"
        alt=""
        src="/line-2.svg"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Languages",
  });
</script>
<style scoped>
  .language-1-icon {
    width: 30px;
    height: 30px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .icon-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) 0px 0px;
  }
  .languages1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
  }
  .languages-title {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs);
  }
  .languages-title-area {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
  }
  .croatian-native {
    margin: 0;
    position: relative;
    font-size: var(--font-size-3xl);
    font-weight: 500;
    font-family: inherit;
  }
  .languages-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-14xl);
  }
  .english-professional {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 500;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
  }
  .danish-continuously {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 500;
    font-family: inherit;
  }
  .additional-language-child {
    height: 154px;
    width: 932px;
    position: absolute;
    margin: 0 !important;
    top: -106px;
    right: -208.5px;
    object-fit: contain;
    z-index: 1;
  }
  .additional-language {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
  }
  .languages {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-mini);
    box-sizing: border-box;
    gap: var(--gap-26xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-3xl);
    color: var(--white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 750px) {
    .languages1 {
      font-size: var(--font-size-5xl);
    }

    .languages {
      gap: var(--gap-2xl);
    }
  }
  @media screen and (max-width: 450px) {
    .languages1 {
      font-size: var(--font-size-xl);
    }

    .croatian-native {
      font-size: var(--font-size-lg);
    }

    .english-professional {
      font-size: var(--font-size-lg);
    }

    .danish-continuously {
      font-size: var(--font-size-lg);
    }
  }
</style>

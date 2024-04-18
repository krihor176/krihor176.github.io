<template>
  <div class="project-detail-block" :style="projectDetailBlockStyle">
    <div class="project-detail-block-child" />
    <div class="trapholt-website-exam-projec-wrapper">
      <div class="trapholt-website-container5">
        <p class="trapholt-website-5">
          Trapholt website - Exam project, 1st semestar
        </p>
        <p class="group-grgur5">Group - Grgur Ivić, Kristijan Horvat</p>
      </div>
    </div>
    <img
      class="screenshot-2024-04-17-at-22535"
      loading="lazy"
      alt=""
      src="/screenshot-20240417-at-2253-11@2x.png"
    />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ProjectDetailBlock",
    props: {
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
      propAlignSelf: { type: String },
      propFlex: { type: String },
    },
    computed: {
      projectDetailBlockStyle() {
        return {
          width: this.propWidth,
          height: this.propHeight,
          alignSelf: this.propAlignSelf,
          flex: this.propFlex,
        };
      },
    },
  });
</script>
<style scoped>
  .project-detail-block-child {
    width: 166px;
    height: 179px;
    position: relative;
    border-radius: var(--br-31xl);
    background-color: var(--color-darkslategray);
    display: none;
  }
  .trapholt-website-5 {
    margin: 0;
  }
  .group-grgur5 {
    margin: 0;
  }
  .trapholt-website-container5 {
    flex: 1;
    position: relative;
    font-weight: 500;
    z-index: 1;
  }
  .trapholt-website-exam-projec-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-8xs);
  }
  .screenshot-2024-04-17-at-22535 {
    align-self: stretch;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .project-detail-block {
    width: 166px;
    height: 179px;
    border-radius: var(--br-31xl);
    background-color: var(--color-darkslategray);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) var(--padding-xs) var(--padding-6xl);
    box-sizing: border-box;
    gap: var(--gap-7xs);
    text-align: left;
    font-size: var(--font-size-3xs);
    color: var(--color-crimson);
    font-family: var(--font-poppins);
  }
</style>

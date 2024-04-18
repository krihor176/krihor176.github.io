<template>
  <div class="skills-wrapper-wrapper">
    <div class="skills-wrapper">
      <div class="education-icon-parent">
        <div class="education-icon">
          <img
            class="graduation-cap-icon1"
            loading="lazy"
            alt=""
            src="/graduation-cap1@2x.png"
          />
        </div>
        <h1 class="education2">Education</h1>
      </div>
      <div class="school-list1">
        <div class="academy-details">
          <AcademyWrapper
            ellipse2="/ellipse-3.svg"
            sep2023Currently="Sep 2023 - currently"
            businessAcademySouthWestM="Business Academy SouthWest - Multimedia design"
            currentlyPursuingMyPassio="Currently pursuing my passion for multimedia design. Working professionally with design and development of web solutions."
          /><AcademyWrapper
            ellipse2="/ellipse-2.svg"
            sep2023Currently="Sep 2018 - May 2023"
            businessAcademySouthWestM="High school of electrical engineering"
            currentlyPursuingMyPassio="Became familiar with IT, computer technology and computer networks through the comprehensive Computer Technician program."
            propPadding="var(--padding-9xs) 0px 0px"
            propMinWidth="186px"
            propAlignSelf="unset"
            propWidth="276px"
            propDisplay="inline-block"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import AcademyWrapper from "./AcademyWrapper.vue";

  export default defineComponent({
    name: "Frame2",
    components: { AcademyWrapper },
  });
</script>
<style scoped>
  .graduation-cap-icon1 {
    width: 20px;
    height: 20px;
    position: relative;
    object-fit: cover;
  }
  .education-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .education2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
    display: inline-block;
    min-width: 103px;
  }
  .education-icon-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .academy-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
  }
  .school-list1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
    font-size: var(--font-size-2xs);
  }
  .skills-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xl);
  }
  .skills-wrapper-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-20xl) var(--padding-6xs) var(--padding-17xl);
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--white);
    font-family: var(--font-poppins);
  }
</style>

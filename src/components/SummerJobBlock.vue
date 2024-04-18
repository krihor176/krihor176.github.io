<template>
<div id="projects"> 
  <div class="summer-job-block">
    <div class="job-duration-block">
      <div class="job-time-block">
        <div class="job-year-block">
          <div class="year-icon-container">
            <div class="year-icon">
              <img class="year-icon-child" alt="" src="/ellipse-2.svg" />
            </div>
            <div class="summers-of-20221">Summers of 2022 & 2023</div>
          </div>
          <div class="job-title-block">
            <div class="job-detail-block">
              <div class="garden-festival1">Garden festival</div>
              <div class="drink-supplier-on1">
                Drink supplier on music festivals
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects">
      <div class="project-block">
        <div class="project-header-block">
          <div class="project-icon-block">
            <img
              class="source-code-icon1"
              loading="lazy"
              alt=""
              src="/source-code@2x.png"
            />
            <h1 class="projects4">Projects</h1>
          </div>
        </div>
        <div class="project-content-block">
          <div class="project-item">
            <ProjectDetailBlock />
            <div class="project-item1">
              <div class="project-detail-block1">
                <ProjectDetailBlock
                  propWidth="unset"
                  propHeight="unset"
                  propAlignSelf="stretch"
                  propFlex="0.7821"
                />
                <div class="project-item2">
                  <ProjectDetailBlock
                    propWidth="unset"
                    propHeight="unset"
                    propAlignSelf="stretch"
                    propFlex="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="project-pagination">
            <div class="page-dot-container">
              <img
                class="page-dot-container-child"
                alt=""
                src="/ellipse-2.svg"
              />
              <img
                class="page-dot-container-item"
                alt=""
                src="/ellipse-2.svg"
              />
              <img
                class="page-dot-container-inner"
                loading="lazy"
                alt=""
                src="/line-3.svg"
              />
              <img
                class="page-dot-container-child1"
                alt=""
                src="/ellipse-2.svg"
              />
              <img
                class="page-dot-container-child2"
                alt=""
                src="/ellipse-2.svg"
              />
              <img
                class="page-dot-container-child3"
                alt=""
                src="/ellipse-2.svg"
              />
            </div>
          </div>
          <div class="project-item3">
            <div class="project-item-content">
              <ProjectDetailBlock
                propWidth="unset"
                propHeight="unset"
                propAlignSelf="stretch"
                propFlex="1"
              /><ProjectDetailBlock
                propWidth="unset"
                propHeight="unset"
                propAlignSelf="stretch"
                propFlex="1"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>
  import { defineComponent } from "vue";
  import ProjectDetailBlock from "./ProjectDetailBlock.vue";

  export default defineComponent({
    name: "SummerJobBlock",
    components: { ProjectDetailBlock },
  });
</script>
<style scoped>
  .year-icon-child {
    width: 9px;
    height: 9px;
    position: relative;
  }
  .year-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .summers-of-20221 {
    position: relative;
    font-weight: 500;
  }
  .year-icon-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
  }
  .garden-festival1 {
    align-self: stretch;
    position: relative;
    font-weight: 600;
  }
  .drink-supplier-on1 {
    width: 276px;
    position: relative;
    font-size: var(--font-size-2xs);
    font-weight: 500;
    display: inline-block;
  }
  .job-detail-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
  }
  .job-title-block {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-mid);
    font-size: var(--font-size-smi);
    color: var(--white);
  }
  .job-year-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xl);
  }
  .job-time-block {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-19xl) 0px var(--padding-10xl);
  }
  .source-code-icon1 {
    height: 27px;
    width: 20px;
    position: relative;
    object-fit: contain;
  }
  .projects4 {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
  }
  .project-icon-block {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .project-header-block {
    width: 175px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xl);
    box-sizing: border-box;
  }
  .project-item2 {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
  }
  .project-detail-block1 {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-184xl);
  }
  .project-item1 {
    align-self: stretch;
    height: 561px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
  }
  .project-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-198xl);
    min-width: 110px;
  }
  .page-dot-container-child {
    position: absolute;
    top: 31px;
    left: 1px;
    width: 9px;
    height: 9px;
  }
  .page-dot-container-item {
    position: absolute;
    top: 248px;
    left: 1px;
    width: 9px;
    height: 9px;
  }
  .page-dot-container-inner {
    position: absolute;
    top: 0px;
    left: 4px;
    width: 2.2px;
    height: 950px;
    object-fit: contain;
    z-index: 1;
  }
  .page-dot-container-child1 {
    position: absolute;
    top: 441px;
    left: 0px;
    width: 9px;
    height: 9px;
    z-index: 2;
  }
  .page-dot-container-child2 {
    position: absolute;
    top: 632px;
    left: 0px;
    width: 9px;
    height: 9px;
    z-index: 2;
  }
  .page-dot-container-child3 {
    position: absolute;
    top: 823px;
    left: 0px;
    width: 9px;
    height: 9px;
    z-index: 2;
  }
  .page-dot-container {
    width: 10px;
    height: 950px;
    position: relative;
  }
  .project-pagination {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-21xl) var(--padding-7xs) 0px 0px;
  }
  .project-item-content {
    align-self: stretch;
    height: 563px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-186xl);
  }
  .project-item3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-184xl) 0px 0px;
    box-sizing: border-box;
    min-width: 108px;
  }
  .project-content-block {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
    font-size: var(--font-size-3xs);
    color: var(--color-crimson);
  }
  .project-block {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
    font-size: var(--font-size-xl);
    color: var(--white);
  }
  .job-duration-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-12xl);
    max-width: 100%;
  }
  .summer-job-block {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-3xs) var(--padding-99xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-2xs);
    color: var(--color-crimson);
    font-family: var(--font-poppins);
  }
</style>

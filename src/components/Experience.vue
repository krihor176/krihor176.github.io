<template>
  <div class="experience">
    <div class="work-container">
      <div class="work-info">
        <div class="work-details">
          <div class="work-icon">
            <img
              class="business-icon"
              loading="lazy"
              alt=""
              src="/business@2x.png"
            />
          </div>
          <h1 class="experience1">Experience</h1>
        </div>
        <div class="duration-container">
          <div class="duration-details">
            <div class="duration-marker">
              <img class="duration-marker-child" alt="" src="/ellipse-3.svg" />
            </div>
            <div class="feb-2024-">Feb 2024 - currently</div>
          </div>
        </div>
      </div>
      <div class="employer">
        <div class="guldegget-aps">Guldegget ApS</div>
      </div>
      <div class="job-description">
        <div class="assistant-baker">Assistant baker</div>
      </div>
    </div>
    <div class="festival-work">
      <div class="festival-details">
        <div class="festival-duration">
          <div class="festival-marker">
            <img class="festival-marker-child" alt="" src="/ellipse-2.svg" />
          </div>
          <div class="summers-of-2022">Summers of 2022 & 2023</div>
        </div>
        <div class="festival-name">
          <h3 class="garden-festival">Garden festival</h3>
        </div>
        <div class="vendor-description">
          <div class="drink-supplier-on">
            Drink supplier on music festivals.
          </div>
        </div>
      </div>
    </div>
    <div class="warehouse-work">
      <div class="warehouse-details">
        <div class="warehouse-duration">
          <div class="warehouse-marker">
            <img class="warehouse-marker-child" alt="" src="/ellipse-2.svg" />
          </div>
          <div class="summers-of-2019">Summers of 2019 & 2020</div>
        </div>
        <div class="store-name">
          <div class="dm-drogerie">dm - drogerie markt</div>
        </div>
        <div class="warehouse-tasks">
          <div class="cleaning-warehouse-picking">
            Cleaning warehouse. Picking up boxes in warehouse. Cleaning floors
            and meeting rooms.
          </div>
        </div>
      </div>
      <img class="warehouse-work-child" alt="" src="/ellipse-2.svg" />
    </div>
    <div class="experience-inner">
      <img class="ellipse-icon" alt="" src="/ellipse-2.svg" />
    </div>
    <div class="experience-child">
      <img class="frame-child1" alt="" src="/ellipse-2.svg" />
    </div>
    <div class="frame-div">
      <img class="frame-child2" alt="" src="/ellipse-2.svg" />
    </div>
    <img class="experience-item" loading="lazy" alt="" src="/line-1-1.svg" />
    <img class="line-icon" alt="" src="/line-21.svg" />
    <div class="exam-marker">
      <img class="exam-marker-child" alt="" src="/ellipse-2.svg" />
    </div>
    <div class="projects2">Projects</div>
      <img class="experience-child1" alt="" src="/line-22.svg" />
    <div class="trapholt-website-container">
      <p class="trapholt-website-">
        Trapholt website - Exam project, 1st semestar
      </p>
      <p class="group-grgur">Group - Grgur Ivić, Kristijan Horvat</p>
      <a href="public/exam_project.zip" download="exam_project.zip" style="text-decoration: underline; text-decoration-color: #D40848 ; color: inherit;">
      <p class="group-grgur">Download the website</p> </a>
    </div>
    
    <div class="exam-project">
      
      <div class="project-image" />
      <img
        class="trapholtss"
        alt=""
        src="/trapholtss.png"
      />
    </div>
    <div class="trapholt-website-container1">
      <p class="trapholt-website-1">
      Website for driving school company       
      </p>
      <p class="group-grgur1">
        Project for High school - May 2022
      </p>
      <a href="public/WEB3 (1).zip" download="WEB3 (1).zip" style="text-decoration: underline; text-decoration-color: #D40848 ; color: inherit;">
      <p class="group-grgur">Download the website</p> </a>
    </div>
    <div class="rectangle-div" />
    <div class="trapholt-website-container2">
      <p class="trapholt-website-2">
        Promotional video about Denmark
      </p>
      <p class="group-grgur2">Project for BHV agency - Croatia</p>
    </div>
    <div class="screenshot-2024-04-17-at-22533">
      <iframe width="360" height="160" src="https://www.youtube.com/embed/EC4PEXsV6DI?si=oyWRtokCIDy7Fbco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> </iframe>
    </div>
    <div class="trapholt-website-container3">
      <p class="trapholt-website-3">
        Job launcher app  - project for UX class 1st semester <br> Group - Anna T, Lachezar T, Aimilia D, Kristijan H
      </p>
    </div>
    <div class="experience-child2" />
    <div class="trapholt-website-container4">
      <p class="trapholt-website-4"> Posters for international day at EASV
      </p>
      <a href="public/poster.zip" download="poster.zip" style="text-decoration: underline; text-decoration-color: #D40848 ; color: inherit;">
      <p class="group-grgur4">Download the posters</p></a>
    </div>
    <img
      class="intday-poster"
      alt=""
      src="/intday-poster.png"
    />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Experience",
  });
</script>
<style scoped>
  .business-icon {
    width: 31px;
    height: 37px;
    position: relative;
    object-fit: cover;
  }
  .work-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) 0px 0px;
  }
  .experience1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
  }
  .work-details {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xs);
  }
  .duration-marker-child {
    width: 9px;
    height: 9px;
    position: relative;
  }
  .duration-marker {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6xs-5) 0px 0px;
  }
  .feb-2024- {
    position: relative;
    font-weight: 500;
  }
  .duration-details {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lg);
  }
  .duration-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs);
    font-size: var(--font-size-mini);
    color: var(--color-crimson);
  }
  .work-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-22xl);
  }
  .guldegget-aps {
    position: relative;
    font-weight: 600;
  }
  .employer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-20xl);
    font-size: var(--font-size-3xl);
  }
  .assistant-baker {
    flex: 1;
    position: relative;
    font-weight: 500;
    display: inline-block;
    max-width: 100%;
  }
  .job-description {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-19xl);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-lgi);
  }
  .work-container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs-3);
    max-width: 100%;
    font-size: var(--font-size-14xl);
    color: var(--white);
  }
  .festival-marker-child {
    width: 9px;
    height: 9px;
    position: relative;
  }
  .festival-marker {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-6xs) 0px 0px;
  }
  .summers-of-2022 {
    position: relative;
    font-weight: 500;
  }
  .festival-duration {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
    color: var(--color-crimson);
  }
  .garden-festival {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 600;
    font-family: inherit;
  }
  .festival-name {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xl);
    font-size: var(--font-size-3xl);
  }
  .drink-supplier-on {
    flex: 1;
    position: relative;
    font-weight: 500;
    display: inline-block;
    max-width: 100%;
  }
  .vendor-description {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-6xl);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-lgi);
  }
  .festival-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs-3);
    max-width: 100%;
  }
  .festival-work {
    width: 808px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
    color: var(--white);
  }
  .warehouse-marker-child {
    width: 9px;
    height: 9px;
    position: relative;
  }
  .warehouse-marker {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
  }
  .summers-of-2019 {
    position: relative;
    font-weight: 500;
  }
  .warehouse-duration {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
    color: var(--color-crimson);
  }
  .dm-drogerie {
    position: relative;
    font-weight: 600;
  }
  .store-name {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xl);
    font-size: var(--font-size-3xl);
  }
  .cleaning-warehouse-picking {
    flex: 1;
    position: relative;
    font-weight: 500;
    display: inline-block;
    max-width: 100%;
  }
  .warehouse-tasks {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-6xl);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-lgi);
  }
  .warehouse-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-8xs-3);
    max-width: 100%;
  }
  .warehouse-work-child {
    height: 9px;
    width: 9px;
    position: absolute;
    margin: 0 !important;
    right: 210px;
    bottom: 238.5px;
  }
  .warehouse-work {
    width: 808px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xs) var(--padding-482xl);
    box-sizing: border-box;
    position: relative;
    max-width: 100%;
    color: var(--white);
  }
  .ellipse-icon {
    height: 9px;
    width: 9px;
    position: relative;
  }
  .experience-inner {
    width: 427px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) var(--padding-143xl-5);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-child1 {
    height: 9px;
    width: 9px;
    position: relative;
  }
  .experience-child {
    width: 429px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) var(--padding-203xl-5);
    box-sizing: border-box;
    max-width: 100%;
  }
  .frame-child2 {
    height: 9px;
    width: 9px;
    position: relative;
  }
  .frame-div {
    width: 429px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) var(--padding-143xl-5);
    box-sizing: border-box;
    max-width: 100%;
  }
  .experience-item {
    width: 0px;
    height: 351px;
    position: absolute;
    margin: 0 !important;
    top: 77px;
    left: 16px;
    object-fit: contain;
    z-index: 1;
  }
  .line-icon {
    height: 360px;
    position: absolute;
    margin: 0 !important;
    top: 90px;
    left: 15px;
    object-fit: contain;
    z-index: 2;
  }
  .exam-marker-child {
    height: 9px;
    width: 9px;
    position: relative;
  }
  .exam-marker {
    width: 433px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .projects2 {
    position: absolute;
    margin: 0 !important;
    top: 604px;
    left: 42px;
    font-size: var(--font-size-14xl);
    font-weight: 600;
    color: var(--white);
    z-index: 3;
  }
  .experience-child1 {
    width: 3px;
    height: 1350px;
    position: absolute;
    margin: 0 !important;
    right: 213px;
    bottom: -131px;
    object-fit: contain;
    z-index: 3;
  }
  .trapholt-website- {
    margin: 0;
  }
  .group-grgur {
    margin: 0;
  }
  .trapholt-website-container {
    position: absolute;
    margin: 0 !important;
    top: 691px;
    left: 35px;
    font-weight: 500;
    z-index: 3;
  }
  .project-image {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-31xl);
    background-color: var(--color-darkslategray);
    width: 100%;
    height: 100%;
  }
  .trapholtss {
    position: absolute;
    top: 92px;
    left: 51px;
    width: 352px;
    height: 165px;
    object-fit: cover;
    z-index: 3;
  }
  .exam-project {
    width: 537px;
    height: 270px;
    position: absolute;
    margin: 0 !important;
    top: 678px;
    left: -14px;
  }
  .trapholt-website-1 {
    margin: 0;
    margin-right: 65px;
    margin-top: -160px;
  }
  .group-grgur1 {
    margin: 0;
  }
  .trapholt-website-container1 {
    position: absolute;
    margin: 0 !important;
    right: -201px;
    bottom: 890px;
    font-weight: 500;
    z-index: 4;
  }
  .rectangle-div {
    width: 537px;
    height: 270px;
    position: absolute;
    margin: 0 !important;
    bottom: 409px;
    left: 19px;
    border-radius: var(--br-31xl);
    background-color: var(--color-darkslategray);
    z-index: 3;
  }
  .trapholt-website-2 {
    margin: 0;
  }
  .group-grgur2 {
    margin: 0;
  }
  .trapholt-website-container2 {
    position: absolute;
    margin: 0 !important;
    bottom: 620px;
    left: 68px;
    font-weight: 500;
    z-index: 4;
  }
  .screenshot-2024-04-17-at-22533 {
    width: 352px;
    height: 185px;
    position: absolute;
    margin: 0 !important;
    bottom: 422px;
    left: 70px;
    object-fit: cover;
    z-index: 4;
  }
  .trapholt-website-3 {
    margin: 0;
  }
  .group-grgur3 {
    margin: 0;
  }
  .trapholt-website-container3 {
    position: absolute;
    margin: 0 !important;
    right: -250px;
    bottom: 445px;
    font-weight: 500;
    z-index: 4;
  }
  .experience-child2 {
    width: 537px;
    height: 270px;
    position: absolute;
    margin: 0 !important;
    bottom: -131px;
    left: 19px;
    border-radius: var(--br-31xl);
    background-color: var(--color-darkslategray);
    z-index: 3;
  }
  .trapholt-website-4 {
    margin: 0;
  }
  .group-grgur4 {
    margin: 0;
  }
  .trapholt-website-container4 {
    position: absolute;
    margin: 0 !important;
    bottom: 80px;
    left: 68px;
    font-weight: 500;
    z-index: 4;
  }
  .intday-poster {
    width: 352px;
    height: 185px;
    position: absolute;
    margin: 0 !important;
    bottom: -118px;
    left: 70px;
    object-fit: cover;
    z-index: 4;
  }
  .experience {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-49xl-5);
    max-width: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-mini);
    color: white;
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1050px) {
    .experience {
      gap: var(--gap-12xl);
    }
  }
  @media screen and (max-width: 750px) {
    .experience1 {
      font-size: var(--font-size-5xl);
    }

    .warehouse-work {
      padding-bottom: var(--padding-250xl);
      box-sizing: border-box;
    }

    .projects2 {
      font-size: var(--font-size-5xl);
    }
  }
  @media screen and (max-width: 450px) {
    .experience1 {
      font-size: var(--font-size-xl);
    }

    .guldegget-aps {
      font-size: var(--font-size-lg);
    }

    .garden-festival {
      font-size: var(--font-size-lg);
    }

    .dm-drogerie {
      font-size: var(--font-size-lg);
    }

    .projects2 {
      font-size: var(--font-size-xl);
    }

    .experience {
      gap: var(--gap-mid);
    }
  }
</style>

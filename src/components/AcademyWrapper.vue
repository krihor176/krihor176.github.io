<template>
  <div class="academy-wrapper">
    <div class="academy-marker" :style="academyMarkerStyle">
      <img class="academy-marker-child" alt="" :src="ellipse2" />
    </div>
    <div class="academy-info" :style="academyInfoStyle">
      <div class="sep-2023-1">{{sep2023Currently}}</div>
      <div class="business-academy-southwest1">
        {{businessAcademySouthWestM}}
      </div>
      <div class="currently-pursuing-my1" :style="currentlyPursuingMyStyle">
        {{currentlyPursuingMyPassio}}
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AcademyWrapper",
    props: {
      ellipse2: { type: String },
      sep2023Currently: { type: String },
      businessAcademySouthWestM: { type: String },
      currentlyPursuingMyPassio: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propAlignSelf: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propDisplay: { type: String },
    },
    computed: {
      academyMarkerStyle() {
        return {
          padding: this.propPadding,
        };
      },
      academyInfoStyle() {
        return {
          minWidth: this.propMinWidth,
        };
      },
      currentlyPursuingMyStyle() {
        return {
          alignSelf: this.propAlignSelf,
          width: this.propWidth,
          display: this.propDisplay,
        };
      },
    },
  });
</script>
<style scoped>

::selection {
  color: #D40848;
  background-color: white;

}
  .academy-marker-child {
    width: 9px;
    height: 9px;
    position: relative;
  }
  .academy-marker {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs-5) 0px 0px;
  }
  .sep-2023-1 {
    position: relative;
    font-weight: 500;
    color: var(--color-crimson);
    display: inline-block;
    min-width: 112px;
  }
  .business-academy-southwest1 {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-smi);
    font-weight: 600;
  }
  .currently-pursuing-my1 {
    align-self: stretch;
    position: relative;
    font-weight: 500;
  }
  .academy-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
    min-width: 190px;
  }
  .academy-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
    text-align: left;
    font-size: var(--font-size-2xs);
    color: var(--white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1200px) {
    .academy-info {
      max-width: 2000px;
    }
  }

@media screen and (max-width: 1050px) {
  .sep-2023-1 {
    max-width: 120px; 
  }
}

@media screen and (max-width: 750px) {
  .business-academy-southwest1 {
    font-size: var(--font-size-sm); 
  }
}

@media screen and (max-width: 450px) {
  .currently-pursuing-my1 {
    font-weight: 300;
  }
}
</style>

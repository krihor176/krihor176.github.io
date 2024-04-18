<template>
  <div class="email-form">
    <div class="input-fields">
      <div class="name-inputs">
        <div class="first-name-field">
          <div class="component-8">
            <input class="input-field" v-model="firstName" @focus="firstNamePlaceholder = ''" @blur="checkFirstNamePlaceholder" />
            <div class="component-8-child"></div>
            <div class="first-name">{{ firstNamePlaceholder || 'First Name*' }}</div>
          </div>
          <div class="last-name-input-parent">
            <input class="input-field" v-model="lastName" @focus="lastNamePlaceholder = ''" @blur="checkLastNamePlaceholder" />
            <div class="last-name">{{ lastNamePlaceholder || 'Last Name*' }}</div>
          </div>
        </div>
        <div class="component-2">
          <input class="input-field" v-model="email" @focus="emailPlaceholder = ''" @blur="checkEmailPlaceholder" />
          <div class="email">{{ emailPlaceholder || 'Email*' }}</div>
        </div>
        <div class="phone-input-parent">
          <input class="input-field" v-model="phoneNumber" @focus="phonePlaceholder = ''" @blur="checkPhonePlaceholder" />
          <div class="phone-number">{{ phonePlaceholder || 'Phone Number*' }}</div>
        </div>
        <div class="component-4">
          <textarea class="input-field message-box" v-model="message" @focus="messagePlaceholder = ''" @blur="checkMessagePlaceholder"></textarea>
          <div class="your-message">{{ messagePlaceholder || 'Your message...' }}</div>
        </div>
      </div>
      <div class="submit-button">
        <div class="send-message">Send Message</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
      firstNamePlaceholder: 'First Name*',
      lastNamePlaceholder: 'Last Name*',
      emailPlaceholder: 'Email*',
      phonePlaceholder: 'Phone Number*',
      messagePlaceholder: 'Your message...'
    };
  },
};
</script>




<style scoped>

.input-field:not(:placeholder-shown) {
  color: #333; /* Change color for user input */
  font-style: italic; /* Italicize user input */
}
  .input-field {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-dimgray);
    box-sizing: border-box;
  }
  .component-8-child {
    height: 25px;
    width: 36px;
    display: none;
    z-index: 1;
  }
  .first-name {
    position: relative;
    line-height: 26px;
    display: inline-block;
    min-width: 99px;
    z-index: 2;
  }
  .component-8 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-base) var(--padding-smi);
    box-sizing: border-box;
    position: relative;
    min-width: 144px;
  }
  .last-name-input {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
  }
  .last-name {
    width: 99px;
    position: relative;
    line-height: 26px;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
  }
  .last-name-input-parent {
    flex: 0.9579;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-xl) var(--padding-smi);
    box-sizing: border-box;
    position: relative;
    min-width: 144px;
    white-space: nowrap;
    color: var(--white);
  }
  .first-name-field {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xl);
    color: var(--color-snow);
  }
  .email-input {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
  }
  .email {
    width: 128px;
    position: relative;
    line-height: 26px;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
  }
  .component-2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-xl) var(--padding-xs);
    position: relative;
  }
  .phone-input {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
  }
  .phone-number {
    position: relative;
    line-height: 26px;
    display: inline-block;
    min-width: 128px;
    z-index: 1;
  }
  .phone-input-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-xl) var(--padding-xs);
    position: relative;
    white-space: nowrap;
  }
  .message-box {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    border: 1px solid var(--color-gray-200);
    box-sizing: border-box;
  }
  .your-message {
    width: 138px;
    position: relative;
    line-height: 26px;
    display: inline-block;
    z-index: 1;
  }
  .component-4-child {
    width: 22px;
    height: 22px;
    position: absolute;
    margin: 0 !important;
    right: 4px;
    bottom: 4px;
    object-fit: contain;
    z-index: 1;
  }
  .component-4-item {
    width: 13px;
    height: 13px;
    position: absolute;
    margin: 0 !important;
    right: 5px;
    bottom: 5px;
    object-fit: contain;
    z-index: 2;
  }
  .component-4 {
    align-self: stretch;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl);
    box-sizing: border-box;
    position: relative;
  }
  .name-inputs {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
  }
  .send-message {
    position: relative;
    font-weight: 600;
    display: inline-block;
    min-width: 123px;
  }
  .submit-button {
    align-self: stretch;
    border-radius: var(--br-5xl);
    background-color: var(--color-crimson);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-5xs) var(--padding-xl);
    white-space: nowrap;
    font-size: var(--font-size-lg);
  }
  .input-fields {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-21xl);
    max-width: 100%;
  }
  .email-form {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-darkslategray);
    box-shadow: var(--card-shadow);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-31xl);
    box-sizing: border-box;
    max-width: 100%;
    height: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--body1-size);
    color: var(--white);
    font-family: var(--body1);
  }

  @media screen and (max-width: 750px) {
    .first-name-field {
      flex-wrap: wrap;
    }

    .email-form {
      padding-left: var(--padding-4xl);
      padding-right: var(--padding-4xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .last-name-input-parent {
      flex: 1;
    }

    .input-fields {
      gap: var(--gap-xl);
    }
  }
</style>

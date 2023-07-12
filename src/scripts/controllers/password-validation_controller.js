import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  // add targets
  static targets = [
    "count",
    "uppercase",
    "number",
    "special",
    "confirmation",
    "submit",
  ];

  // add values
  static values = {
    password: String,
    passwordConfirmation: String,
  };

  // set values
  setPasswordValue(e) {
    this.passwordValue = e.target.value;
  }

  setPasswordConfirmationValue(e) {
    this.passwordConfirmationValue = e.target.value;
  }

  // handle length validation
  validateCount() {
    const count = this.passwordValue.length;

    if (count >= 8 && count <= 32) {
      this.countTarget.dataset.state = "valid";
      return true;
    } else {
      this.countTarget.dataset.state = "invalid";
      return false;
    }
  }

  // handle uppercase validation (regex: /[A-Z]/)
  validateUppercase() {
    const re = new RegExp(/[A-Z]/);

    if (re.test(this.passwordValue)) {
      this.uppercaseTarget.dataset.state = "valid";
      return true;
    } else {
      this.uppercaseTarget.dataset.state = "invalid";
      return false;
    }
  }

  // handle number validation (regex: /\d/)
  validateNumber() {
    const re = new RegExp(/\d/);

    if (re.test(this.passwordValue)) {
      this.numberTarget.dataset.state = "valid";
      return true;
    } else {
      this.numberTarget.dataset.state = "invalid";
      return false;
    }
  }

  // handle special character validation (regex: /[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]/)
  validateSpecial() {
    const re = new RegExp(/[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]/);

    if (re.test(this.passwordValue)) {
      this.specialTarget.dataset.state = "valid";
      return true;
    } else {
      this.specialTarget.dataset.state = "invalid";
      return false;
    }
  }

  // handle PW fields match validation
  validateConfirmation() {
    if (
      this.passwordValue === this.passwordConfirmationValue &&
      this.passwordValue.length > 0
    ) {
      this.confirmationTarget.dataset.state = "valid";
      return true;
    } else {
      this.confirmationTarget.dataset.state = "invalid";
      return false;
    }
  }

  // validate form
  validateForm() {
    this.validateCount();
    this.validateUppercase();
    this.validateNumber();
    this.validateSpecial();
    this.validateConfirmation();

    const isValid =
      this.validateCount() &&
      this.validateUppercase() &&
      this.validateNumber() &&
      this.validateSpecial() &&
      this.validateConfirmation();

    if (isValid) {
      this.submitTarget.disabled = false;
    } else {
      this.submitTarget.disabled = true;
    }
  }

  passwordValueChanged() {
    this.validateForm();
  }

  passwordConfirmationValueChanged() {
    this.validateForm();
  }
}

export const getErrorElement = $element => {
    const $testElement = $element.parentElement.querySelector(`.form-error`);
    if (!$testElement) {
      return getErrorElement($element.parentElement);
    }
    return $testElement;
  };
  
  export const handleSubmitForm = e => {
    const $form = e.currentTarget;
  
    if (!$form.checkValidity()) {
      e.preventDefault();
  
    }
    if ($form.checkValidity()) {
      e.preventDefault();
    }
  
    [...$form.elements].forEach($field => showValidationInfo($field));
  };
  
  export const showValidationInfo = $field => {
    const $error = getErrorElement($field);
  
    if ($field.validity.valueMissing) {
      $error.textContent = `Zotje, da veld is wel verplicht he.`;
      $field.style.borderColor = `#F44545`;
    }
  
    if ($field.validity.typeMismatch) {
      $error.textContent = `Mattie toch, da klopt hier niet he.`;
      $field.style.borderColor = `#F44545`;
    }
  
    if ($field.validity.rangeUnderflow) {
      $error.textContent = `Mattie toch, da klopt hier niet he.`;
      $field.style.borderColor = `#F44545`;
    }
  
    if ($field.validity.tooShort) {
      $error.textContent = `Je wachtwoord moet minstens 6 karakters lang zijn.`;
      $field.style.borderColor = `#F44545`;
    }
  };
  
  export const handleBlurField = e => {
    const $inputField = e.currentTarget;
    showValidationInfo($inputField);
  };
  
  export const handleInputField = e => {
    const $inputField = e.currentTarget;
    const $error = getErrorElement($inputField);
  
    if ($inputField.validity.valid) {
      $error.textContent = ``;
      $inputField.style.borderColor = `#00e5b1`;
    }
  };
  
  export const addValidationListeners = inputFields => {
    inputFields.forEach($inputField => {
      $inputField.addEventListener(`blur`, handleBlurField);
      $inputField.addEventListener(`input`, handleInputField);
    });
  };
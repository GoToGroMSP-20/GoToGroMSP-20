import { validationStatus } from "./validationStatus";

export const validateMobileFormat = (string) => {
  // initialize local variables
  //let result = true;
  const mobile_pattern = /^[\d]{10}$/;
  const sanitizedString = string.replace(/\s+/g, "");
  let mobileNumber = sanitizedString.value.trim();
  if (!mobileNumber === "") {
    if (!mobile_pattern.test(mobileNumber)) {
      console.log("The Mobile Number must only contain digits\n");
      return validationStatus.failure;
    } else {
      return validationStatus.success;
      //console.log("The Mobile Number is valid\n");
    }
  } else {
    console.log("The Mobile Number cannot be Empty\n");
    return validationStatus.failure;
  }
};

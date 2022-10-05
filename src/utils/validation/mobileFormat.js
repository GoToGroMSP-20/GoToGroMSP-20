import { validationStatus } from "./validationStatus";

export const validateMobileFormat = (string) => {
  // initialize local variables
  //let result = true;
  const mobile_pattern = /^[\d]{10}$/;
  const sanitizedString = string.replace(/\s+/g, "");
  let mobileNumber = sanitizedString.trim();
  if (mobileNumber !== "") {
    if (!mobile_pattern.test(mobileNumber)) {
      console.error("Mobile number must only contain 10 digits");
      return validationStatus.failure;
    } else {
      return validationStatus.success;
      //console.log("The Mobile Number is valid\n");
    }
  } else {
    console.error("The Mobile Number cannot be Empty");
    return validationStatus.failure;
  }
};

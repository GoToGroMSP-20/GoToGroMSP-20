import { validationStatus } from "./validationStatus";

export const validateEmailFormat = (string) => {
  // initialize local variables
  //let result = true;
  // Email Pattern taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const email_pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = string.trim();
  if (email !== "") {
    if (!email_pattern.test(String(email).toLowerCase())) {
      console.error("The Email is not valid\n");
      return validationStatus.failure;
    } else {
      return validationStatus.success;
      //console.log("The Email is valid\n");
    }
  } else {
    console.error("The Email cannot be Empty\n");
    return validationStatus.failure;
  }
};

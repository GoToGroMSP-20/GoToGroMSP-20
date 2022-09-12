export const validateMobileFormat = (string) => {
  // initialize local variables
  let result = true;
  const mobile_pattern = /^[\d]{10}$/;
  let string = string.replace(/\s+/g, "");
  let mobile = string.value.trim();
  if (!mobile == "") {
    if (!mobile_pattern.test(mobile)) {
      console.log("The Mobile Number must only contain digits\n");
      result = false;
    } else {
      console.log("The Mobile Number is valid\n");
    }
  } else {
    console.log("The Mobile Number cannot be Empty\n");
    result = false;
  }
};

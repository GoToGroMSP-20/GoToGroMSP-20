export const validateMobileFormat = (string) => {

  // initialize local variables
  var result = true;
  var mobile_pattern = /^[\d\s]{10,12}$/; 
  var mobile = string.value.trim();
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

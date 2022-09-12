export const validateEmailFormat = (string) => {
  // initialize local variables
  let result = true;
  // Email Pattern taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const email_pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = string.value.trim();
  if (!email == "") {
    if (!email_pattern.test(String(email).toLowerCase())) {
      console.log("The Email is not valid\n");
      result = false;
    } else {
      console.log("The Email is valid\n");
    }
  } else {
    console.log("The Email cannot be Empty\n");
    result = false;
  }
};

import axios from "axios";

const API = axios.create({
  baseURL: "https://gotogro-msp20-api-test.herokuapp.com",
  // baseURL: "http://localhost:4000",
  responseType: "json",
});

export const addMember = async (memberToAdd, successModalRef, errorModalRef) => {
  try {
    const response = await API.post("/addmember", {
      lastName: memberToAdd.lastName,
      firstName: memberToAdd.firstName,
      dob: memberToAdd.dob,
      email: memberToAdd.email,
      mobile: memberToAdd.mobile,
    });
    successModalRef.current.showModal();
    console.log(response.data.message);
  } catch (error) {
    errorModalRef.current.showModal();
    console.error(error.message);
  }
}
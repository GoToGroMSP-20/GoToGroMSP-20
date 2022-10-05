import axios from "axios";

const API = axios.create({
  baseURL: "https://gotogro-msp20-api-test.herokuapp.com",
  // baseURL: "http://localhost:4000",
  responseType: "json",
});

export const addOrder = async (orderToAdd, successModalRef, errorModalRef) => {
  try {
    const response = await API.post("/addorder", {
      transaction_id: orderToAdd.transaction_id,
      member_id: orderToAdd.member_id,
    });
    successModalRef.current.showModal();
    console.log(response.data.message);
  } catch (error) {
    errorModalRef.current.showModal();
    console.error(error.message);
  }
};

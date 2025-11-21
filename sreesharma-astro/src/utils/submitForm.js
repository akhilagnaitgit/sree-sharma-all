import axios from "axios";

export async function submitForm(data) {
  const token = localStorage.getItem("userToken");

  return axios.post("http://localhost:5000/forms/submit", data, {
    headers: {
      "Authorization": "Bearer " + token
    }
  });
}

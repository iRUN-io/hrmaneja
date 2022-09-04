import api from "../../../api/api";
import { toast } from "react-toastify";
import History from "./History";
import { CONTACT } from "../../../actions/types";

export const SendContact = (user) => async (dispatch) => {
  await api
    .post("contact", {
      name: user.name,
      email: user.email,
      subject: user.subject,
      message: user.message,
    })
    .then(
      (response) => {
        if (response.data.message === "Validation Error.") {
          return toast.error(response.data.data);
        }
        if (response.data.success) {
          dispatch({
            type: CONTACT,
            payload: response.data,
          });
          toast.success(response.data.message);
          History.push("/contact");
          setTimeout(function () {
            window.location.href = "/contact";
          }, 3000);
        }
      },
      (error) => {
        toast.error(error);
      }
    );
};

import { toast } from "react-toastify";
import proxy from '../proxy';

const initialState = {
  status : proxy.status(),
};

export default function user(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "users/signup":
      localStorage.setItem("tokan", JSON.stringify(data));
      toast.success("کاربر با موفقیت ثبت شد.");
      return { ...state, status: JSON.parse(data) };
    case "users/signin":
      localStorage.setItem("tokan", JSON.stringify(data));
      localStorage.setItem("tokan", JSON.stringify(data));
      toast.success("خوش اومدی!");
      return { ...state, status: JSON.parse(data)};
    default:
      return state;
  }
}

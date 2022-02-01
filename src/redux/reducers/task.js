import { toast } from "react-toastify";

const initialState = {
  list : [
    {id : 0, name : 'blowjob', description : 'make my pinnes happy :)', created_at : '1400', status : "FINISHED"}
  ],

};
export default function task(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case "tasks/list":
      return { ...state, list : data };
    case "tasks/create":
      toast.success("عملیات با موفقیت انجام شد.")
      return { ...state };
    case "tasks/update":
      toast.success("عملیات با موفقیت انجام شد.")
      return { ...state };
    case "tasks/delete":
      return {...state};
    default:
      return state;
  }
}

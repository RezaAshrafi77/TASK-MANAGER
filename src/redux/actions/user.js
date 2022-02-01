import proxy from "../proxy";

const user = {
  signin:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("users/signin", data, { dispatch });
    },
  signup:
    (data = {}) =>
    async (dispatch) => {
      await proxy.post("users/singup", data, {dispatch});
    },
};

export default user;
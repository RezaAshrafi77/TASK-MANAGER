import proxy from "../proxy";
const task = {
  list:
    (data = {}) =>
    async (dispatch) => {
      await proxy.get("tasks/list", data, { dispatch });
    },
  update:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.put("tasks/update", data);
      await proxy.get("tasks/list", data2, { dispatch });
    },
  add:
    (data = {}, data2 = {}, data3 = {}) =>
    async (dispatch) => {
      await proxy.post("tasks/create", data, { dispatch });
      await proxy.get("tasks/list", data2, { dispatch });
    },
  del:
    (data = {}, data2 = {}) =>
    async (dispatch) => {
      await proxy.delete("tasks/delete", data);
      await proxy.get("tasks/list", data2, { dispatch });
    },
};

export default task;

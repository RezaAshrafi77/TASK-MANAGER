import React, { useState } from "react";
import { connect } from "react-redux";
import { task } from "../../../redux/actions";

export const Create = ({ createTask, setOpenCreate }) => {
  const [createFields, setCreateFields] = useState({});

  const onChange = (name, value) => {
    setCreateFields({ ...createFields, [name]: value });
  };

  const submit = () => {
    createTask(createFields);
    setOpenCreate(false);
  };

  return (
    <div
      className="w-screen h-screen bg-black bg-opacity-60 backdrop-filter backdrop-blur-md fixed top-0 left-0 z-20 flex justify-center items-center"
      onClick={() => setOpenCreate(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black bg-opacity-60 rounded-xl p-6 flex flex-wrap"
        style={{
          // minHeight: "calc(100vh / 1.4)",
          width: "calc(100vh / 1.4 * 2 / 3)",
        }}
      >
        <h2 className="text-gray-400 text-2xl w-full">ایجاد تسک</h2>
        <div className="self-center w-full flex flex-col my-4">
          <input
            className="w-full mb-4 py-3 px-3 border border-solid border-gray-600 rounded-md text-tiny bg-transparent focus:outline-none focus:placeholder-blue-400 focus:ring-blue-400 focus:ring-1 text-gray-300"
            style={{ padding: "16px 20pxd" }}
            type="text"
            placeholder="عنوان"
            name="title"
            maxLength="20"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
          <textarea
            className="mt-2 w-full mb-4 py-3 px-3 border border-solid border-gray-600 rounded-md text-tiny bg-transparent focus:outline-none focus:placeholder-blue-400 focus:ring-blue-400 focus:ring-1 text-gray-300"
            rows={8}
            placeholder="توضیحات"
          />
        </div>
        <button
          className="w-full rounded-md py-3 text-tiny text-green-400 border border-solid border-green-400 self-end"
          onClick={() => submit()}
        >
          ثبت
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  createTask: task.add,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);

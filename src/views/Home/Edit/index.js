import React, { useState } from "react";
import { connect } from "react-redux";
import { task } from "../../../redux/actions";

export const Edit = ({ editTask, setOpenEdit }) => {
  const [status, setStatus] = useState("UNFINISHED");

  const submit = () => {
    editTask({ status });
    setOpenEdit(false);
  };

  return (
    <div
      className="w-screen h-screen bg-black bg-opacity-60 backdrop-filter backdrop-blur-md fixed top-0 left-0 z-20 flex justify-center items-center"
      onClick={() => setOpenEdit(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black bg-opacity-60 rounded-xl p-6 flex flex-wrap"
        style={{
          // minHeight: "calc(100vh / 1.4)",
          width: "calc(100vh / 1.4 * 2 / 3)",
        }}
      >
        <h2 className="text-gray-400 text-lg w-full">تغییر وضعیت</h2>
        <div className="self-center flex flex-row my-6 w-full gap-5">
          <button
            onClick={() => setStatus("UNFINISHED")}
            className={`w-1/2 border border-solid bg-transparent py-3 rounded-md ${
              status === "UNFINISHED"
                ? "border-green-400 text-green-400"
                : "border-gray-400 text-gray-400"
            }`}
          >
            UNFINISHED
          </button>
          <button
            onClick={() => setStatus("FINISHED")}
            className={`w-1/2 border border-solid bg-transparent py-3 rounded-md ${
              status === "FINISHED"
                ? "border-green-400 text-green-400"
                : "border-gray-400 text-gray-400"
            }`}
          >
            FINISHED
          </button>
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
  editTask: task.update,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);

import React from "react";
import { connect } from "react-redux";
import {task} from '../../../redux/actions';

export const Delete = ({ setOpenDelete, id, deleteTask }) => {

  const submit = () => {
    deleteTask({id});
    setOpenDelete(false);
  }
  
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-20 flex justify-center items-center"
      onClick={() => setOpenDelete(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black bg-opacity-60 backdrop-filter backdrop-blur-md rounded-xl p-6 flex flex-wrap"
        style={{
          width: "calc(100vw / 3 * 2 / 3)",
        }}
      >
        <p className="text-gray-300 text-lg w-full">
          ایا با حذف تسک مورد نظر موافقید؟
        </p>
        <div className="flex flex-row  w-full gap-5 mt-8">
          <button
            className="w-1/2 rounded-md py-3 text-tiny text-green-400 border border-solid border-green-400 self-end"
            onClick={() => submit()}
          >
            حذف
          </button>
          <button
            className="w-1/2 rounded-md py-3 text-tiny text-red-400 border border-solid border-red-400 self-end"
            onClick={() => setOpenDelete(false)}
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  deleteTask : task.delete
};

export default connect(mapStateToProps, mapDispatchToProps)(Delete);

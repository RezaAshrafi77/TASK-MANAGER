import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { task } from "../../redux/actions";
import Create from "./Create";
import Delete from "./Delete";
import Edit from './Edit';

export const Home = ({ getList, list }) => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="flex flex-col h-screen w-screen relative">
      <div className="w-4/5 h-4/5 m-auto rounded-md border border-solid border-gray-200 p-4 flex flex-col">
        <h1 className="text-xl mb-10">مشاهده لیست وظایف</h1>
        <div className="w-full flex justify-center mx-auto">
          <div className="flex flex-col w-full">
            <div className="w-full">
              <div className="w-full border-b border-gray-200 shadow">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-2 text-xs text-gray-500">ID</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Title</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Description
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">Status</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {list.map((task, index) => (
                      <tr className="whitespace-nowrap" onClick={() => setId(task.id)}>
                        <td className="px-6 py-4 text-sm text-gray-500 text-center">
                          {task?.id}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-sm text-gray-900">{task?.name}</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-sm text-gray-500">
                            {task?.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 text-center">
                          {task?.status}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                            onClick={() => setOpenEdit(true)}
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                            onClick={() => setOpenDelete(true)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-400 text-white w-16 h-16 rounded-full text-3xl pt-1 fixed leading-none hover:bg-blue-300"
        style={{ left: "calc(100% / 9)", bottom: "calc(100% / 8)" }}
        onClick={() => setOpenCreate(true)}
      >
        +
      </button>
      {openCreate && <Create setOpenCreate={setOpenCreate} />}
      {openEdit && <Edit setOpenEdit={setOpenEdit} id={id} />}
      {openDelete && <Delete setOpenDelete={setOpenDelete} id={id} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state?.task.list,
});

const mapDispatchToProps = {
  getList: task.list,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

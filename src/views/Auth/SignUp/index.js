import React, { useState } from "react";

import { connect } from "react-redux";
import { user } from "../../../redux/actions";
import _ from "lodash";
//assets

function SignUp({ signUp }) {
  const [signUpFields, setSignUpFiels] = useState({});
  // const [error, setError] = useState("");s

  const onChange = (name, value) => {
    setSignUpFiels({...signUpFields, [name] : value});
  };

  const submit = (e) => {
    signUp(signUpFields);
  };

  return (
    <div className="w-full overflow-x-hidden flex flex-row relative h-full">
      <div
        className={`flex flex-col items-center justify-center h-full w-full p-4 transition transform duration-300 absolute top-0 left-0`}
      >
        <strong className="w-full leading-6 dark:text-white mt-10">
          سلام <br /> خوش برگشتی!
        </strong>
        <div className="w-full flex flex-col mt-10">
          <input
            className="w-full mb-4 py-4 px-3 border border-solid border-gray-300 rounded-md text-tiny"
            style={{backgroundColor : '#efefef', padding : '16px 20pxd'}}
            type="text"
            name="firstName"
            placeholder="نام"
            maxLength="20"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
          <input
            className="w-full mb-4 py-4 px-3 border border-solid border-gray-300 rounded-md text-tiny"
            style={{backgroundColor : '#efefef', padding : '16px 20pxd'}}
            type="text"
            placeholder="نام خانوادگی"
            name="lastName"
            maxLength="30"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
          <input
            className="w-full mb-4 py-4 px-3 border border-solid border-gray-300 rounded-md text-tiny"
            style={{backgroundColor : '#efefef', padding : '16px 20pxd'}}
            type="text"
            placeholder="نام کاربری"
            name="username"
            maxLength="20"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
          <input
            className="w-full mb-4 py-4 px-3 border border-solid border-gray-300 rounded-md text-tiny"
            style={{backgroundColor : '#efefef', padding : '16px 20pxd'}}
            type="text"
            placeholder="رمز عبور"
            name="password"
            maxLength="20"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
          {/* <span className="text-red-500 text-xs">{error}</span> */}
          <br />
          <button
            className="w-full rounded-md py-3 text-tiny text-white bg-blue-400"
            onClick={() => submit("")}
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect((state) => ({}), {
  signUp: user.signup
})(SignUp);

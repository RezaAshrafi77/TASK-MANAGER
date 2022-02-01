import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignUp from "../SignUp";
import Login from "../SignIn";

//assets
import logoIcon from "../SignUp/assets/logo.svg";
import bgImage from "./bg.svg";
import arrowIcon from "./back.svg";

export const Desktop = ({}) => {
  const [phase, setPhase] = useState("manage");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const UserMangement = () => {
    return (
      <div
        className={`flex flex-col items-center justify-center w-full relative h-full transform transition-all duration-700 ${
          phase !== "manage" ? "translate-x-full" : ""
        }`}
      >
        <strong className="text-2xl text-blueC0 self-start tracking-tighter">
          ورود یا ثبت نام
        </strong>
        <p className="text-tiny self-start text-gray-500 mt-6 leading-6">
          کاربر گرامی لطفا یکی از دوگزینه زیر را انتخاب نمائید.
          <br /> درصورتی که عضو نیستید روی دکمه ثبت نام بزنید
        </p>
        <div className="mt-16 flex flex-col gap-4 w-full">
          <button
            className="w-full rounded-md py-3 text-tiny text-white bg-blue-400"
            onClick={() => setPhase("signup")}
          >
            ثبت نام
          </button>
          <button
            className="w-full rounded-md py-3 text-tiny bg-white border-blue-400 border border-solid"
            onClick={() => setPhase("login")}
          >
            ورود
          </button>
        </div>
      </div>
    );
  };

  const phases = {
    manage: <UserMangement />,
    signup: <SignUp />,
    login: <Login />,
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-4/5 h-4/5 rounded-xl flex overflow-hidden border border-solid border-gray-200">
        <div className="w-2/5 h-full flex justify-center items-center">
          <div
            className="w-4/5 flex justify-center items-center relative"
            style={{ height: "90%" }}
          >
            <button
              className="absolute left-0 top-0 p-3 bg-gray-200 rounded-xl z-20"
              onClick={() =>
                setPhase(() => (phase === "manage" ? navigate("/") : "manage"))
              }
            >
              <img src={arrowIcon} />
            </button>
            {phases[phase]}
          </div>
        </div>
        <div className="w-3/5 h-full bg-grayF9 flex justify-center items-center">
          <img src={bgImage} alt="" className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);

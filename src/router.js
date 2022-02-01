import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./views/Home";
import Auth from "./views/Auth";
// import VideoTube from "./views/Home/VideoTube";

function Router({ isLogin }) {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={1 ? <Home /> : <Auth page="signup" />} />
        <Route path="/login" exact element={<Auth page="login" />} />
        <Route path="/signup" exact element={<Auth page="signup" />} />
        <Route
          path="*"
          exact
          element={
            <h1>This page is not available</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.user.status,
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);

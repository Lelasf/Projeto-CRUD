/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

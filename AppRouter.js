import React from "react";
import { Linking } from "expo";

import Login from "./src/pages/Login";
import Routes from "./src/routes";

import { useSelector } from "react-redux";

export default function AppRouter() {
  const prefix = Linking.makeUrl("/");

  const { loggedUser } = useSelector(a => a.user);

  return (
    <>
      {loggedUser.username === "" ? <Login /> : <Routes uriPrefix={prefix} />}
    </>
  );
}

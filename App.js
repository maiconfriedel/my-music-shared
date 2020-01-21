import React from "react";
import { Linking } from "expo";
import Routes from "./src/routes";

export default function App() {
  const prefix = Linking.makeUrl("/");

  return <Routes uriPrefix={prefix} />;
}

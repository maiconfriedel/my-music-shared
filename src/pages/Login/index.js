import React from "react";
import { View, Text } from "react-native";

import { useDispatch } from "react-redux";
import { toggleLoggedUser } from "../../store/actions/user.actions";

// import { Container } from './styles';

export default function Login() {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(toggleLoggedUser("maicon.friedel", "maicon.friedel@gmail.com"));
  }, 5000);

  return (
    <View>
      <Text>Login Page</Text>
    </View>
  );
}

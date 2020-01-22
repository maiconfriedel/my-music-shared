import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";

// import { Container } from './styles';

export default function Profile() {
  const [username, setUsername] = useState("maiconfriedel");
  const [email, setEmail] = useState("maicon.friedel@gmail.com");
  const [fullName, setFullName] = useState("Maicon Gabriel Friedel");
  const [bio, setBio] = useState(
    "Love all types of Metal... Meu nome é abacaxi da silva silveira santo pedestre"
  );

  return (
    <>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://avatars2.githubusercontent.com/u/54713276?s=460&v=4"
          }}
          style={styles.avatar}
        />
        <View style={styles.headerUserData}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </View>

      <View style={styles.userdata}>
        <Text style={styles.inputHeader}>Usuário</Text>
        <TextInput
          placeholder="Digite aqui o seu usuário..."
          autoCapitalize="none"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.inputHeader}>Email</Text>
        <TextInput
          placeholder="Digite aqui o seu email..."
          autoCapitalize="none"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.inputHeader}>Nome Completo</Text>
        <TextInput
          placeholder="Digite aqui o seu nome completo..."
          autoCapitalize="words"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.inputHeader}>Bio (100 Caracteres)</Text>
        <TextInput
          placeholder="Digite aqui o seu nome completo..."
          autoCapitalize="words"
          style={styles.inputMultiLine}
          value={bio}
          onChangeText={setBio}
          multiline={true}
          maxLength={100}
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar Dados</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    maxWidth: screenWidth - 130
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginRight: 10
  },
  headerUserData: {
    flexDirection: "column"
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5f47ad"
  },
  bio: {
    fontSize: 14
  },
  userdata: {
    padding: 20,
    flexDirection: "column"
  },
  inputHeader: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#5f47ad"
  },
  input: {
    height: 25,
    borderBottomColor: "#333",
    borderBottomWidth: 0.2,
    marginBottom: 15,
    fontSize: 14
  },
  inputMultiLine: {
    // height: 75,
    borderBottomColor: "#333",
    borderBottomWidth: 0.2,
    marginBottom: 15,
    fontSize: 14
  },
  saveButton: {
    width: "100%",
    backgroundColor: "#5f47ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16
  }
});

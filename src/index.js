import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Keyboard
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Artists from "./components/Artists";

import api from "./services/api";

export default function Main() {
  const [text, setText] = useState("");
  const [artists, setArtists] = useState([]);

  async function handleBandSearch(e) {
    Keyboard.dismiss();
    const response = await api.get(`/search/artist?q=${text}`);

    setArtists(response.data.data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bandSearchContainer}>
        <TextInput
          style={styles.bandSearchInput}
          value={text}
          onChangeText={setText}
          placeholder="Digite o artista a pesquisar..."
          autoCapitalize="words"
        />
        <TouchableOpacity
          title="Pesquisar"
          style={styles.bandSearchButton}
          onPress={handleBandSearch}
        >
          <Text style={{ color: "#fff" }}>
            <FontAwesome name="search" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
      <Artists artists={artists} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10
  },
  bandSearchContainer: {
    flexDirection: "row"
    // top: StatusBar.currentHeight + 10
  },
  bandSearchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 3
  },
  bandSearchButton: {
    width: 50,
    height: 50,
    backgroundColor: "#5f47ad",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5
  }
});

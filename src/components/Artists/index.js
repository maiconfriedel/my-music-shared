import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Alert
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Artists({ artists }) {
  function handleAddArtist(artist) {
    Alert.alert(artist.name, artist.name);
  }

  return (
    <View style={styles.artistList}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={artists}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{ uri: item.picture_big }}
              style={styles.artistImage}
              key={item.id}
            />
            <Text style={styles.artistName}>{item.name}</Text>
            <View style={styles.addArtistButtonContainer}>
              <TouchableOpacity
                style={styles.addArtistButton}
                onPress={() => handleAddArtist(item)}
              >
                <Text style={styles.addArtistButtonText}>
                  <Ionicons size={28} name="ios-add" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  artistList: {
    marginTop: 5,
    marginBottom: 50
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#ededed",
    marginBottom: 2,
    borderRadius: 30
  },
  artistImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  artistName: {
    color: "#000",
    marginLeft: 10,
    fontSize: 15,
    maxWidth: 250
    // fontWeight: "bold"
  },
  addArtistButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1
  },
  addArtistButton: {
    backgroundColor: "#5f47ad",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    margin: 2
  },
  addArtistButtonText: {
    color: "#fff"
  }
});

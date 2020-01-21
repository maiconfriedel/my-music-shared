import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

export default function Map() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.01
        });
      }
    }

    loadInitialPosition();
  }, []);

  return (
    <MapView style={styles.map} initialRegion={currentRegion}>
      {currentRegion && (
        <>
          <Marker
            coordinate={{
              latitude: currentRegion.latitude,
              longitude: currentRegion.longitude
            }}
          >
            <>
              <Image
                source={{
                  uri:
                    "https://avatars2.githubusercontent.com/u/54713276?s=460&v=4"
                }}
                style={styles.avatar}
              />
              <Callout>
                <View style={styles.callout}>
                  <Text>Maicon Gabriel Friedel (Você)</Text>
                  <Text style={styles.artists}>
                    Jinjer, Northlane, Polaris, Suicide Silence
                  </Text>
                </View>
              </Callout>
            </>
          </Marker>

          <Marker
            coordinate={{
              latitude: -26.761481,
              longitude: -49.170147
            }}
          >
            <>
              <Image
                source={{
                  uri:
                    "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
                }}
                style={styles.avatar}
              />
              <Callout>
                <View style={styles.callout}>
                  <Text>Diego Fernandes</Text>
                  <Text style={styles.artists}>
                    Vênus, Pense, John Wayne, Motorhead
                  </Text>
                </View>
              </Callout>
            </>
          </Marker>
        </>
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#333",
    borderWidth: 2
  },
  callout: {
    width: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  artists: {
    color: "#666",
    marginTop: 5
  }
});

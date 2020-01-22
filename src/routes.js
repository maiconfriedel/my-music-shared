import React from "react";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Main from "./pages/Main";
import Musics from "./pages/Musics";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import { TouchableOpacity, Text } from "react-native";

const MainStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: "Procurar Artistas"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerShown: true,
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
            width: 100,
            alignItems: "flex-end"
          }}
        >
          <Text style={{ color: "#fff" }}>
            <MaterialCommunityIcons name="format-list-bulleted" size={26} />
          </Text>
        </TouchableOpacity>
      ),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#5f47ad"
      }
    }
  }
);

// const MusicsStack = createStackNavigator(
//   {
//     Musics
//   },
//   {
//     defaultNavigationOptions: {
//       headerShown: true,
//       headerTintColor: "#fff",
//       headerStyle: {
//         backgroundColor: "#5f47ad"
//       },
//       title: "Minhas Músicas"
//     }
//   }
// );

const MapStack = createStackNavigator(
  {
    Map: {
      screen: Map,
      navigationOptions: {
        title: "Localizar"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#5f47ad"
      }
    }
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Meu Perfil"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#5f47ad"
      }
    }
  }
);

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main: {
        screen: MainStack,
        navigationOptions: {
          tabBarIcon: <MaterialCommunityIcons name="artist" size={26} />,
          tabBarLabel: "Artistas"
        }
      },
      // Musics: {
      //   screen: MusicsStack,
      //   navigationOptions: {
      //     tabBarIcon: <FontAwesome name="music" size={22} />,
      //     tabBarLabel: "Músicas"
      //   }
      // },
      Map: {
        screen: MapStack,
        navigationOptions: {
          tabBarIcon: <FontAwesome name="map-marker" size={24} />,
          tabBarLabel: "Localizar"
        }
      },
      Profile: {
        screen: ProfileStack,
        navigationOptions: {
          tabBarIcon: <MaterialIcons name="person" size={26} />,
          tabBarLabel: "Perfil"
        }
      }
    },
    {
      backBehavior: "history",
      tabBarOptions: {
        activeTintColor: "#5f47ad",
        activeBackgroundColor: "#f6f2ff"
      }
    }
  )
);

export default Routes;

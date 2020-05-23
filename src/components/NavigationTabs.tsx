import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import TodoList from "../screens/TodoList";
import Details from "../screens/Details";
import Colors from "../constans/Colors";

const Tab = createBottomTabNavigator();

const NavigationTabs: FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={{
          tabBarLabel: "TodoList",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;

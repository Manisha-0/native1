import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import HomePage from "../screens/HomePage";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const navigation = useNavigation();
  return (
	<Stack.Navigator>
  	<Stack.Screen
    	name="Home"
    	component={HomePage}
    	options={{ headerShown: false }}
  	/>
	</Stack.Navigator>
  );
};

export default AppStack;

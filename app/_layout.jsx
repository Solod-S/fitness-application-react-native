import { Stack } from "expo-router";
import "../global.css";
import React, { Component } from "react";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="exercises"
          options={{
            presentation: "fullScreenModal",
          }}
        />
        <Stack.Screen
          name="exerciseDetails"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}

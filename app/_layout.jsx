import { Stack } from "expo-router";
import "../global.css";
import React, { Component } from "react";
import { LogBox } from "react-native";

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
}

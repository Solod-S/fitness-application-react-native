import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ImageSlider from "../components/imageSlider";
import BodyParts from "../components/BodyParts";
import TopBar from "../components/TopBar";

export default function home() {
  return (
    <SafeAreaView className="flex-1 flex space-y-5 " edges={["top"]}>
      <StatusBar style="dark" />

      {/* punchilne and avatar */}

      <TopBar />

      {/* image slider */}
      <View>
        <ImageSlider />
      </View>

      {/* body parts list */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}

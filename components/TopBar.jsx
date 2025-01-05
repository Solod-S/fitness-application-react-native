import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { Text, View, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function TopBar() {
  return (
    <View className="flex-row justify-between items-center mx-5">
      <View className="space-y-2">
        <Text
          style={{ fontSize: hp(4.5) }}
          className="font-bold tracking-wider text-neutral-700"
        >
          READY TO
        </Text>
        <Text
          style={{ fontSize: hp(4.5) }}
          className="font-bold tracking-wider text-rose-700"
        >
          WORKOUT
        </Text>
      </View>
      <View className="flex justify-center items-center space-y-2">
        <Image
          style={{ height: hp(6), width: hp(6) }}
          source={require("../assets/images/avatar.png")}
          className="rounded-full"
        />
        <View
          style={{ height: hp(5.5), width: hp(5.5) }}
          className="bg-neutral-200 rounded-full flex justify-center items-center border-[1px] border-neutral-300"
        >
          <Ionicons name="notifications" size={hp(3)} color="gray" />
        </View>
      </View>
    </View>
  );
}

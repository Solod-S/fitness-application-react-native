import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { capitalizeFirstLetter } from "../shared/utils";
import { LinearGradient } from "expo-linear-gradient";

export default function ExerciseList({ data }) {
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ item, router, index }) => {
  return (
    <Animated.View
      style={{
        paddingBottom: 12,
      }}
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()
        .damping(6)}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
        style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
        className="flex py-3 space-y-2 "
      >
        <View className=" bg-white shadow rounded-[25px] mb-2">
          <Image
            source={item.gifUrl}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52), borderRadius: 25 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]}
            style={{
              width: wp(44),
              height: wp(15),
              position: "absolute",
              bottom: 0,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>

        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-100 font-bold tracking-wide absolute bottom-0 left-2 z-10"
        >
          {item?.name?.length > 16
            ? capitalizeFirstLetter(item.name.slice(0, 16)) + "..."
            : capitalizeFirstLetter(item.name)}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

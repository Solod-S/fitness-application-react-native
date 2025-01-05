import React, { useState } from "react";
import { View, Image, ActivityIndicator, LogBox } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

import { sliderImages } from "../constants";

export default function ImageSlider() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <View className="my-4">
      <View style={{ minHeight: hp(20) }} className=" min-h-[100px] relative">
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="#be123c"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        )}
        <Carousel
          width={wp(100)}
          // height={200}
          data={sliderImages}
          autoPlay
          autoPlayInterval={2000}
          scrollAnimationDuration={1000}
          loop
          renderItem={({ item }) => (
            <View className="flex-1 justify-center items-center rounded-[20px] overflow-hidden mx-2">
              <Image
                source={item}
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

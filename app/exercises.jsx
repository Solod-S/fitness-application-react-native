import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { fetchExercisesByBodypart } from "../api/exerciseDB";
import { demoExercises } from "../constants";

export default function Exercises() {
  const [exercises, setExercises] = useState(demoExercises);
  const router = useRouter();
  const item = useLocalSearchParams();

  useEffect(() => {
    if (item) {
      // getExercises(item.name);
    }
  }, []);

  const getExercises = async bodyPart => {
    const data = await fetchExercisesByBodypart(bodyPart);

    setExercises(data);
  };

  return (
    <View className="mt-20">
      <TouchableOpacity onPress={() => router.back()}>
        <Text>go back</Text>
      </TouchableOpacity>
      <Text>Exercises</Text>
    </View>
  );
}

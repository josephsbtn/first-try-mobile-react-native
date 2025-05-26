import { Text, View } from "react-native";
import "nativewind";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-800">
      <Text className="text-3xl font-bold underline text-white">Welcome</Text>
      <Link href="./onboarding" className="text-white">
        OnBoarding
      </Link>
      <Link href="./movie/1" className="text-white">
        Movie
      </Link>
    </View>
  );
}

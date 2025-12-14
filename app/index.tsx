import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/Backgrounds.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 justify-between pt-10 pb-10">
            {/* Illustration Section */}
            <View className="items-center">
              <ImageBackground
                source={require("../assets/images/Ornaments.png")}
                className="w-[360px] h-[420px] items-center justify-center"
                resizeMode="contain"
              >
                <Image
                  source={require("../assets/images/Group 8758.png")}
                  className="w-[360px] h-[280px] mt-[-100px]"
                  resizeMode="contain"
                />
              </ImageBackground>
            </View>

            {/* Title Banner */}
            <View className="w-full mt-[-120px] mb-3">
              <Image
                source={require("../assets/images/Group 8763.png")}
                className="w-full h-auto"
                resizeMode="contain"
              />
            </View>

            {/* Text + CTA */}
            <View className="items-center px-8">
              {/* <Text className="text-center text-white/80 text-lg leading-6">
                Light up your world with songs, albums{"\n"}
                and artists that reflect who you are.
              </Text> */}

              <TouchableOpacity
                onPress={() => router.push("/home")}
                className="bg-[#7A4DF3] w-64 h-16 rounded-2xl items-center justify-center shadow-lg shadow-black/50"
                activeOpacity={0.85}
              >
                <Text className="text-white text-base font-semibold tracking-wide">
                  Continue with e-mail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignIn;

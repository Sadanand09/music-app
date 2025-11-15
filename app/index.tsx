import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { use } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../assets/images/Backgrounds.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 pt-16">
            <View className="mx-auto">
              <ImageBackground
                source={require("../assets/images/Ornaments.png")}
                className="w-[349px] h-[436px] items-center justify-center"
                resizeMode="contain"
              >
                <Image
                  source={require("../assets/images/Group 8758.png")}
                  className="w-[374px] h-[322px] pb-7"
                  resizeMode="contain"
                />
              </ImageBackground>
            </View>

            <Image
              source={require("../assets/images/Group 8763.png")}
              className="w-full h-[186px]"
              resizeMode="contain"
            />
            <View className="w-full flex justify-between mt-4">
              <Text className="text-center text-gray-200 text-lg mb-8 px-8">
                Light up your world with songs, albums{"\n"}
                and artists that reflect who you are.
              </Text>

             
                <TouchableOpacity onPress={() => router.push("/home")} className="bg-purple-600 mx-auto items-center py-4 rounded-xl w-60 h-16 shadow-md shadow-black/40">
                  <Text className="text-center text-white font-semibold text-base">
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

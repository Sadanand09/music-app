import { ImageBackground, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <ScrollView>
          <View className="pt-6">

            {/* Top Row */}
            <View className="flex flex-row items-center justify-between px-8">
              <View>
                <Text className="text-white text-4xl font-semibold">
                  Welcome back!
                </Text>
                <Text className="text-white text-lg mt-1">
                  Hi, John Doe
                </Text>
              </View>

              {/* Icon Column */}
              <View className="flex flex-row items-center">
                <Image
                  source={require("../../../assets/images/Search.png")}
                  className="w-[90px] h-[90px]"
                  resizeMode="contain"
                />

                <Image
                  source={require("../../../assets/images/Notifications.png")}
                  className="w-[90px] h-[90px]"
                  resizeMode="contain"
                />
              </View>
            </View>

            <Image
              source={require("../../../assets/images/Song.png")}
              className="w-full h-[300px] mt-6"
              resizeMode="contain"
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

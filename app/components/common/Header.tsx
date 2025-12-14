import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="w-full flex justify-between">
      {/* Header */}
      <View className="flex flex-row items-center justify-between mt-6 px-2">
        {/* Text Section */}
        <View>
          <Text className="text-3xl text-white font-extrabold">
            Welcome back!
          </Text>
          <Text className="text-white/80 mt-1 font-bold">Hi, John Doe</Text>
        </View>

        {/* Icons */}
        <View className="flex flex-row justify-around ms-3">
          <Image
            source={require("../../../assets/images/Search.png")}
            className="w-24 h-24"
            resizeMode="contain"
          />
          <Image
            source={require("../../../assets/images/Notifications.png")}
            className="w-24 h-24"
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Banner (Edge to Edge) */}
      <View className="w-full my-5">
        <Image
          source={require("../../../assets/images/Song.png")}
          className="w-full h-auto"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Header;

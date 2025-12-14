import React from "react";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import SecondHeader from "@/app/components/common/SecondHeader";

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/images/Backgrounds.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="px-5 pt-4">
          <SecondHeader title="Profile" />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="px-5 pb-32"
        >
          {/* Profile Avatar */}
          <View className="items-center mt-3">
            <Image
              source={require("../../../assets/images/picon.png")}
              className="w-28 h-28 rounded-full"
            />

            <Text className="text-white text-2xl font-bold mt-4">John Doe</Text>
            <Text className="text-white/60 mt-1">Music Lover 🎧</Text>
          </View>

          {/* Stats */}
          <View className="flex-row justify-between mt-8 rounded-2xl p-5">
            <StatItem label="Liked" value="128" />
            <StatItem label="Playlists" value="12" />
            <StatItem label="Downloads" value="34" />
          </View>

          {/* Library Section */}
          <View className="mt-10">
            <Text className="text-white text-lg font-bold mb-4">
              Your Library
            </Text>

            <ProfileRow icon="heart" label="Liked Songs" />
            <ProfileRow icon="download" label="Downloads" />
            <ProfileRow icon="music" label="Playlists" />
          </View>

          {/* Settings Section */}
          <View className="mt-10">
            <Text className="text-white text-lg font-bold mb-4">Settings</Text>

            <ProfileRow icon="user" label="Account" />
            <ProfileRow icon="bell" label="Notifications" />
            <ProfileRow icon="settings" label="Preferences" />
          </View>

          {/* Logout Button */}
          <View className="mt-12 bg-[#9570E1] py-4 rounded-full">
            <Text className="text-center text-white font-bold text-lg">
              Logout
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

/* ---------- UI Components ---------- */

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <View className="items-center">
      <Text className="text-white text-xl font-bold">{value}</Text>
      <Text className="text-white/60 text-sm mt-1">{label}</Text>
      </View>
      
  );
}

function ProfileRow({ icon, label }: { icon: any; label: string }) {
  return (
    <View className="flex-row items-center justify-between p-4 rounded-xl mb-3">
      <View className="flex-row items-center gap-4">
        <Feather name={icon} size={22} color="#9570E1" />
        <Text className="text-white text-base font-medium">{label}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#666" />
    </View>
  );
}

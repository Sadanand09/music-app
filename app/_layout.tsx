import { Stack } from "expo-router";
import { ImageBackground } from "react-native";
import "./globals.css";


export default function RootLayout() {
  return (
    <ImageBackground
      source={require("../assets/images/Backgrounds.png")}
      style={{ flex: 1 }} // required for full-screen background
      resizeMode="cover" // optional but recommended
    >
      <Stack screenOptions={{ headerShown: false }} />
    </ImageBackground>
  );
}

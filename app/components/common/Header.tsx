import { View, Text, Image} from "react-native";
import React from "react";


const Header = () => {
  return (
    <>
      <View className="flex flex-row">
        <View>
          <Text >Welcome back!</Text>
          <Text >Hi, John Doe</Text>
        </View>

        <View className="flex flex-row" >
          <Image
            source={require("../../../assets/images/Search.png")}
            
          />
          <Image
            source={require("../../../assets/images/Notifications.png")}
            
          />
        </View>
      </View>

      {/* Banner */}
      <View >
        <Image
          source={require("../../../assets/images/Song.png")}
          
        />
      </View>
    </>
  );
};

export default Header;

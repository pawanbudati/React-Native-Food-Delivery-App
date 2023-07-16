import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme/theme";
import { useNavigation } from "@react-navigation/core";

export default function RestaurentCard({ item }) {
  const navigation = useNavigation();
  const handleRestaurentSelect = () => {
    navigation.navigate("restaurent", { ...item });
  };
  return (
    <TouchableWithoutFeedback onPress={handleRestaurentSelect}>
      <View
        style={{ shadowColor: themeColors.bgColor(0.5) }}
        className="mr-6 bg-gray-100 border border-white rounded-3xl"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="font-bold text-lg pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              className="h-4 w-4 rounded-t-3xl"
              source={require("../assets/images/fullStar.png")}
            />
            <Text className="text-green-700">{item.stars}</Text>
            <Text className="text-gray-700">
              {`(${item.reviews} reviews)`}
              <Text className="font-semibold">{item.category}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin className="w-5 h-5" stroke={"gray"} />
            <Text className="text-green-700 text-xs">
              Nearby.{item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

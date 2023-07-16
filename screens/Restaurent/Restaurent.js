import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme/theme";
import { StatusBar } from "expo-status-bar";
import DishRow from "../../components/DishRow";

export default function Restaurent() {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72 " source={item.image} />
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className=" bg-white -mt-6 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  className="h-4 w-4 rounded-t-3xl"
                  source={require("../../assets/images/fullStar.png")}
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
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="bg-white pb-36">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* Dishes */}
          {item.dishes.map((dish, index) => {
            return <DishRow key={index} item={dish} />;
          })}
        </View>
        <TouchableOpacity
          className="bg-white rounded-full p-2 shadow top-5 left-1 absolute"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

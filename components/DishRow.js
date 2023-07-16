import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme/theme";
import * as Icons from "react-native-feather";

export default function DishRow({ item }) {
  return (
    <View className="flex-row items-center bg-white border border-gray-200 p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">
            {"\u20A8"}
            {item.price}
          </Text>
          <View className=" flex-row items-center justify-between space-x-5">
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="p-1 rounded-full"
            >
              <Icons.Minus
                stroke={"white"}
                height={20}
                width={20}
                strokeWidth={2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className="p-1 rounded-full"
            >
              <Icons.Plus
                stroke={"white"}
                height={20}
                width={20}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

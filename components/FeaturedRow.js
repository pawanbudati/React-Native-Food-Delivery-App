import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme/theme";
import RestaurentCard from "./RestaurentCard";

export default function FeaturedRow({ title, restaurants, description }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="px-15 overflow-visible py-5 "
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {restaurants.map((restaurent, index) => {
          return <RestaurentCard key={index} item={restaurent} />;
        })}
      </ScrollView>
    </View>
  );
}

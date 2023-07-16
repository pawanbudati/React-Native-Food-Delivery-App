import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme/theme";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";
import { featured } from "../../Constants";

export default function Home() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="content-dark" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center rounded-full border border-gray-300 p-3">
          <Icon.Search height={25} width={25} stroke={"gray"}></Icon.Search>
          <TextInput placeholder="Restaurents" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={25} width={25} stroke={"gray"} />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full "
        >
          <Icon.Sliders height={20} width={20} stroke={"white"} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

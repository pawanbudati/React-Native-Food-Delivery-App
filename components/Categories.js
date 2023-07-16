import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../Constants";

export default function Categories() {
  const [activeCategories, setactiveCategories] = useState([]);

  const handleAddCategory = (category) => {
    let isCategoryAlreadyAdded = activeCategories.find(
      (activeCategory) => category.id === activeCategory.id
    );
    !isCategoryAlreadyAdded &&
      setactiveCategories((addedCategories) => [...addedCategories, category]);
  };
  const handleRemoveCategory = (category) => {
    let filteredCategories = activeCategories.filter(
      (activeCategory) => category.id !== activeCategory.id
    );
    setactiveCategories([...filteredCategories]);
  };

  return (
    <View className="mt-4">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          return (
            <View key={index} className="flex justify-center items-start mr-5">
              <TouchableOpacity
                className="p-1"
                onPress={() => handleAddCategory(category)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  className="rounded-full shadow bg-gray-400"
                  source={category.image}
                  alt={category.name}
                />
                <Text>{category.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {activeCategories && !!activeCategories.length && (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="overflow-hidden rounded-full border border-gray-300 ml-2 mr-2 "
        >
          {activeCategories.map((category, index) => {
            return (
              <View
                key={index}
                className="flex justify-center items-start bg-gray-400 m-2 rounded-full px-1"
              >
                <TouchableOpacity
                  onPress={() => handleRemoveCategory(category)}
                  className="p-1 flex-row space-x-1"
                >
                  <Text className="text-white">{category.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

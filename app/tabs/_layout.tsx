import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function TabsLayout() {
  return (
    <View className="mt-auto bg-white h-full">
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: 'purple' }}>
        <Tabs.Screen
          name="home/index"
          options={{
            title: 'Início',
            tabBarIcon: ({ color }) => (
              <FontAwesome
                name="home"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites/index"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color }) => (
              <FontAwesome
                name="heartbeat"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(stack)"
          options={{
            title: 'Stacks',
            tabBarIcon: ({ color }) => (
              <FontAwesome
                name="pencil-square-o"
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

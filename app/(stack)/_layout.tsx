import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function StackLayout() {
  return (
    <View className="bg-white h-full">
      <Stack
        screenOptions={{
          // headerShown: false
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          name="home/index"
          options={{
            title: 'Início',
          }}
        />
        <Stack.Screen
          name="products/index"
          options={{
            title: 'Produtos',
          }}
        />
        <Stack.Screen
          name="profile/index"
          options={{
            title: 'Perfil',
          }}
        />
        <Stack.Screen
          name="settings/index"
          options={{
            title: 'Configurações',
          }}
        />
      </Stack>
    </View>
  );
}

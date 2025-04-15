import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function StackLayout() {
  return (
    <View className="bg-white h-full">
      <Stack
        screenOptions={{
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
          name="products/[id]/index"
          options={{
            title: 'Detalhes',
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

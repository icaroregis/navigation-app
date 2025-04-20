import { products } from '@/store/product.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id === id);

  if (!product) return <Redirect href="/" />;

  return (
    <View className="h-full px-5 mt-10">
      <Text className="text-2xl font-work-black">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  );
}

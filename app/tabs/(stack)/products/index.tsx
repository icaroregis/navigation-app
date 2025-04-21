import { products } from '@/store/product.store';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

export default function Products() {
  return (
    <View className="h-full px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link
                href={`/tabs/(stack)/products/${item.id}`}
                className="text-primary">
                Ver detalhes
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
}

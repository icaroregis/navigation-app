import CustomButton from '@/app/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import { View } from 'react-native';

export default function Home() {
  return (
    <View className="h-full px-10">
      <CustomButton
        className="mt-4 mb-2"
        color="primary"
        onPress={() => router.push('/tabs/(stack)/products')}>
        Produtos
      </CustomButton>

      <CustomButton
        className="mb-2"
        color="secondary"
        onPress={() => router.push('/tabs/(stack)/profile')}>
        Perfil
      </CustomButton>

      <CustomButton
        className="mb-2"
        color="tertiary"
        onPress={() => router.push('/tabs/(stack)/settings')}>
        Configurações
      </CustomButton>

      <Link
        href="/tabs/(stack)/products"
        asChild>
        <CustomButton
          className="mb-10"
          variant="text-only">
          Produtos
        </CustomButton>
      </Link>
    </View>
  );
}

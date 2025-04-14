const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// ? apontar exatamente para o caminho onde esta o arquivo global.css
module.exports = withNativeWind(config, { input: './app/global.css' });

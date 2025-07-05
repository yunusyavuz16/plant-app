module.exports = {
  name: 'PlantProject',
  slug: 'PlantProject',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.plantproject'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#ffffff'
    },
    package: 'com.plantproject'
  },
  web: {
    favicon: './assets/icon.png'
  },
  extra: {
    API_URL: process.env.API_URL
  },
  plugins: [
    'expo-font'
  ]
};
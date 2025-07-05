# Plant Project - React Native Mobile App

A React Native mobile application built with Expo, TypeScript, and Redux for plant identification and care. This project was developed as part of a technical assessment showcasing modern React Native development practices.

## 🌟 Features

- Onboarding flow with feature showcase
- Premium features paywall
- Home screen with plant categories and questions
- Plant diagnosis camera functionality
- My garden management
- Search functionality
- User profile management

## 🛠 Tech Stack

- React Native with Expo
- TypeScript
- Redux Toolkit for state management
- React Navigation v6
- Jest for testing
- ESLint & Prettier for code quality

## 📁 Project Structure

```
plant-app/
├── src/
│   ├── components/      # Reusable UI components
│   ├── constants/       # App-wide constants and configuration
│   ├── hooks/          # Custom React hooks
│   ├── navigation/     # Navigation configuration
│   ├── screens/        # Screen components
│   ├── services/       # API services
│   ├── store/          # Redux store and slices
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── assets/             # Images, fonts, and other static assets
└── __mocks__/         # Jest mock configurations
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- iOS Simulator (for iOS) or Android Emulator
- Expo CLI

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd plant-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Create a .env file based on .env.example:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Start the development server:
\`\`\`bash
npm start
# or
yarn start
\`\`\`

## 📱 Running the App

- iOS: \`npm run ios\` or \`yarn ios\`
- Android: \`npm run android\` or \`yarn android\`
- Web: \`npm run web\` or \`yarn web\`

## 🧪 Testing

Run tests using Jest:
\`\`\`bash
npm test
# or
yarn test
\`\`\`

Run tests with coverage:
\`\`\`bash
npm test -- --coverage
# or
yarn test --coverage
\`\`\`

## 🔑 Environment Variables

Required environment variables in your .env file:

\`\`\`
API_URL=https://dummy-api-jtg6bessta-ey.a.run.app
\`\`\`

## 📚 API Endpoints

The application uses the following API endpoints:

- Categories: \`${API_URL}/getCategories\`
- Questions: \`${API_URL}/getQuestions\`

## 📋 Development Guidelines

- Use functional components with hooks
- Write unit tests for components and hooks
- Follow the established folder structure
- Use TypeScript for type safety
- Implement proper error handling
- Follow ESLint and Prettier configurations

## 🏗 Build

To create a production build:

\`\`\`bash
expo build:ios
# or
expo build:android
\`\`\`

## 🧪 Testing Strategy

The project includes various types of tests:

- Unit tests for components
- Hook testing
- Redux store testing

## 📝 License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0). This means you are free to:

- Share: copy and redistribute the material in any medium or format
- Adapt: remix, transform, and build upon the material

Under the following terms:
- Attribution: You must give appropriate credit to the author
- NonCommercial: You may not use the material for commercial purposes

See the [LICENSE](LICENSE) file for more details.
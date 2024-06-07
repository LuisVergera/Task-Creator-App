# task-creator
This project was created with (Expo)[https://expo.dev/].

## Installation and setup

> ⚠️ It's recommended to use [Visual Studio Code](https://code.visualstudio.com/) as well as [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extensions for development using this template. It's also recommended to use Node version 18.x.

To install this project, you have to run `npm install` in a terminal to install the required dependencies.

## Environment Variables

To be able to use environment variables, this project makes use of [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv). You will have to create a `.env` file in the project's root and add any required variables you need. You will also have to tell TypeScript which variables did you add by editing 
`config/types/env.d.ts`. This last step is required for react-native-dotenv to work property with TypeScript.

You'll have to create a .env file in the project root, and copy the contents of `.env.dist` to it.

## Running the project

We recommend to open the Android Emulator from Android Studio first.
Then, start running the project:

```
npx expo start # Run Expo Go
npm run android # Run app on an Android device or emulator
npm run ios # Run app on an IOS device or emulator
npm run web # Run app on a browser
```
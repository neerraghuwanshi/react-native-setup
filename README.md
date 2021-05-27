# reactNativeSetup
1. Clone the respository.
2. Run these commands from the main directory:
    -> npm install
    -> npx react-native-rename <newName>
    -> cd ios && pod install && cd ..
    -> watchman watch-del-all
    -> npm cache clean --force (or) npm start --reset-cache
const config = {
    verbose: true,
    "preset": "react-native",
        // 'module:metro-react-native-babel-preset',
        
    transformIgnorePatterns: [
        "/node_modules/(?!(@react-native|react-native)/).*/"
    ],
    // "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
  };
  
  module.exports = config;
  
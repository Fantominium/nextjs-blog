module.exports = {
    globalSetup: require.resolve('./test_setup/global-setup'),
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/test_setup/global-setup\\.js$"],
    setupFilesAfterEnv: ["<rootDir>/test_setup/setupTests.js"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      '^.+\\.+js$': require.resolve('./test_setup/custom-transform')
    }
  };
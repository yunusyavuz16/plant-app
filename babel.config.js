module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@": "./src",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@services": "./src/services",
            "@context": "./src/context",
            "@types": "./src/types",
            "@hooks": "./src/hooks",
            "@assets": "./assets",
          },
        },
      ],
      "@babel/plugin-transform-flow-strip-types",
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};

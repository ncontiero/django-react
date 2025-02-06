import path from "node:path";
import { defineConfig } from "@rspack/cli";
import { type SwcLoaderOptions, rspack } from "@rspack/core";
import BundleTracker from "webpack-bundle-tracker";

// Target browsers, see: https://github.com/browserslist/browserslist
const BROWSER_TARGETS = [
  "chrome >= 55",
  "edge >= 15",
  "firefox >= 54",
  "safari >= 11",
  "ios_saf >= 11",
];

const BASE_PATH = path.resolve(__dirname, "..");

export const commonConfig = defineConfig({
  target: "web",
  context: BASE_PATH,
  entry: path.resolve(BASE_PATH, "src/index.tsx"),
  output: {
    path: path.resolve(BASE_PATH, "static/bundles/"),
    publicPath: "/static/bundles/",
    filename: "js/[name]-[fullhash].js",
    chunkFilename: "js/[name]-[hash].js",
    cssFilename: "css/[name]-[contenthash].css",
    assetModuleFilename: "assets/[name]-[hash][ext]",
    clean: true,
  },
  plugins: [
    new BundleTracker({
      path: BASE_PATH,
      filename: "webpack-stats.json",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: { syntax: "typescript", tsx: true },
                transform: {
                  react: { runtime: "automatic" },
                },
              },
              env: { targets: BROWSER_TARGETS },
            } satisfies SwcLoaderOptions,
          },
        ],
        type: "javascript/auto",
      },
      {
        test: /\.css$/,
        type: "css",
        use: ["postcss-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets: BROWSER_TARGETS },
      }),
    ],
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(BASE_PATH, "src"),
    },
  },
  experiments: {
    css: true,
  },
});

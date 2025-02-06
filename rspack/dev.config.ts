import { merge } from "webpack-merge";
import { commonConfig } from "./common.config";

export default merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    devMiddleware: { writeToDisk: true },
    port: 3000,
    proxy: [
      {
        context: ["/"],
        target: "http://0.0.0.0:8000",
      },
    ],
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
    hot: false,
    liveReload: true,
  },
});

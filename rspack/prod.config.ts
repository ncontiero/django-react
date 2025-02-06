import { merge } from "webpack-merge";
import { commonConfig } from "./common.config";

export default merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  bail: true,
});

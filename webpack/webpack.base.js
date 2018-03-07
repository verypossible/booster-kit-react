import _debug from "debug";

import config from "../config";

import rules from "./rules";
import renderHtml from "./html";
import resolve from "./resolve";
import entry from "./entry";
import plugins from "./plugins";

const paths = config.utils_paths;
const debug = _debug("app:webpack:config");

debug(`Loading webpack configuration for ${config.env}`);
export default {
  context: paths.src(),
  resolve,
  target: "web",
  entry: entry.base,
  output: {
    path: paths.build()
  },
  plugins: plugins.base,
  module: {
    rules
  }
};

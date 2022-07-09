import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
import * as colors from "twind/colors";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      m8u_white: "#fcfcfc",
      m8u_black: "#022028",
      m8u_1: "#e1f7ac",
      m8u_2: "#cfc6f7",
      m8u_3: "#baf7ba",
      m8u_4: "#f794c6",
      m8u_5: "#f7eda1",
    },
  },
};
if (IS_BROWSER) setup(config);

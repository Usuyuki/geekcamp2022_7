import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
import * as colors from "twind/colors";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      musubiberu_1: "#e1f7ac",
      musubiberu_2: "#cfc6f7",
      musubiberu_3: "#baf7ba",
      musubiberu_4: "#f794c6",
      musubiberu_5: "#f7eda1",
    },
  },
};
if (IS_BROWSER) setup(config);

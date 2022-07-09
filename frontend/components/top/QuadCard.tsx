/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface QuadCardType {
  sentence: string;
}

export default function QuadCard({ sentence }: QuadCardType) {
  return (
    <div class={tw("w-1/2 px-2 my-12 ")}>
      <div class={tw("flex justify-center")}>
        <div class="glass-frame">
          <p class={"kaisei-decol text-m8u-black" + tw("text-2xl text-center")}>
            {sentence}
          </p>
        </div>
      </div>
    </div>
  );
}

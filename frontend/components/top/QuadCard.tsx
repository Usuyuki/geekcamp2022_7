/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface QuadCardType {
  target: string;
}

export default function QuadCard({ target }: QuadCardType) {
  return (
    <div class={tw("w-1/2")}>
      <div class={tw("flex justify-center")}>
        <div class="glass-frame">
          <p class={tw("text-xl text-center")}>
            <span class={tw("text-4xl text-m8u_2")}>{target}</span>から
            <br />
            候補を取り寄せます。
          </p>
        </div>
      </div>
    </div>
  );
}

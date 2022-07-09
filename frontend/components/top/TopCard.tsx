/** @jsx h */
import { h, ReactNode } from "preact";
import { tw } from "@twind";

interface QuadCardType {
  children: ReactNode;
}

export default function TopCard({ children }: QuadCardType) {
  return (
    <div class={tw("md:w-1/2 mx-auto")}>
      <div class={tw("flex justify-center")}>
        <div class="glass-frame index-top-glass-frame">{children}</div>
      </div>
    </div>
  );
}

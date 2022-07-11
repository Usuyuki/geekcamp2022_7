/** @jsx h */
import { h, ReactNode } from "preact";
import { tw } from "@twind";

interface AbstCardType {
  children: ReactNode;
}

export default function AbstCard({ children }: AbstCardType) {
  return (
    <div class={tw("flex justify-center items-center ")}>
      <div
        class={tw("border-4 border-m8u_2 m-4 p-4  rounded-2xl border-double")}
      >
        <div class={tw("flex justify-center items-center flex-col")}>
          <p class={tw("text-2xl mb-2")}>簡単に言うと……</p>
          {children}
        </div>
      </div>
    </div>
  );
}

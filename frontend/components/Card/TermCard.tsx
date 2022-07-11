/** @jsx h */
import { h, ReactNode } from "preact";
import { tw } from "@twind";

interface TermCardType {
  title: string;
  children: ReactNode;
}

export default function TermCard({ title, children }: TermCardType) {
  return (
    <div class="desc-card">
      <h2 class={tw("text-2xl mx-2 my-2")}>{title}</h2>
      <div class={tw("ml-8 md:ml-10 mr-2")}>{children}</div>
    </div>
  );
}

/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface CSCardType {
  title: string;
  url: string;
}

export default function CSCard({ title, url }: CSCardType) {
  return (
    <div class="color-shadow-box">
      <a
        href={url}
        class={tw("text-2xl text-center px-2 hover:text-m8u_2 duration-500")}
      >
        {title}
      </a>
    </div>
  );
}

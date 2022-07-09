/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface NormalLinkButtonType {
  title: string;
  url: string;
}

export default function NormalLinkButton({ title, url }: NormalLinkButtonType) {
  return (
    <div class={tw("flex justify-center")}>
      <a href={url} class={tw("text-2xl text-center px-2")}>
        {title}
      </a>
    </div>
  );
}

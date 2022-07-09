/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface NormalLinkButtonType {
  title: string;
  url: string;
}

export default function NormalLinkButton({ title, url }: NormalLinkButtonType) {
  return (
    <div
      class={tw(
        "inline-block flex justify-center border-rounded borer-m8u_3 border-2 rounded-xl p-2"
      )}
    >
      <a
        href={url}
        class={tw("text-2xl text-center px-2 hover:text-m8u_2 duration-500")}
      >
        {title}
      </a>
    </div>
  );
}

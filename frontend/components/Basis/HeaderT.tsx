/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
export default function Header() {
  return (
    <header>
      <a href="/">
        <h2 class={tw("text-2xl my-2 ")}>むすびねる</h2>
      </a>
    </header>
  );
}

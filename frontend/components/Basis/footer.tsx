/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
export default function Footer() {
  return (
    <footer>
      <p class={tw("text-xs mt-2 mb-2")}>copyright 2022 usuyuki</p>
      <div class={tw("flex justify-center  items-center")}>
        <a class={tw("px-2 py-2")} href="/about">
          特徴
        </a>
        <a class={tw("px-2 py-2")} href="/terms">
          利用規約
        </a>
        <a class={tw("px-2 py-2")} href="/">
          トップ
        </a>
        <a class={tw("px-2 py-2")} href="/privacyPolicy">
          プライバシーポリシー
        </a>
        <a class={tw("px-2 py-2")} href="/contact">
          お問い合わせ
        </a>
      </div>
      <a
        href="https://github.com/Usuyuki/musubineru"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
    </footer>
  );
}

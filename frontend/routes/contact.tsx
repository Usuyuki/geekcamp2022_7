/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { tw } from "@twind";

export default function Page() {
  return (
    <div class={tw("h-screen") + "bg-m8u-white"}>
      <Head>
        <title>musubineru</title>
        <link rel="stylesheet" href="/n.css" />

        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/img/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon/icon-192x192.png"
        />
      </Head>
      <div class={tw("flex justify-center items-center flex-row")}>
        <div class="color-shadow-box">
          <a
            href="https://github.com/Usuyuki/musubineru"
            target="_blank"
            rel="noopener"
          >
            <p
              class={
                "kaisei-decol text-m8u-black " + tw("text-2xl text-center")
              }
            >
              ソースコード
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

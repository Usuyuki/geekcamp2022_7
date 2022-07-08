/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw("h-screen")}>
      <Head>
        <title>Usuyuki Blog</title>
        <link rel="stylesheet" href="/n.css" />
      </Head>
      <div
        class={tw(
          "max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col"
        )}
      >
        <div class={tw("absolute")}>
          <div class={tw("relative top-4 left-20")}>
            <div class="glass-frame">
              <p class={"kaisei-decol " + tw("text-2xl text-center mt-20")}>
                サイン
              </p>
            </div>
          </div>
          <div class="glass-frame">
            <p class={"kaisei-decol " + tw("text-2xl text-center mt-20")}>
              コサイン
            </p>
          </div>
          <div class={tw("relative bottom-4 right-20")}>
            <div class="glass-frame">
              <p class={"kaisei-decol " + tw("text-2xl text-center mt-20")}>
                ですわ～
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

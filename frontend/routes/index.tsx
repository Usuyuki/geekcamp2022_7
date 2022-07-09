/** @jsx h */
import { h, PageProps } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
// interface User {
//   login: string;
//   name: string;
//   avatar_url: string;
// }

// export const handler: Handlers<User | null> = {
//   async GET(_, ctx) {
//     const { username } = ctx.params;
//     const resp = await fetch(`https://api.github.com/users/${username}`);
//     if (resp.status === 404) {
//       return ctx.render(null);
//     }
//     const user: User = await resp.json();
//     return ctx.render(user);
//   },
// };

interface Url {
  hitokoto: string;
  message: string;
}

export const handler: Handlers<Url | null> = {
  async GET(_, ctx) {
    const resp = await fetch(Deno.env.get("API_URL"));
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const url: Url = await resp.json();
    return ctx.render(url);
  },
};

export default function Page({ data }: PageProps<Url | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }
  return (
    <div class={tw("h-screen")}>
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
      <div
        class={tw(
          "max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col"
        )}
      >
        <div class={tw("absolute")}>
          <div class={tw("relative top-4 left-20")}>
            <div class="glass-frame">
              <p
                class={
                  "kaisei-decol text-m8u-black" +
                  tw("text-2xl text-center mt-20")
                }
              >
                {data.message}
              </p>
            </div>
          </div>
          <div class="glass-frame">
            <p
              class={
                "kaisei-decol " + tw("text-2xl text-center mt-20 text-gray-400")
              }
            >
              {data.hitokoto}
            </p>
          </div>
          <div class={tw("relative bottom-4 right-20")}>
            <div class="color-shadow-box">
              <p
                class={
                  "kaisei-decol text-m8u-black " +
                  tw("text-2xl text-center mt-20")
                }
              >
                goから叩かれたAPIのテスト
              </p>
            </div>
          </div>
          <div class={"bg-m8u-1 text-m8u-black " + tw("w-20 h-20")}>
            <p>aa</p>
          </div>
          <h2 class="text-m8u-white">あああ</h2>
        </div>
      </div>
    </div>
  );
}

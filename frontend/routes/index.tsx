/** @jsx h */
import { h, PageProps } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";
import Layout from "@/Layout/BasicLayout.tsx";
import ApiError from "@/Error/ApiError.tsx";
import QuadCard from "@/top/QuadCard.tsx";
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
    return (
      <ApiError
        title="APIエラー"
        details="APIとのやりとりにおいてエラーが生じました。"
      />
    );
  }
  return (
    <Layout title="top">
      <div class={tw("flex h-full w-full justify-around flex-wrap")}>
        <div class={tw("w-1/2 px-2 my-12 ")}>
          <div class={tw("flex justify-center")}>
            <div class="glass-frame">
              <p
                class={
                  "kaisei-decol text-m8u-black" + tw("text-2xl text-center")
                }
              >
                {data.message}
              </p>
            </div>
          </div>
        </div>
        <div class={tw("w-1/2 px-2 my-12 ")}>
          <div class={tw("flex justify-center")}>
            <div class="glass-frame">
              <p
                class={
                  "kaisei-decol text-m8u-black" + tw("text-2xl text-center")
                }
              >
                {data.message}
              </p>
            </div>
          </div>
        </div>
        <div class={tw("w-1/2 px-2 my-12 ")}>
          <div class={tw("flex justify-center")}>
            <div class="glass-frame">
              <p
                class={
                  "kaisei-decol text-m8u-black" + tw("text-2xl text-center")
                }
              >
                {data.message}
              </p>
            </div>
          </div>
        </div>
        <div class={tw("w-1/2 px-2 my-12 ")}>
          <div class={tw("flex justify-center")}>
            <div class="glass-frame">
              <p
                class={
                  "kaisei-decol text-m8u-black" + tw("text-2xl text-center")
                }
              >
                {data.message}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class={tw("flex h-full w-full justify-around flex-wrap")}>
        <div class={tw("relative top-4 left-20")}>
          <div class="glass-frame">
            <p
              class={"kaisei-decol text-m8u-black" + tw("text-2xl text-center")}
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
      </div>
      <div class={tw("relative bottom-4 right-20")}>
        <div class="color-shadow-box">
          <p
            class={
              "kaisei-decol text-m8u-black " + tw("text-2xl text-center mt-20")
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
    </Layout>
  );
}

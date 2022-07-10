/** @jsx h */
import { h, PageProps } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";
import Layout from "@🗃/Layout/BasicLayout.tsx";
import ApiError from "@🗃/Error/ApiError.tsx";
import QuadCard from "@🗃/top/QuadCard.tsx";
import TopCard from "@🗃/top/TopCard.tsx";
import NormalLinkButton from "@🗃/Button/NormalLinkButton.tsx";
interface PingType {
  status: string;
}

export const handler: Handlers<PingType | null> = {
  async GET(_, ctx) {
    const resp = await fetch(Deno.env.get("API_URL") + "/ping");
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const url: PingType = await resp.json();
    return ctx.render(url);
  },
};

export default function Page({ data }: PageProps<PingType | null>) {
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
      <div class={tw("flex justify-center flex-col")}>
        <div
          class={
            tw("flex justify-around flex-wrap mx-auto order-2 md:order-1 ") +
            " quad-card-wrapper"
          }
        >
          <QuadCard target="小説" />
          <QuadCard target="和歌" />
          <QuadCard target="同音異義語" />
          <QuadCard target="類語" />
        </div>
        <div class={tw("md:order-2 order-1 ")}>
          <TopCard>
            <p class={tw("text-2xl text-center ")}>
              ムスビネルは
              <br />
              プロダクトの名前を
              <br />
              一緒に考える
              <br />
              サービスです。
              <br />
            </p>
          </TopCard>
        </div>
      </div>
      <div class={tw("flex justify-center mb-20")}>
        <NormalLinkButton title="やってみる" url="/duck" />
      </div>
      <p class={tw("text-center text-xs my-12 mx-2")}>
        API Status:{data.status}
      </p>
    </Layout>
  );
}

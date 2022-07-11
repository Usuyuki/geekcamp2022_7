/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "@🗃/Layout/BasicLayout.tsx";
import { ColorShadowCard } from "@🗃/Card/ColorShadowCard.tsx";

export default function Page() {
  return (
    <Layout title="contact">
      <div class={tw("flex items-center justify-center flex-wrap")}>
        <ColorShadowCard
          title="作者Twitter"
          url="https://twitter.com/usuyuki26"
        />
        <ColorShadowCard title="作者GitHub" url="https://github.com/Usuyuki" />
        <ColorShadowCard
          title="お問い合わせフォーム"
          url="https://twitter.com/usuyuki26"
        />
      </div>
    </Layout>
  );
}

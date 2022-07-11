/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "@🗃/Layout/BasicLayout.tsx";
import CSCard from "@🗃/Card/CSCard.tsx";

export default function Page() {
  return (
    <Layout title="contact">
      <h1 class={tw("text-center mx-2 mt-10 mb-2 text-2xl")}>お問い合わせ</h1>
      <div class={tw("flex items-center justify-center flex-wrap")}>
        <CSCard
          title="お問い合わせフォーム"
          url="https://forms.gle/3LYcZzydWGsgmy1a8"
        />
        <CSCard title="作者Twitter" url="https://twitter.com/usuyuki26" />
        <CSCard title="作者GitHub" url="https://github.com/Usuyuki" />
      </div>
    </Layout>
  );
}

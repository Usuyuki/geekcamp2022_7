/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "@🗃/Layout/BasicLayout.tsx";
import DescCard from "@🗃/Card/DescCard.tsx";

export default function Page() {
  return (
    <Layout title="contact">
      <h1 class={tw("text-center mx-2 mt-10 mb-2 text-2xl")}>
        むすびねるとは？
      </h1>
      <div class={tw("flex items-center justify-center flex-col ")}>
        <DescCard title="開発経緯" icon="science">
          <p>技育CAMPというハッカソンをきっかけに開発しました。</p>
        </DescCard>
        <DescCard title="使用技術" icon="article">
          <ul>
            <li>フロントエンド:Deno, Fresh</li>
            <li>バックエンド:Go, Gin</li>
            <li>自然言語処理:Kagome</li>
          </ul>
        </DescCard>
      </div>
    </Layout>
  );
}

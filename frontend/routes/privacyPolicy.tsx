/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "@🗃/Layout/BasicLayout.tsx";
import TermCard from "@🗃/Card/TermCard.tsx";
import AbstCard from "@🗃/Card/AbstCard.tsx";

export default function Page() {
  return (
    <Layout title="privacyPolicy">
      <div class={tw("flex items-center justify-center")}>
        <img
          style="width:300px"
          src="/img/frame/flowerFrame.png"
          class={tw("mx-auto my-2 mx-2 ")}
        />
      </div>
      <h1
        class={tw("text-center mx-2 mt-10 mb-2 text-2xl")}
        style="margin-top:-30px"
      >
        プライバシーポリシー
      </h1>
      <AbstCard>
        <ul>
          <li>API間もSSL化してるよ</li>
          <li>受け取った情報は保存しないし利用しないよ</li>
          <li>
            出典として提示するデータは著作権が消失しているものだよ(サンフランシスコ平和条約)
          </li>
        </ul>
      </AbstCard>
      <div
        class={
          tw("flex items-center justify-center flex-col") + " term-counter"
        }
      >
        <TermCard title="規約の適用">
          <p>技育CAMPというハッカソンをきっかけに開発しました。</p>
        </TermCard>
        <TermCard title="利用資格">
          <ul>
            <li>フロントエンド:Deno, Fresh</li>
            <li>バックエンド:Go, Gin</li>
            <li>自然言語処理:Kagome</li>
          </ul>
        </TermCard>
      </div>
    </Layout>
  );
}

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
        <ul class={tw("list-disc md:mx-12 mx-4 ")}>
          <li>受け取った情報は保存しないし利用しないよ</li>
        </ul>
      </AbstCard>
      <p class={tw("text-center mx-4 my-2")}>
        むすびねる開発者（以下、「当サービス提供者」といいます。）は、本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）
        <br />
        における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
      </p>
      <div
        class={
          tw("flex items-center justify-center flex-col") + " counter-wrapper"
        }
      >
        <TermCard title="個人情報">
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </TermCard>
        <TermCard title="個人情報の収集方法">
          当サービス提供者は、プロダクト名を一緒に考える際に入力したプロダクトの説明を
          <span class={tw("font-bold")}>収集いたしません。</span>
        </TermCard>
        <TermCard title="個人情報を収集・利用しない目的">
          当サービス提供者が個人情報を収集・利用
          <span class={tw("font-bold")}>しない</span>目的は、以下のとおりです。
          <br />
          <ol class={tw("list-decimal")}>
            <li>
              いただいたご質問の内容を保存しておくことによる、より良い形での還元が見込まれないため。
            </li>
            <li>
              機械学習などの手法を用いているのではなく、形態素解析と文章検索による実装で、データを保持しておく必要がないため。
            </li>
          </ol>
        </TermCard>
        <TermCard title="利用目的の変更">
          <ol class={tw("list-decimal")}>
            <li>
              当サービス提供者は、常識の範囲内で個人情報の利用目的を変更するものとします。
            </li>
            <li>
              利用目的の変更を行った場合には、変更後の目的について、当サービス提供者所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
            </li>
          </ol>
        </TermCard>
        <TermCard title="個人情報の第三者提供">
          <ol class={tw("list-decimal")}>
            <li>
              当サービスでは、第三者に提供できる個人情報を保持しておりません。
            </li>
          </ol>
        </TermCard>
        <TermCard title="個人情報の開示">
          <ol class={tw("list-decimal")}>
            <li>
              当サービス提供者は、本人から個人情報の開示を求められたときは、本人に対し、開示できる個人情報を保持しておりません。
            </li>
          </ol>
        </TermCard>
        <TermCard title="プライバシーポリシーの変更">
          <ol class={tw("list-decimal")}>
            <li>
              本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
            </li>
            <li>
              当サービス提供者が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </li>
          </ol>
        </TermCard>
        <TermCard title="お問い合わせ窓口">
          本ポリシーに関するお問い合わせは、むすびねるお問合せフォームよりお願いたします。
          <br />
          <a
            target="_blank"
            class="inline-block"
            href="https://forms.gle/3LYcZzydWGsgmy1a8"
          >
            https://forms.gle/3LYcZzydWGsgmy1a8
          </a>
        </TermCard>
        <p class={tw("text-center my-12")}>制定: 2022年7月11日</p>
      </div>
    </Layout>
  );
}

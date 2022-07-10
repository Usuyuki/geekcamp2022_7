/** @jsx h */
import { h, PageProps } from "preact";
import { tw } from "@twind";
import Layout from "@🗃/Layout/BasicLayout.tsx";
import SubmitButton from "@🗃/Form/SubmitButton.tsx";
import QuestionTextArea from "@🗃/Form/QuestionTextArea.tsx";
import { Handlers } from "$fresh/server.ts";
import ApiError from "@🗃/Error/ApiError.tsx";
import { validate } from "@⚙/validate/questionValidate.ts";
import { type ResultType } from "@凹/thinkReturnType.ts";
import ThinkResult from "@🗃/Result/ThinkResult.tsx";
export interface Data {
  /** バリデーションエラー情報 */
  error: {
    what: string;
    why: string;
    how: string;
  };
  what?: string;
  why?: string;
  how?: string;
}

export const handler: Handlers<Data> = {
  async POST(req, ctx) {
    // フォームデータの入力値を取得
    const formData = await req.formData();
    const what = formData.get("what")?.toString();
    const why = formData.get("why")?.toString();
    const how = formData.get("how")?.toString();

    const whatValidate = validate(what);
    const whyValidate = validate(why);
    const howValidate = validate(how);
    //1つでもたりてなかったら弾く
    if (
      !(
        whatValidate == "ご入力ありがとうございます" &&
        whyValidate == "ご入力ありがとうございます" &&
        howValidate == "ご入力ありがとうございます"
      )
    ) {
      return ctx.render({
        error: {
          what: whatValidate,
          why: whyValidate,
          how: howValidate,
        },
        what,
        why,
        how,
      });
    }

    const question = {
      what: what,
      why: why,
      how: how,
    };

    // データベースに保存
    const resp = await fetch(Deno.env.get("API_URL") + "/think", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });

    if (resp.status === 404) {
      return ctx.render(null);
    }

    const result: ResultType = await resp.json();
    return ctx.render(result);
  },
};

export default function Page({
  data,
}: PageProps<Data | ResultType | null | undefined>) {
  if (typeof data == null) {
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
        <img
          class={tw("animate-pulse object-contain w-12 h-12 rotate-12 mx-auto")}
          src="/img/icon/duck.svg"
        />
        <p class={tw("text-center")}>
          ラバーダック・デバッグメソッドを採用しています。
        </p>
      </div>
      <form class={tw("rounded-xl p-5  mt-8")} method="POST">
        <div class={tw("flex flex-col ")}>
          <QuestionTextArea
            title="どんなプロジェクトを作ろうと思ってますの？"
            name="what"
            value={data?.what}
            error={data?.error?.what}
          />
          <QuestionTextArea
            title="プロダクトを作ろうと思っている理由を教えてくださいまし"
            name="why"
            value={data?.why}
            error={data?.error?.why}
          />
          <QuestionTextArea
            title="どうやってプロダクトを作ろうと思ってますの？"
            name="how"
            value={data?.how}
            error={data?.error?.how}
          />
        </div>
        <div class={tw("flex justify-center mt-8")}>
          <SubmitButton title="名前の検討をする" />
        </div>
      </form>
      {data?.result ? <ThinkResult data={data} /> : ""}
    </Layout>
  );
}

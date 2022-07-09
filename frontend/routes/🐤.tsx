/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "@🗃/Layout/BasicLayout.tsx";
import SubmitButton from "@🗃/Form/SubmitButton.tsx";
import QuestionTextAreaType from "@🗃/Form/QuestionTextArea.tsx";

export default function Page() {
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
          <QuestionTextAreaType
            title="どんなプロジェクトを作ろうと思ってますの？"
            name="what"
          />
          <QuestionTextAreaType
            title="プロダクトを作ろうと思っている理由を教えてくださいまし"
            name="why"
          />
          <QuestionTextAreaType
            title="どうやってプロダクトを作ろうと思ってますの？"
            name="how"
          />
        </div>
        <div class={tw("flex justify-center mt-8")}>
          <SubmitButton title="名前の検討をする" />
        </div>
      </form>
    </Layout>
  );
}

// export const handler: Handlers = {
//   GET(req, ctx) {
//     const { socket, response } = Deno.upgradeWebSocket(req);
//     if (!socket) throw new Error("unreachable");

//     const uuid = ctx.params["uuid"];
//     if (typeof BroadcastChannel === "undefined") {
//       socket.onmessage = (ev) => {
//         socket.send(ev.data);
//       };
//       return response;
//     }
//     const channel = new BroadcastChannel(uuid);
//     channel.onmessage = (ev) => {
//       socket.send(ev.data);
//     };
//     socket.onmessage = (ev) => {
//       channel.postMessage(ev.data);
//     };
//     socket.onclose = () => {
//       channel.close();
//     };
//     return response;
//   },
// };

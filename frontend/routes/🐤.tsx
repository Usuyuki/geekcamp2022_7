/** @jsx h */
import { h, PageProps } from "preact";
import { tw } from "@twind";
import Layout from "@🗃/Layout/BasicLayout.tsx";
import ApiError from "@🗃/Error/ApiError.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Data {
  results: string[];
  query: string;
}
const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];
export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;

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
      <form>
        <input tvalue={query} class={tw("text-m8u_black")} />
        <div class="mb-6">
          <label
            for="q"
            class={tw(
              "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            )}
          >
            入力
          </label>
          <input
            type="text"
            name="q"
            class={tw(
              "text-m8u_black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            )}
            required
          />
        </div>
        {/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea> */}
        <button
          type="submit"
          class="text-white bg-m8u_3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          名前を考える
        </button>
      </form>

      <ul>
        {results.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
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

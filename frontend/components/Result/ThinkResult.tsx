/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ResultType } from "@凹/thinkResponseType.ts";
export default function ThinkResult(data: ResultType) {
  const dataR = data.data;
  return (
    <div>
      <h2 class={tw("text-3xl text-m8u_4 text-center mx-2 mb-4 mt-20")}>
        候補ですわ
      </h2>
      <div class={tw("border border-m8u_2 rounded-2xl m-4 p-2")}>
        <ul>
          {dataR.novel
            ? dataR.novel.map((novel, key) => (
                <li key={key}>
                  {/* <p>
                    <span class="material-icons">extension</span>元の単語:
                    {novel.OriginWord}
                  </p> */}
                  <p>
                    <span class="material-icons">account_circle</span>作者:
                    {novel.Author}
                  </p>
                  <p>
                    <span class="material-icons">book</span>タイトル:
                    {novel.Title}
                  </p>
                  <p>
                    <span class="material-icons">menu_book</span>該当文:
                    {novel.Content}
                  </p>
                  <p>
                    <span class="material-icons">star_border</span>理由:
                    {novel.Reason}
                  </p>
                </li>
              ))
            : ""}
        </ul>
        <ul>
          {dataR.waka
            ? dataR.waka.map((waka, key) => (
                <li key={key}>
                  <p>
                    <span class="material-icons">extension</span>元の単語:
                    {waka.originWord}
                  </p>
                  <p>
                    <span class="material-icons">account_circle</span>作者:
                    {waka.author}
                  </p>
                  <p>和歌:{waka.content}</p>
                  <p>理由:{waka.reason}</p>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}

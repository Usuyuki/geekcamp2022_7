/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ResultType } from "@凹/thinkResponseType.ts";
export default function ThinkResult(data: ResultType) {
  return (
    <div class={tw("border border-m8u_2 rounded-2xl m-4 p-2")}>
      <ul>
        {data.novel
          ? data.novel.map((novel, key) => (
              <li key={key}>
                <p>
                  <span class="material-icons">extension</span>元の単語:
                  {novel.originWord}
                </p>
                <p>
                  <span class="material-icons">account_circle</span>作者:
                  {novel.author}
                </p>
                <p>タイトル:{novel.title}</p>
                <p>該当文:{novel.content}</p>
                <p>理由:{novel.reason}</p>
              </li>
            ))
          : ""}
      </ul>
      <ul>
        {data.waka
          ? data.waka.map((waka, key) => (
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
  );
}

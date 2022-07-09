/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface ErrorType {
  title: string;
  details: string;
}

export default function ApiError({ title, details }: ErrorType) {
  return (
    <div class={tw("flex justify-center items-center") + " basis-height"}>
      <div class={tw("border-m8u_2 border-2 rounded-2xl  m-4 p-12")}>
        <h1 class={tw("text-center text-2xl my-2")}>{title}</h1>
        <p class={tw("text-center text-xl my-2")}>{details}</p>
      </div>
    </div>
  );
}

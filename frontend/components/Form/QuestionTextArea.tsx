/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface QuestionTextAreaType {
  title: string;
  name: string;
}

export default function QuestionTextArea({
  title,
  name,
}: QuestionTextAreaType) {
  return (
    <div class={tw("mt-4")}>
      <label class={tw("text-xl")} htmlFor={name + "Form"}>
        {title}
      </label>
      <textarea
        id={name + "Form"}
        rows={5}
        class={tw("w-full p-2 rounded-md bg-m8u_white text-m8u_black")}
        name={name}
      />
    </div>
  );
}

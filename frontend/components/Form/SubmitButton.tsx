/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface SubmitButtonType {
  title: string;
}

export default function SubmitButton({ title }: SubmitButtonType) {
  return (
    <button
      class={tw(
        "inline-block flex justify-center border-rounded borer-m8u_3 border-2 rounded-xl p-2 text-xl text-center hover:text-m8u_2 duration-500"
      )}
      type="submit"
    >
      {title}
    </button>
  );
}

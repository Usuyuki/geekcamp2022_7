/** @jsx h */
import { h, PageProps } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";

interface HeadMeta {
  title: string;
}
export default function Head({ data }: PageProps<HeadMeta>) {
  return (
    <Head>
      <title>{data.title} | musubineru</title>
      <link rel="stylesheet" href="/n.css" />

      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/img/favicon/apple-touch-icon-180x180.png"
      />
      <link rel="icon" type="image/png" href="/img/favicon/icon-192x192.png" />
    </Head>
  );
}

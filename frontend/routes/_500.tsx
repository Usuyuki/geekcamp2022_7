/** @jsx h */
import { h } from "preact";
import { ErrorPageProps } from "$fresh/server.ts";
import Layout from "@/Layout/ErrorLayout.tsx";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <Layout
      statusCode={500}
      title={"500 internal error"}
      details={(error as Error).message}
    />
  );
}

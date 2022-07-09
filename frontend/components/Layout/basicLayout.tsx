/** @jsx h */
import { h, ReactNode } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import Footer from "@/Basis/footer.tsx";
import Header from "@/Basis/header.tsx";
import { tw } from "@twind";
interface LayoutProps {
  title: string;
  children: ReactNode;
}
export default function Layout({ title, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title} | musubineru</title>
        <link rel="stylesheet" href="/m8u.css" />

        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/img/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon/icon-192x192.png"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

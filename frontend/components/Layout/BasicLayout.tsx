/** @jsx h */
import { h, ReactNode } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import Footer from "@/Basis/Footer.tsx";
import Header from "@/Basis/Header.tsx";
import { tw } from "@twind";
interface LayoutProps {
  title: string;
  children: ReactNode;
}
export default function Layout({ title, children }: LayoutProps) {
  return (
    <html lang="ja">
      <Head>
        <title>{title} | musubineru</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* CSS読み込み */}
        <link rel="stylesheet" href="/m8u.css" />
        {/* favicon */}
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

        {/* OGP関係 */}
        <meta property="og:title" content="むすびねる" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://musubineru.usuyuki.net/" />
        <meta
          property="og:image"
          content="https://musubineru.usuyuki.net/img/ogp/ogp.jpg"
        />
        <meta property="og:site_name" content="むすびねる" />
        <meta
          property="og:description"
          content="むすびねるは、プロダクトの名前決めをお手伝いするサービスです。"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </html>
  );
}

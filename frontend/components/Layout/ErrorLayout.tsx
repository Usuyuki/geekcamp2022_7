/** @jsx h */
import { h } from "preact";
import Layout from "@/Layout/BasicLayout.tsx";
import ApiError from "@/Error/ApiError.tsx";
interface ErrorMessages {
  statusCode: number;
  title: string;
  details: string;
}

export default function ErrorLayout({
  statusCode,
  title,
  details,
}: ErrorMessages) {
  return (
    <Layout title={statusCode}>
      <ApiError title={title} details={details} />
    </Layout>
  );
}

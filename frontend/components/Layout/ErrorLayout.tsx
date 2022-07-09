/** @jsx h */
import { h } from "preact";
import Layout from "@/Layout/basicLayout.tsx";
import ApiError from "@/Error/apiError.tsx";
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

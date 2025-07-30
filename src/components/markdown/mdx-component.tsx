import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { JSX } from "react";
import remarkGfm from "remark-gfm";


export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return <MDXRemote {...props} components={{ ...(props.components || {}) }} options={{
    mdxOptions: {
      remarkPlugins: [remarkGfm, ...(props.options?.mdxOptions?.remarkPlugins ?? [])],
      ...props.options?.mdxOptions,
    },
  }} />;
}

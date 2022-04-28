import React from "react";
import Head from "next/head";

export interface MetaState {
  title: string;
  desc: string;
  image?: string;
  type?: string;
}

export interface MetaProps {
  children: React.ReactNode;
  [overrides: string]: any;
}

const LayoutWrapper = ({ children, ...overrides }: MetaProps) => {
  const meta: MetaState = {
    title: "Mdote",
    desc: "Markdown Note Taking Application",
    image: "",
    type: "website",
    ...overrides,
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="keywords" content={meta.desc} />
        <meta name="description" content={meta.desc} />
        <meta content={meta.desc} name="description" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* 
          <meta property="og:url" content={`https://quelchx${router.asPath}`} />
          <link rel="canonical" href={`https://quelchx.com${router.asPath}`} />
          <meta property="og:site_name" content="quelchx.com" />
          <meta name="twitter:site" content="@wcbblez" /> 
        */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.desc} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      {children}
    </>
  );
};

export default LayoutWrapper;

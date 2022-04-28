import React from "react";
import { GetStaticProps, NextPage } from "next";

import fs from "fs";
import path from "path";

import { DocumentsHeading, LayoutWrapper } from "../../components";
import Converter from "../../components/Converter/Converter";
import { Box, chakra } from "@chakra-ui/react";

export const getStaticProps: GetStaticProps = () => {
  const document = fs.readFileSync(
    path.join("documents", "readme.md"),
    "utf-8"
  );
  return {
    props: {
      document,
    },
  };
};

const DocumentsPage: NextPage = ({ document }: { document: string }) => {
  console.log(document);
  return (
    <LayoutWrapper title="Mdote Documents">
      <chakra.div
        display="flex"
        justifyContent={"center"}
        m={12}
      >
        <Converter markdown={document} />
      </chakra.div>
    </LayoutWrapper>
  );
};

export default DocumentsPage;

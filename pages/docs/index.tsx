import React from "react";
import { GetStaticProps, NextPage } from "next";

import fs from "fs";
import path from "path";

import { chakra } from "@chakra-ui/react";
import { AnimateSection, Converter, LayoutWrapper } from "../../components";

const DocumentsPage: NextPage = ({ document }: { document: string }) => {
  return (
    <LayoutWrapper title="Mdote Documents">
      <chakra.div display="flex" justifyContent={"center"} m={12}>
        <AnimateSection animation="fade-down" delay={200} duration={500}>
          <Converter markdown={document} />
        </AnimateSection>
      </chakra.div>
    </LayoutWrapper>
  );
};

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

export default DocumentsPage;

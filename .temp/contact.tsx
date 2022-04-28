import React from "react";
import { NextPage } from "next";
import { ContactForm, LayoutWrapper } from "../components";
import { meta } from "../constants";
import { Box } from "@chakra-ui/react";

const ContactPage: NextPage = () => {
  const { title, desc } = meta.contact;

  return (
    <LayoutWrapper title={title} desc={desc}>
      <Box display='grid' placeItems='center' height='80vh' >
      <ContactForm />
      </Box>
    </LayoutWrapper>
  );
};

export default ContactPage;

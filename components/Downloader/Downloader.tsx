import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Progress,
  SimpleGrid,
  chakra,
} from "@chakra-ui/react";
import DownloadItem from "./DownloadItem";

const Downloader = ({ files = [], remove }) => {
  return (
    <chakra.div
      color="green.800"
      bg="white"
      fontWeight="bold"
      className="downloader"
    >
      <chakra.div className="card">
        <chakra.div className="card-header">File Downloader</chakra.div>
        <chakra.ul
          display="flex"
          justifyContent="center"
          className="card-group"
        >
          {files.map((file, idx) => (
            <DownloadItem
              key={idx}
              removeFile={() => remove(file.downloadId)}
              {...file}
            />
          ))}
        </chakra.ul>
      </chakra.div>
    </chakra.div>
  );
};

export default Downloader;

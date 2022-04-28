import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Progress, SimpleGrid } from "@chakra-ui/react";
import Axios from "axios";

const DownloadItem = ({ name, file, filename, removeFile }) => {
  const [downloadInfo, setDownloadInfo] = useState({
    progress: 0,
    completed: false,
    total: 0,
    loaded: 0,
  });

  useEffect(() => {
    const options = {
      onDownloadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;

        setDownloadInfo({
          progress: Math.floor((loaded * 100) / total),
          loaded,
          total,
          completed: false,
        });
      },
    };

    Axios.get("/", {
      responseType: "blob",
      ...options,
    }).then(() => {
      const url = window.URL.createObjectURL(
        new Blob([file], {
          type: "text/html",
        })
      );

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();

      setDownloadInfo((info) => ({
        ...info,
        completed: true,
      }));

      setTimeout(() => {
        removeFile();
      }, 4000);
    });
  }, []);

  const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <>
      <Flex justifyContent="center" w="auto">
        <SimpleGrid columns={2} gap={10}>
          <Box display="inline-block">
            <Text ml={2} fontWeight="extrabold" isTruncated>
              {name}
            </Text>
            <Box ml={2}>
              <Box as="small">
                {downloadInfo.loaded > 0 && (
                  <>
                    <Text color={"green.500"}>
                      {formatBytes(downloadInfo.loaded)}
                    </Text>
                    / {formatBytes(downloadInfo.total)}
                  </>
                )}

                {downloadInfo.loaded === 0 && <>Initializing...</>}
              </Box>
            </Box>
            <Box display="inline-block" ml={2}>
              {downloadInfo.completed && (
                <Box as="span" color="green.600">
                  Completed 🎉
                </Box>
              )}
            </Box>
          </Box>
          <Box display="inline" sx={{ minWidth: "175px" }}>
            <Box as="label" htmlFor="progress">
              {downloadInfo.progress !== Infinity ? (
                <>{downloadInfo.progress}%</>
              ) : (
                <>100%</>
              )}
            </Box>
            <Progress
              hasStripe
              colorScheme="green"
              size="lg"
              value={downloadInfo.progress}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default DownloadItem;

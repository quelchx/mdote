import React, { useState } from "react";

import {
  Heading,
  Input,
  Stack,
  Textarea,
  Button,
  chakra,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

import useFileDownloader from "../../hooks/useFileDownloader";
import Converter from "../Converter/Converter";
interface NoteInterface {
  title: string;
  body: string;
}

const initialNote: NoteInterface = { title: "", body: "" };

const EditorInput = () => {
  const [note, setNote] = useState(initialNote);
  const [downloadFile, downloaderComponentUI]: any = useFileDownloader();

  const download = (file) => downloadFile(file);
  const processDownload = () => {
    let file = {
      name: note.title,
      file: note.body,
      filename: `${note.title}.md`,
    };
    return download(file);
  };

  const handleTabKeyPress = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  return (
    <SimpleGrid gap={6} columns={[1, 2]}>
      <Stack spacing={3}>
        <Input
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          placeholder="Note Title"
        />
        <chakra.div height="75vh">
          <Textarea
            onKeyDown={handleTabKeyPress}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            height={"100%"}
            placeholder="Start Writing"
          />
        </chakra.div>
      </Stack>
      <chakra.div sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Heading as="h4" size="md">
          {note.title}
        </Heading>
        <Converter markdown={note.body} />
        <Flex flex={1}></Flex>
        {note.body !== "" && note.title !== "" && (
          <Stack direction="row" spacing={2}>
            <Button
              _hover={{ color: "white", bg: "green.900" }}
              bg="green.500"
              color={"gray.100"}
              as={"a"}
              onClick={processDownload}
            >
              Download
            </Button>
          </Stack>
        )}
      </chakra.div>
      {downloaderComponentUI}
    </SimpleGrid>
  );
};

export default EditorInput;

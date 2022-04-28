import { chakra } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

const Converter = ({ markdown }: { markdown: string }) => {
  return (
    <chakra.div minWidth={'300px'} className="md">
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        children={markdown}
        remarkPlugins={[remarkGfm]}
      />
    </chakra.div>
  );
};

export default Converter;

import { NextPage } from "next";
import { EditorContainer, EditorInputArea } from "../../components";
import MetaContainer from "../../components/Layout/MetaContainer";

const MdotePage: NextPage = () => {
  return (
    <MetaContainer>
      <EditorContainer>
        <EditorInputArea />
      </EditorContainer>
    </MetaContainer>
  );
};
export default MdotePage;

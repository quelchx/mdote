import { chakra } from "@chakra-ui/react";
import React from "react";
import { faq } from "../../constants";

interface FilteredQuestionsProps {
  method: "even" | "odd";
}

const FilteredQuestions = ({ method }: FilteredQuestionsProps) => {
  let mod;
  if (method === "even") mod = 1;
  else mod = 0;

  return (
    <>
      {faq
        .filter((el, idx) => {
          return idx % 2 === mod;
        })
        .map((el) => {
          return (
            <>
              <chakra.h5 mt={10} mb={3} fontWeight="semibold">
                {el.ques}
              </chakra.h5>
              <chakra.p fontWeight={500}>{el.ans}</chakra.p>
            </>
          );
        })}
    </>
  );
};

export default FilteredQuestions;

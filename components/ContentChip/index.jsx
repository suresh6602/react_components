/* eslint-disable react/prop-types */
import { Chip, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SmallPrimaryText } from "../../elements/textStyles";
import { StyledChip } from "../chip";
import { fetchWords } from "../../feature/assignment/postassignment.api";

const Content = ({ content, type, selectedItems, onClick, handleMore }) => {
  return (
    <Grid
      flex={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <SmallPrimaryText>{type} :</SmallPrimaryText>
      <Grid
        maxHeight={"50vh"}
        overflow={"scroll"}
        padding={2}
        item
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        gap={1}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {content?.map((word, index) => (
          <StyledChip
            key={index}
            label={word}
            filled={selectedItems?.includes(word) ? true : false}
            onClick={() => onClick(index, word)}
          />
        ))}
        {handleMore && (
          <Chip
            label={"more..."}
            color="primary"
            sx={{ paddingX: 2, paddingY: 0 }}
            variant="outlined"
            onClick={handleMore}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Content;

export const Editcontent = ({
  difficulty,
  values,
  setCohortDetails,
  contentType,
  cohortDetails,
}) => {
  const [contents, setContents] = useState(values);

  const fetchData = async () => {
    const response = await fetchWords(cohortDetails, difficulty);
    setContents((prevState) => [...prevState, ...response]);
  };

  const handleSelect = (index, word) => {
    const isWordInValues = values?.includes(word);

    // If word exists, filter it out; otherwise, add it
    const updatedValues = isWordInValues
      ? values?.filter((item) => item !== word) // Remove word if it exists
      : [...values, word]; // Add word if it doesn't exist

    setCohortDetails({
      ...cohortDetails,
      [contentType]: {
        ...(cohortDetails[contentType] || {}), // Spread the existing contentType object (if any)
        [difficulty]: updatedValues, // Update or append the difficulty property
      },
    });
  };

  const mergedArray = [...(values || []), ...contents];
  const uniqueArr = [...new Set(mergedArray)];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Content
        content={uniqueArr ? uniqueArr : []}
        type={difficulty}
        selectedItems={values ? values : []}
        handleMore={() => {
          fetchData();
        }}
        onClick={(index, word) => handleSelect(index, word)}
      />
    </>
  );
};

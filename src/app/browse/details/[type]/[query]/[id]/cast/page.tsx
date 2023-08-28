"use client";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const CastPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <Box>
      <Text>Hello this is the cast page</Text>
    </Box>
  );
};

export default CastPage;

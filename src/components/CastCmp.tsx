import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { MovieCast } from "../../typings";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";
import { useRouter, useParams } from "next/navigation";

interface Props {
  castResult: MovieCast[];
}

const CastCmp = ({ castResult }: Props) => {
  const slicedCast = castResult.slice(0, 6);
  const router = useRouter();
  const params = useParams();
  const { id, type, query } = params;

  const handleClick = () => {
    router.push(`/details/${type}/${query}/${id}/cast`);
  };

  return (
    <Box w="85%">
      <Flex
        display={"flex"}
        flexDir={"row"}
        flexWrap={"wrap"}
        mt={7}
        justifyContent={"space-between"}
        alignItems="center"
      >
        {slicedCast &&
          castResult?.map((cast, idx) => (
            <Box
              key={idx}
              maxW={"28%"}
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
              mb={4}
            >
              {cast.profile_path ? (
                <Image
                  src={`${baseUrl}${cast.profile_path}`}
                  alt="cast-picture"
                  width={200}
                  height={200}
                  style={{
                    borderTopLeftRadius: "5.2px",
                    borderTopRightRadius: "5.2px",
                  }}
                />
              ) : (
                <Box
                  width={200}
                  height={200}
                  bg="gray.200"
                  style={{
                    borderTopLeftRadius: "5.2px",
                    borderTopRightRadius: "5.2px",
                  }}
                  bgColor={"gray.900"}
                >
                  NO IMAGE
                </Box>
              )}
              <Box p={2} w={200}>
                <Text>{cast.name}</Text>
                <Text>{cast.character}</Text>
              </Box>
            </Box>
          ))}
      </Flex>
      <Box>
        <Button colorScheme="red" variant="outline" onClick={handleClick}>
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default CastCmp;

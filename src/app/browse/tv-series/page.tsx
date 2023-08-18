"use client";
import { Container, Box, Text } from "@chakra-ui/react";
import { SeriesDetails } from "../../../../typings";
import SearchCmp from "@/components/SearchCmp";
import useSWR from "swr";
import * as fetchers from "../../../utils/fetchData";
import MovieRow, { SeriesRow } from "@/components/MovieRow";
import FooterCmp from "@/components/FooterCmp";

interface Props {
  trendingSeries: SeriesDetails[];
  popularSeries: SeriesDetails[];
  docSeries: SeriesDetails[];
  actionSeries: SeriesDetails[];
  realitySeries: SeriesDetails[];
  kidsSeries: SeriesDetails[];
  familySeries: SeriesDetails[];
  mysterySeries: SeriesDetails[];
}

const SeriesPage: React.FC<Props> = () => {
  const { data: trendingSeries } = useSWR(
    "trendingSeries",
    fetchers.fetchTrendingSeries
  );
  const { data: popularSeries } = useSWR(
    "popularSeries",
    fetchers.fetchPopularSeries
  );
  const { data: docSeries } = useSWR("docSeries", fetchers.fetchDocSeries);
  const { data: actionSeries } = useSWR(
    "actionSeries",
    fetchers.fetchActionSeries
  );
  const { data: realitySeries } = useSWR(
    "realitySeries",
    fetchers.fetchRealitySeries
  );
  const { data: kidsSeries } = useSWR("kidsSeries", fetchers.fetchKidSeries);
  const { data: familySeries } = useSWR(
    "familySeries",
    fetchers.fetchFamilySeries
  );
  const { data: mysterySeries } = useSWR(
    "mysterySeries",
    fetchers.fetchMysterySeries
  );

  return (
    <Container bg={"#212121"} maxW={""} centerContent>
      <SearchCmp />
      {/* main */}
      <Box mt={7}>
        {/* trending */}
        <Box>
          <Text fontSize={"xl"} fontWeight={600} color={"#fff"}>
            Trending Shows
          </Text>
          <SeriesRow series={trendingSeries || []} />
        </Box>
        {/* popular */}
        <Box mt={14}>
          <Text fontSize={"xl"} fontWeight={600} color={"#fff"}>
            Popular Shows
          </Text>
          <SeriesRow series={popularSeries || []} />
        </Box>
        {/* documentary */}
        <Box mt={14}>
          <Text fontSize={"xl"} fontWeight={600} color={"#fff"}>
            Documentary
          </Text>
          <SeriesRow series={docSeries || []} />
        </Box>
        {/* action */}
        <Box mt={14}>
          <Text fontSize={"xl"} fontWeight={600} color={"#fff"}>
            Action Shows
          </Text>
          <SeriesRow series={actionSeries || []} />
        </Box>
        {/* reality */}
        <Box mt={14}>
          <Text fontSize={"xl"} fontWeight={600} color={"#fff"}>
            Reality Shows
          </Text>
          <SeriesRow series={realitySeries || []} />
        </Box>
        {/* kids Series */}
        <Box mt={14}>
          <Text fontSize={"xl"} fontWeight={600} color={"#fff"}>
            Kid Shows
          </Text>
          <SeriesRow series={kidsSeries || []} />
        </Box>
        {/* family */}
        <Box mt={14}>
          <Text fontSize={"xl"} fontWeight={600} color={"#fff"}>
            Family Shows
          </Text>
          <SeriesRow series={familySeries || []} />
        </Box>
        {/* mystery */}
        <Box mt={14}>
          <Text fontSize={"xl"} fontWeight={600} color={"#fff"}>
            Mystery
          </Text>
          <SeriesRow series={mysterySeries || []} />
        </Box>
      </Box>
      <FooterCmp />
    </Container>
  );
};

export default SeriesPage;

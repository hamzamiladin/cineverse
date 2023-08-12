import Banner from "@/components/BannerCmp";
import { fireEvent, render, screen } from "@testing-library/react";
import "../__mock__/matchMedia";
import { ChakraProvider } from "@chakra-ui/react";

describe("Banner", () => {
  // Tests that the component renders with the correct props
  it("should render the component with the correct props", () => {
    const cineverseOriginals = [
      {
        id: 1,
        title: "Movie 1",
        adult: false,
        overview: "Overview 1",
        backdrop_path: "backdrop_path_1",
        poster_path: "poster_path_1",
        original_language: "Movie 1",
        release_date: "2023-11-17",
        popularity: 34.5,
      },
      {
        id: 2,
        title: "Movie 2",
        adult: false,
        overview: "Overview 2",
        backdrop_path: "backdrop_path_2",
        poster_path: "poster_path_2",
        original_language: "Movie 1",
        release_date: "2023-11-17",
        popularity: 34.5,
      },
    ];
    render(<Banner cineverseOriginals={cineverseOriginals} />);
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Overview 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
    expect(screen.getByText("Overview 2")).toBeInTheDocument();
  });
});

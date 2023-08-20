import "../__mock__/matchMedia";
import { ChakraProvider } from "@chakra-ui/react";
import MovieRow from "@/components/MovieRow";
import { render } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("MovieRow", () => {
  it("it renders", () => {
    render(
      <ChakraProvider>
        <MovieRow />
      </ChakraProvider>
    );
  });
});

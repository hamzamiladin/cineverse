import "../__mock__/matchMedia";
import { ChakraProvider } from "@chakra-ui/react";
import SearchCmp from "@/components/SearchCmp";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SearchCmp", () => {
  it("should display input field placeholder text", () => {
    const { getByPlaceholderText } = render(
      <ChakraProvider>
        <SearchCmp />
      </ChakraProvider>
    );
    const inputField = getByPlaceholderText("search");
    expect(inputField).toBeInTheDocument();
  });
});

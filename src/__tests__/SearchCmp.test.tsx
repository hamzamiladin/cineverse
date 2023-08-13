import SearchCmp from "@/components/SearchCmp";
import { fireEvent, render, screen } from "@testing-library/react";
import "../__mock__/matchMedia";
import { ChakraProvider } from "@chakra-ui/react";

describe("SearchCmp", () => {
  it("should display input field placeholder text", () => {
    const { getByPlaceholderText } = render(<SearchCmp />);
    const inputField = getByPlaceholderText("search");
    expect(inputField).toBeInTheDocument();
  });
});

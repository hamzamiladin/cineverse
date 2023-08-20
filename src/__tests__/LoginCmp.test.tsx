import "../__mock__/matchMedia";
import { ChakraProvider } from "@chakra-ui/react";
import LoginCmp from "@/components/login/LoginCmp";
import { render } from "@testing-library/react";


describe("LoginCmp", () => {
  it("renders", () => {
    render(
      <ChakraProvider>
        <LoginCmp />
      </ChakraProvider>
    );
  });

  it("should display a button", () => {
    const { getByRole } = render(
      <ChakraProvider>
        <LoginCmp />
      </ChakraProvider>
    );
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

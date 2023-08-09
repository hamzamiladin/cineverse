import { ChakraProvider } from "@chakra-ui/react";
import LoginCmp from "@/components/login/LoginCmp";
import { render } from "@testing-library/react";
import "../mock/matchMedia";

describe("LoginCmp", () => {
  it("renders", () => {
    render(
      <ChakraProvider>
        <LoginCmp />
      </ChakraProvider>
    );
  });
});

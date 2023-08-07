import { ChakraProvider } from "@chakra-ui/react";
import LoginCmp from "@/components/login/LoginCmp";
import { render } from "@testing-library/react";

describe("LoginCmp", () => {
  it("renders", () => {
    const { asFragment } = render(
      <ChakraProvider>
        <LoginCmp />
      </ChakraProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import NavbarCmp from "@/components/NavbarCmp";
import { fireEvent, render, screen } from "@testing-library/react";
import "../__mock__/matchMedia";
import { ChakraProvider } from "@chakra-ui/react";

describe("NavbarCmp", () => {
  it("renders", () => {
    render(<NavbarCmp />);
  });

  it("renders logo and links", () => {
    render(
      <ChakraProvider>
        <NavbarCmp />
      </ChakraProvider>
    );
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect("Home").toBeInTheDocument;
  });

  it("should open the mobile menu when hamburger icon is clicked", () => {
    render(
      <ChakraProvider>
        <NavbarCmp />
      </ChakraProvider>
    );
    const hamburgerIcon = screen.getByLabelText("Open Menu");
    fireEvent.click(hamburgerIcon);
    const mobileMenu = screen.getByRole("navigation");
    expect(mobileMenu).toBeInTheDocument();
  });
});

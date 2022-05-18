import styled from "styled-components";
import logo from "@/assets/logo.svg";

const flex = `
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavContainer = styled.nav`
  ${flex}
  padding: 0.5rem;
  margin: 1rem;
  border: 1px solid black;
`;

const Wrapper = styled.ul`
  ${flex}
  width: 100%;
  list-style: none;
`;

const Logo = styled.img`
  width: 5%;
`;

const Links = () => (
  <Wrapper>
    <li>Shop</li>
    <li>About</li>
    <li>Contact</li>
    <li>Places</li>
  </Wrapper>
);

export const Navbar = () => {
  return (
    <NavContainer role="navigation">
      <Logo src={logo} alt="Company logo" />
      <Links />
    </NavContainer>
  );
};

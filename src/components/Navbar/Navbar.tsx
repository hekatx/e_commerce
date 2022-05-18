import logo from "@/assets/logo.svg";
import classes from "./Navbar.module.scss";

const Links = () => (
  <ul className={classes["nav--list"]}>
    <li>Shop</li>
    <li>About</li>
    <li>Contact</li>
    <li>Places</li>
  </ul>
);

export const Navbar = () => {
  return (
    <nav className={classes["nav--container"]} role="navigation">
      <img className={classes["logo"]} src={logo} alt="Company logo" />

      <Links />
    </nav>
  );
};

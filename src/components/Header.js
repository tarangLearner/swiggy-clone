import { DUMMY_IMG } from "../utils/constant";
const Header = () => (
  <div className="header">
    <div className="logo">
      <img src={DUMMY_IMG} />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;

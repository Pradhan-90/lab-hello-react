import ironhack1 from "../images/ironhack1.png";
import ironhack2 from "../images/ironhack2.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="AppHeader">
      <section className="NavBar">
        <img className="NavImage" src={ironhack1} />
        <img className="MenuImage" src={ironhack2} />
      </section>
      <section className="Section2">
        <h2 className="Heading">Say hello to ReactJS</h2>
        <p className="Para1">
          You will learn how to use the most popular frontend library, and
          become the super ninja developer.
        </p>
        <button className="Button1">Awesome!</button>
      </section>
    </div>
  );
};

export default Header;

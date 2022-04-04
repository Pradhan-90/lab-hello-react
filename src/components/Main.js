import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import ironhack3 from "../images/ironhack3.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="SecondPage">
      <section>
        <img src={ironhack3} />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
      </section>

      <section>
        <img src={icon2} />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
      </section>

      <section>
        <img src={icon3} />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's</p>
      </section>

      <section>
        <img src={icon4} />
        <h2>JSX</h2>
        <p>Statically-typed designed to run on modern browsers</p>
      </section>
    </div>
  );
};

export default Main;

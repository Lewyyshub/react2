import "./App.css";
import poto from "./assets/images/rectangle.png";
import icon1 from "./assets/icons/combine.png";
import icon2 from "./assets/icons/clock.png";
import icon3 from "./assets/icons/Oval.png";
import eye from "./assets/icons/Eye.png";
function App() {
  return (
    <>
      <div className="container">
        <div className="info">
          <img className="eye" src={eye} alt="" />
          <img className="photo1" src={poto} alt="" />
          <h1 className="firsttxt">Equilibrium #3429</h1>
          <span className="secondtxt">
            Our Equilibrium collection promotes <br />
            balance and calm.
          </span>
        </div>
        <div className="prices">
          <div className="firstp">
            {" "}
            <img src={icon1} alt="" />
            <h1 className="pricetxt">0.041 ETH</h1>
          </div>
          <div className="secp">
            <img src={icon2} alt="" />
            <span className="counter">3 days left</span>
          </div>
        </div>
        <div className="line"></div>
        <div className="user">
          <img src={icon3} alt="" />
          <p className="pp">
            <span className="spann">Creation of</span> Jules Wyvern
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

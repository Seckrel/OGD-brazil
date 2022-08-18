import Showcase from "./Showcase";
import { Parallax } from "@react-spring/parallax";
import CustomParallax from "./CustomParallax";
import Avaliability from "./Avaliability";
import Corruption from './Corruption';
import Transfrom from "./Transform";
import christTheRedemeer from "/images/christ-the-redemeer.jpg?url";
import brazilMap from "/images/brazil-map.png?url";
import hand from "/images/hand.png?url";
import transformSrc from "/images/transform.jpg?url";
import rioDeJaneiro from "/images/rio-de-janeiro.jpg?url";
import BrazilMessage from "./BrazilMessage";

const Home = () => {

  return (
    <div className="home">
      <Parallax pages={4.9} style={{ top: "0", left: "0" }}>
        <CustomParallax
          offset={0}
          speed={0}
          imgSrc={christTheRedemeer}
          backgroundPosition={"center top"}
        >
          <Showcase />
        </CustomParallax>
        <CustomParallax
          offset={1}
          speed={0.3}
          imgSrc={brazilMap}
          backgroundSize={"contain"}
          backgroundPosition={"left"}
          justifyContent={"end"}
        >
          <Avaliability />
        </CustomParallax>
        <CustomParallax
          offset={2}
          speed={0.5}
          imgSrc={hand}
          backgroundPosition={"center top"}
        >
          <Corruption />
        </CustomParallax>
        <CustomParallax
          offset={3}
          speed={0.1}
          imgSrc={transformSrc}
          backgroundPosition={"left"}
          justifyContent={"end"}
        >
          <Transfrom />
        </CustomParallax>
        <CustomParallax
          offset={3.9}
          speed={0}
          imgSrc={rioDeJaneiro}
          backgroundPosition={"center top"}
        >
          <BrazilMessage />
        </CustomParallax>
      </Parallax>
    </div>
  );
};

export default Home;

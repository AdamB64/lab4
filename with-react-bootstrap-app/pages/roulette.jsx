import Layout from "../components/layout";
import dynamic from "next/dynamic";
import { useState } from "react";
const Wheel = dynamic(
() => {
return import("../components/wheel");
},
{ ssr: false }
);

console.log(Wheel)

const Roulette = () => {

     // Define state for mustSpin and prizeNumber
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpin = () => {
    const newPrizeNumber = Math.floor(Math.random() * 3); // Assuming 3 options
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
return (
<Layout>
<h1>Play roulette</h1>
<p>A roulette wheel will live here</p>
<Wheel
mustSpin={mustSpin}
prizeNumber={prizeNumber}
/>
</Layout>
);
};
export default Roulette;

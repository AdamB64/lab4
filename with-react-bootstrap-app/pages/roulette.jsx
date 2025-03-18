import Layout from "../components/layout";
import dynamic from "next/dynamic";
const Wheel = dynamic(
() => {
return import("../components/wheel");
},
{ ssr: false }
);

const Roulette = () => {
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

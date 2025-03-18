import React from 'react'
import { Wheel } from 'react-custom-roulette'
const data = [
{ option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
{ option: '1', style: { backgroundColor: 'white' } },
{ option: '2' },
]
const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
export default ({mustSpin, prizeNumber}) => (
<>
<Wheel
mustStartSpinning={mustSpin}
prizeNumber={prizeNumber}
data={data}
/>
</>
)
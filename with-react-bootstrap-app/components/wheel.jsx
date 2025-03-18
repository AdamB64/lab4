import React, { useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';

const wheelData = [
  { option: '🍕 Free Pizza', style: { backgroundColor: '#ffcc00', textColor: 'black' } },
  { option: '🎟️ Discount Voucher', style: { backgroundColor: '#ff5733' } },
  { option: '💵 $10 Cash', style: { backgroundColor: '#33cc33' } },
  { option: '🛍️ Free Gift', style: { backgroundColor: '#3366ff' } },
  { option: '🚫 Try Again', style: { backgroundColor: '#ff3333' } },
];

const CustomWheel = ({ mustSpin, prizeNumber, onStopSpinning }) => {
  return (
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={wheelData}
      backgroundColors={['#3e3e3e', '#df3428']}
      textColors={['#ffffff']}
      onStopSpinning={onStopSpinning}
    />
  );
};

export default CustomWheel;

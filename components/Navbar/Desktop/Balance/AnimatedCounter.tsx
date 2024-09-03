"use client";
import React from "react";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  amount: number;
  prefix?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  amount,
  prefix,
  decimals,
}) => {
  return (
    <div>
      <CountUp
        duration={4}
        decimal=","
        prefix={prefix}
        end={amount}
        decimals={decimals}
      />
    </div>
  );
};
export default AnimatedCounter;

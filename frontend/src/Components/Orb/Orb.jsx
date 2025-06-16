import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../Utils/useWindowSize";

// Function to generate keyframes using props
const generateMoveOrb = (x, y) => keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(${x}px, ${y}px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(400px);

    animation: ${({ x, y }) => generateMoveOrb(x, y)} 15s alternate linear infinite;
`;

const Orb = () => {
    const { width, height } = useWindowSize();

    // fallback values to avoid NaN during first render
    const x = width ? width / 1.5 : 1000;
    const y = height ? height / 2 : 300;

    return <OrbStyled x={x} y={y} />;
};

export default Orb;

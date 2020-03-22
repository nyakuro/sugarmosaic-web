import React from "react";
import styled from "styled-components";

export default function HamburgerIcon({ size }: { size: number }) {
  return (
    <Icon viewBox="0 0 110 88" height={size}>
      <Line x1="4" y1="78.5" x2="105" y2="78.5" />
      <Line x1="4" y1="44" x2="105" y2="44" />
      <Line x1="4" y1="8.5" x2="105" y2="8.5" />
    </Icon>
  );
}

const Icon = styled.svg``;

const Line = styled.line`
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 12px;
`;

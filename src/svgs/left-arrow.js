import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

const LeftArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#F4F4F5"
        d="M2 7.388A6.388 6.388 0 0 1 8.388 1H27.55a6.388 6.388 0 0 1 6.388 6.388V26.55a6.388 6.388 0 0 1-6.388 6.388H8.388A6.388 6.388 0 0 1 2 26.55V7.388Z"
      />
      <Path
        stroke="#E1E1E2"
        strokeWidth={0.798}
        d="M8.388 1.4H27.55a5.988 5.988 0 0 1 5.988 5.988V26.55a5.988 5.988 0 0 1-5.988 5.988H8.388a5.988 5.988 0 0 1-5.989-5.988V7.388a5.989 5.989 0 0 1 5.989-5.989Z"
      />
      <Path
        fill="#202024"
        d="M19.77 12.506c.26.26.26.682 0 .941L16.25 16.97l3.522 3.522a.665.665 0 0 1-.941.941l-3.993-3.992a.665.665 0 0 1 0-.941l3.993-3.993c.26-.26.68-.26.94 0Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default LeftArrow;

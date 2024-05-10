import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

const RightArrow = (props) => (
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
        d="M2.061 7.388A6.388 6.388 0 0 1 8.45 1h19.163A6.388 6.388 0 0 1 34 7.388V26.55a6.388 6.388 0 0 1-6.388 6.388H8.45a6.388 6.388 0 0 1-6.388-6.388V7.388Z"
      />
      <Path
        stroke="#E1E1E2"
        strokeWidth={0.798}
        d="M8.449 1.4h19.163a5.988 5.988 0 0 1 5.989 5.988V26.55a5.988 5.988 0 0 1-5.989 5.988H8.45a5.988 5.988 0 0 1-5.988-5.988V7.388a5.989 5.989 0 0 1 5.988-5.989Z"
      />
      <Path
        fill="#202024"
        d="M16.23 21.433a.666.666 0 0 1 0-.942l3.521-3.521-3.522-3.522a.665.665 0 0 1 .941-.941l3.993 3.992c.26.26.26.681 0 .941l-3.993 3.993a.665.665 0 0 1-.94 0Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default RightArrow;

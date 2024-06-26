import * as React from 'react';
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

export const Burger = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}>
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M37.607 20.893H1.393c-.377 0-.704.138-.98.414a1.339 1.339 0 0 0-.413.979v2.786c0 .377.138.704.413.979.276.276.603.414.98.414h36.214c.377 0 .704-.138.98-.414.275-.275.413-.602.413-.98v-2.785a1.34 1.34 0 0 0-.413-.98 1.339 1.339 0 0 0-.98-.413ZM37.607 29.25H1.393c-.377 0-.704.138-.98.413a1.339 1.339 0 0 0-.413.98v2.785c0 .378.138.704.413.98.276.276.603.414.98.414h36.214c.377 0 .704-.139.98-.414.275-.276.413-.602.413-.98v-2.785c0-.377-.138-.704-.413-.98a1.34 1.34 0 0 0-.98-.413ZM38.587 4.592a1.34 1.34 0 0 0-.98-.413H1.393a1.34 1.34 0 0 0-.98.413 1.34 1.34 0 0 0-.413.98v2.785c0 .378.138.704.413.98.276.275.603.413.98.413h36.214c.377 0 .704-.138.98-.413a1.34 1.34 0 0 0 .413-.98V5.572a1.34 1.34 0 0 0-.413-.98ZM37.607 12.536H1.393c-.377 0-.704.138-.98.413a1.339 1.339 0 0 0-.413.98v2.786c0 .377.138.703.413.979.276.275.603.414.98.414h36.214c.377 0 .704-.139.98-.414.275-.276.413-.602.413-.98V13.93c0-.378-.138-.704-.413-.98a1.34 1.34 0 0 0-.98-.413Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h39v39H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const BackIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M15.123 19.5 30.48 4.142c.26-.26.39-.56.39-.899 0-.338-.13-.638-.39-.898L28.527.391c-.26-.26-.56-.391-.898-.391-.34 0-.639.13-.9.391L8.52 18.601c-.26.26-.39.56-.39.899 0 .339.13.638.39.899l18.21 18.21c.26.26.56.39.9.39.337 0 .637-.13.898-.39l1.954-1.953c.26-.26.39-.56.39-.9 0-.338-.13-.637-.39-.898L15.123 19.5Z"
    />
  </Svg>
);

export const ChevronRight = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#040415"
      fillRule="evenodd"
      d="M10.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.586 12l-2.293-2.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const CalendarIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M8.625 19.5a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Zm1.875 7.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Zm7.5-6a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Zm0 6a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Zm7.5-6a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75ZM33 10.5v18a4.5 4.5 0 0 1-4.5 4.5h-21A4.5 4.5 0 0 1 3 28.5v-18A4.5 4.5 0 0 1 7.5 6H9V4.5a1.5 1.5 0 0 1 3 0V6h12V4.5a1.5 1.5 0 1 1 3 0V6h1.5a4.5 4.5 0 0 1 4.5 4.5Zm-27 0V12h24v-1.5A1.5 1.5 0 0 0 28.5 9h-21A1.5 1.5 0 0 0 6 10.5ZM30 15H6v13.5A1.5 1.5 0 0 0 7.5 30h21a1.5 1.5 0 0 0 1.5-1.5V15Z"
    />
  </Svg>
);

import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color || "#000"}
      fillRule="evenodd"
      d="M12 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM15.5 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm2.5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3.59 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm2.5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6.25 16A3.75 3.75 0 0 1 10 12.25h4A3.75 3.75 0 0 1 17.75 16v2A1.75 1.75 0 0 1 16 19.75H8A1.75 1.75 0 0 1 6.25 18v-2ZM10 13.75A2.25 2.25 0 0 0 7.75 16v2c0 .138.112.25.25.25h8a.25.25 0 0 0 .25-.25v-2A2.25 2.25 0 0 0 14 13.75h-4Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#000"}
      fillRule="evenodd"
      d="M2.25 16c0-.966.784-1.75 1.75-1.75h2.5a.75.75 0 0 1 0 1.5H4a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h8a.75.75 0 0 1 0 1.5H4A1.75 1.75 0 0 1 2.25 18v-2Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color || "#000"}
      fillRule="evenodd"
      d="M21.75 16A1.75 1.75 0 0 0 20 14.25h-2.5a.75.75 0 0 0 0 1.5H20a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25h-8a.75.75 0 0 0 0 1.5h8A1.75 1.75 0 0 0 21.75 18v-2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export { SvgComponent as JoinRoomIcon };

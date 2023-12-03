import Svg, { Path, SvgProps } from "react-native-svg";

const MinusIcon = (props: SvgProps) => (
  <Svg width={16} height={2} fill="none" {...props}>
    <Path
      fill={props.color || "#000"}
      fillRule="evenodd"
      d="M.25 1A.75.75 0 0 1 1 .25h14a.75.75 0 0 1 0 1.5H1A.75.75 0 0 1 .25 1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MinusIcon;

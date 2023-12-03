import Svg, { G, Path, SvgProps } from "react-native-svg";

const PlusIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G fill={props.color || "#000"} fillRule="evenodd" clipRule="evenodd">
      <Path d="M.25 8c0-.414.386-.75.861-.75H14.89c.476 0 .861.336.861.75s-.386.75-.861.75H1.11C.636 8.75.25 8.414.25 8Z" />
      <Path d="M8 .25c.414 0 .75.386.75.861V14.89c0 .476-.336.861-.75.861s-.75-.386-.75-.861V1.11c0-.475.336-.861.75-.861Z" />
    </G>
  </Svg>
);
export default PlusIcon;

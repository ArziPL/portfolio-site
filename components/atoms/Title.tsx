import { BasicComponentProps } from "../../types/types";

export default function Title(props: BasicComponentProps) {
  return <div className={"title " + props.className}>{props.children}</div>;
}

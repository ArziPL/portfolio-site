import { BasicComponentProps } from "../../types/types";

export default function Section(props: BasicComponentProps) {
  return <div className={props.className}>{props.children}</div>;
}

import { BasicComponentProps } from "../../types/types";

export default function Button(props: BasicComponentProps) {
  return <div className="button">{props.children}</div>;
}

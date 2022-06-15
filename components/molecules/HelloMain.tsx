import { CardProps } from "../../types/types";
import Title from "../atoms/Title";

export default function HelloCard(props: CardProps) {
  return (
    <div className="helloMain">
      <Title className="helloMain__title">{props.title}</Title>
      <div className="helloMain__text">{props.children}</div>
    </div>
  );
}

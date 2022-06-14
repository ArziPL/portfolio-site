import { CardProps } from "../../types/types";
import Title from "../atoms/Title";

export default function HelloCard(props: CardProps) {
  return (
    <div className="helloCard">
      <div className="helloCard__content">
        <Title className="helloCard__content--title">{props.title}</Title>
        <div className="helloCard__content--desc">{props.children}</div>
      </div>
    </div>
  );
}

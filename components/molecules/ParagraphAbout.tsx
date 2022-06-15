import { CardProps } from "../../types/types";
import Title from "../atoms/Title";

export default function AboutCard(props: CardProps) {
  return (
    <div className={"about__paragraph " + props.className}>
      <Title className="about__paragraph--header">{props.title}</Title>
      <div className="about__paragraph--text">{props.children}</div>
    </div>
  );
}

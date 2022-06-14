import { CardProps } from "../../types/types"
import Title from "../atoms/Title"

export default function AboutCard(props:CardProps) {
    return(
        <div className={"aboutTemplate__card " + props.className}>
            <Title className="aboutTemplate__card--header">{props.title}</Title>
            <div className="aboutTemplate__card--text">{props.children}</div>
        </div>
    )
}
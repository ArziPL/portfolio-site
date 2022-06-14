import Icon from "../atoms/Icon"
import { LinkProps } from "../../types/types"
import Image from "next/image"

export default function SocialLink(props: LinkProps) {
    return(
        <a href={props.url} target="_blank" rel="noreferrer">
            <div className="link">
                <Image src={props.imgUrl} width={30} height={30} alt="Icon of social media" className="link__icon"/>
                {/* <div className="link__title">{props.title}</div> */}
            </div>
        </a>
    )
}
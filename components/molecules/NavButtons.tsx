import { BasicComponentProps } from "../../types/types"
import Button from "../atoms/Button"
import Link from "next/link"

export default function ButtonPanel(props:BasicComponentProps) {
    return (
        <div className={props.className}>
            <a href="#about"><Button>About me</Button></a>
            <a href="#projects"><Button>Projects</Button></a>
            <a href="#contact"><Button>Contact</Button></a>
        </div>
    )
}
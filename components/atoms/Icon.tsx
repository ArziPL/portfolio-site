import Image from "next/image";
import { IconProps } from "../../types/types";

export default function Icon(props: IconProps) {
  return (
    <div className={props.className}>
      <Image className="icon" src={props.url} width={100} height={100} alt="icon component" layout="responsive" />
    </div>
  );
}

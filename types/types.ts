export type BasicComponentProps = {
    children?:any,
    className?:string,
    style?:any,
}

export type CardProps = {
    title:string,
    children:any,
    className?:string,
}

export type IconProps = {
    className?:string,
    style?:any,
    url:string,
}

export type ProjectCardProps = {
    name:string,
    bgColor:string,
    link?:string,
    children:any,
}

export type LinkProps = {
    url:string,
    imgUrl:string,
    title:string,
    onClick?:any,
}
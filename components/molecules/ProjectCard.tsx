import { ProjectCardProps } from "../../types/types";
import { useState } from "react";
import Link from "next/link";

export default function ProjectCard(props: ProjectCardProps) {
  const [hoverFlag, setHoverFlag] = useState(false);

  const handleEnter = () => {
    setHoverFlag(true);
  };

  const handleLeave = () => {
    setHoverFlag(false);
  };

  const handleGitHubOpen = () => {
    window.open(props.link, "_blank");
  };

  return (
    <>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleGitHubOpen}
        style={{ backgroundColor: props.bgColor }}
        className="projectCard"
      >
        <div className="projectCard__name">{props.name}</div>
        <div className="projectCard__text">{props.children}</div>
      </div>
    </>
  );
}

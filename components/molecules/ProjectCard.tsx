import { ProjectCardProps } from "../../types/types";

export default function ProjectCard(props: ProjectCardProps) {
  // Open GitHub page on click
  const handleGitHubOpen = () => {
    window.open(props.link, "_blank");
  };

  return (
    <>
      <div onClick={handleGitHubOpen} style={{ backgroundColor: props.bgColor }} className="projects__projectCard">
        <div className="projects__projectCard--name">{props.name}</div>
        <div className="projects__projectCard--text">{props.children}</div>
      </div>
    </>
  );
}

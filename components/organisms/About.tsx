import Icon from "../atoms/Icon";
import Title from "../atoms/Title";
import ParagraphAbout from "../molecules/ParagraphAbout";

export default function About() {
    return (
        <div className="about">
            <Icon className="about__icon" url="/static/profile_small.png"></Icon>

            <div className="about__personal">
                <Title className="about__personal--name">Arkadiusz Ogryzek</Title>
                <div className="about__personal--profession"></div>
            </div>

            <ParagraphAbout title="About career">
                I’m a college student who loves building systems and exploring technology. I have experience in web
                development, mainly with React, and I enjoy creating efficient and dynamic applications. I’m always open
                to learning new things—whether it’s backend development, databases, or completely different tech stacks.
                If something catches my interest, I’ll dive into it and figure it out.
            </ParagraphAbout>

            <ParagraphAbout title="About me">
                I am now 22 years old, I have recently started a collage - Cracow University of Technology at major
                Computer Science. I truly love building systems and solving problems. I can't wait for each next session
                of training, i truly love driving cars and feeling the road, i would love to own M car in future.
            </ParagraphAbout>

            <ParagraphAbout title="About future">
                I see myself as a leader—not just in my work but in the way I approach life. I want to build something
                big, lead a team, and set the standard in my field. Being at the top of my branch means more than just
                success; it’s about influence, respect, and knowing I built something meaningful. I picture myself
                living in a big house, driving a few expensive cars—not just for the luxury but as a reflection of what
                I’ve achieved. It’s not about showing off; it’s about proving to myself that I turned ambition into
                reality.
            </ParagraphAbout>
        </div>
    );
}

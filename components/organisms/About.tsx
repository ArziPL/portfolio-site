import Icon from "../atoms/Icon";
import Title from "../atoms/Title";
import ParagraphAbout from "../molecules/ParagraphAbout";

export default function About() {
  return (
    <div className="about">
      <Icon className="about__icon" url="/static/profile_small.png"></Icon>

      <div className="about__personal">
        <Title className="about__personal--name">Arkadiusz Ogryzek</Title>
        <div className="about__personal--profession">FRONT-END DEVELOPER</div>
      </div>
      
    <ParagraphAbout title="About career">
        Currently, I am writing the most in <b>React</b>. Recently I started to abuse <b>Next.js</b> terribly and I must admit that it is giving back. It&#39;s just a more polished React. I love <b>SCSS</b>, the number of options it extends compared to CSS is remarkable. Sometimes I touch <b>Python</b>, be it to some problem beyond React&#39;s capabilities or to data structures / algorithms / other problems. Simplicity makes it so much easier. I am also the proud owner of passed <a href="https://informatyk.edu.pl/kwalifikacja-ee-08/" target="_blank" rel="noreferrer" title="Click me !"><b>EE.08</b></a> and <a href="https://informatyk.edu.pl/kwalifikacja-ee-09/" target="_blank" rel="noreferrer" title="Click me !"><b>EE.09</b></a> exams.
    </ParagraphAbout>
        
    <ParagraphAbout title="About me">
        I am now <b>19 years old</b>, I have recently <b>finished a high-school</b> with an IT profile. I love <b>programming</b>. I train often in the <b>gym</b>. In my spare time I <b>watch YT</b> or play <b>games</b>. I also love listening to music, mainly <b>hip-hop</b>. I can also say that I am a beginner <b>car enthusiast</b>.
    </ParagraphAbout>

    <ParagraphAbout title="About future">
        First, I&#39;d like to master <b>full-stack development</b>. As I wrote, I would like to be able to create an entire functioning website by myself. I also want to get to a fairly high level in <b>competetive programming</b>, it combines my passion for programming and being competitive. In the future, I would definitely like to touch on <b>artificial intelligence</b> and <b>cybersecurity</b>. My <b>own business</b> in the future is inevitable, but we have time for that, first I would like to get to know the industry from the inside from a safe position.
    </ParagraphAbout>
    </div>
  );
}

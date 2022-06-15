import SocialLink from "../molecules/SocialLink";

export default function FooterCard() {
  return (
    <div className="contact">
      <div className="contact__linksWrapper">
        <SocialLink url="https://github.com/ArziPL" imgUrl="/static/github_icon.png" title="GitHub" />
        <SocialLink url="https://www.linkedin.com/in/arkadiuszogryzek/" imgUrl="/static/linkedin_icon.png" title="LinkedIn"/>
        <SocialLink url="mailto:ogryzek.arkadiusz@gmail.com" imgUrl="/static/email_icon.png" title="Email"/>
      </div>
      <div className="contact__added">When in doubt - // it out</div>
    </div>
  );
}

import SocialLink from "../molecules/SocialLink"

export default function FooterCard() {
    return(
        <div className="footerCard">
            <div className="footerCard__links">
                <SocialLink url="https://github.com/ArziPL" imgUrl="/static/github_icon.png" title="GitHub"/>
                <SocialLink url="https://www.linkedin.com/in/arkadiuszogryzek/" imgUrl="/static/linkedin_icon.png" title="LinkedIn"/>
                <SocialLink url="mailto:ogryzek.arkadiusz@gmail.com" imgUrl="/static/email_icon.png" title="Email" onClick={() => {navigator.clipboard.writeText("ogryzek.arkadiusz@gmail.com")}}/>
            </div>
            <div className="footerCard__added">
                When in doubt - // it out
            </div>
        </div>
    )
}
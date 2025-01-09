import "./Fotter.scss";
import brandLogo from "../../images/footer/BrandLogo.png";
import image1 from "../../images/footer/Telegram.png";
import image2 from "../../images/footer/Twiiter.png";
import image3 from "../../images/footer/Instagram.png";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

function Footer() {
  useGSAP(() => {
    gsap.fromTo(".footer", {opacity: 0}, {opacity: 1, duration: 1});
  }, []);

  return (
    <div className="flex items-center justify-between px-8 z-1 footer py-section-space h-Footer-Size bg-Footer rounded-t-Header md:flex-col md:h-max md:gap-3 md:py-5 ">
      <div className="flex items-center gap-3 h-max md:flex-col ">
        <div className="w-24 shrink-0 md:w-20">
          <img src={brandLogo} alt="" />
        </div>
        <div className="self-center text-Font md:text-center"></div>
      </div>

      <div className="flex items-center justify-center gap-3 ">
        <SocialLink src={image1}></SocialLink>
        <SocialLink src={image2}></SocialLink>
        <SocialLink src={image3}></SocialLink>
      </div>
    </div>
  );
}

function SocialLink({src}) {
  return (
    <div className="transition-all cursor-pointer size-12 hover:scale-110">
      <a href="/">
        {" "}
        <img src={src} alt="" />
      </a>
    </div>
  );
}

export default Footer;

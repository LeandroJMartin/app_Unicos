import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

interface props {
  SocialLinks: {
    rsLinkFacebook: string;
    rsLinkInstagram: string;
    rsLinkLinkedin: string;
    rsLinkYoutube: string;
  };
}

const SocialIcons = ({ SocialLinks }: props) => {
  const Anchor = ({ Icon, url }: { Icon: JSX.Element; url: string }) => {
    return (
      <a className="px-2" href={url}>
        {Icon}
      </a>
    );
  };

  return (
    <div className="flex items-center justify-between xl:justify-end px-8 xl:px-2 pt-14 xl:pt-0">
      {SocialLinks?.rsLinkFacebook && (
        <Anchor
          url={SocialLinks.rsLinkFacebook}
          Icon={
            <BsFacebook className="text-white xl:text-blue w-[27px] h-[27px] xl:w-[15px]" />
          }
        />
      )}
      {SocialLinks?.rsLinkInstagram && (
        <Anchor
          url={SocialLinks.rsLinkInstagram}
          Icon={
            <BsInstagram className="text-white xl:text-blue w-[27px] h-[27px] xl:w-[15px]" />
          }
        />
      )}
      {SocialLinks?.rsLinkLinkedin && (
        <Anchor
          url={SocialLinks.rsLinkLinkedin}
          Icon={
            <BsLinkedin className="text-white xl:text-blue w-[27px] h-[27px] xl:w-[15px]" />
          }
        />
      )}
      {SocialLinks?.rsLinkYoutube && (
        <Anchor
          url={SocialLinks.rsLinkYoutube}
          Icon={
            <BsYoutube className="text-white xl:text-blue w-[27px] h-[27px] xl:w-[20px]" />
          }
        />
      )}
    </div>
  );
};

export default SocialIcons;

import React from 'react';
import { IconType } from 'react-icons';
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
  const Anchor = ({ Icon }: { Icon: JSX.Element }) => {
    return (
      <a className="px-2" href={SocialLinks.rsLinkFacebook}>
        {Icon}
      </a>
    );
  };

  return (
    <div className="flex items-center justify-between px-8">
      {SocialLinks.rsLinkFacebook && (
        <Anchor Icon={<BsFacebook size={23} className="text-white" />} />
      )}
      {SocialLinks.rsLinkInstagram && (
        <Anchor Icon={<BsInstagram size={23} className="text-white" />} />
      )}
      {SocialLinks.rsLinkLinkedin && (
        <Anchor Icon={<BsLinkedin size={23} className="text-white" />} />
      )}
      {SocialLinks.rsLinkYoutube && (
        <Anchor Icon={<BsYoutube size={29} className="text-white" />} />
      )}
    </div>
  );
};

export default SocialIcons;

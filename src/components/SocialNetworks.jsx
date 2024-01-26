import {
  InstagramIcon,
  MailIcon,
  MapIcon,
  WhatsappIcon,
  YoutubeIcon,
} from './svgComponents';

export const SocialNetworks = () => {
  return (
    <div className='md: flex gap-2'>
      <MapIcon />
      <WhatsappIcon />
      <MailIcon />
      <YoutubeIcon />
      <InstagramIcon />
    </div>
  );
};

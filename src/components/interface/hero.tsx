import SlideApp from './Slide';

interface Props {
  Banners: {
    ImgDesktopUrl: string;
    ImgMobileUrl: string;
    LinkExterno: string;
    Url: string;
  }[];
}

const HeroApp = ({ Banners }: Props) => {
  const items = Banners.map((item) => {
    const imgs = (
      <>
        <img
          className="hidden md:block rounded-xl md:rounded-3xl"
          src={item.ImgDesktopUrl}
          alt="Imagem Banner"
        />
        <img
          className="block md:hidden rounded-xl md:rounded-3xl"
          src={item.ImgMobileUrl}
          alt="Imagem Banner"
        />
      </>
    );

    return <div>{item.Url ? <a href={item.Url}>{imgs}</a> : imgs}</div>;
  });

  return (
    <div className="container hero">
      <SlideApp items={items} />
    </div>
  );
};

export default HeroApp;

import Banner from "./Banner";
import "./styles/banner.css";

export default function BannerContainer() {
  return (
    <>
      <h1>Banners</h1>
      <div className="banner-container">
        <h3>Success</h3>
        <Banner title="Congratulations!" variant="success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>
        <Banner title="Congratulations!" variant="success" />
        {/*-------------------------------------------------------------*/}
        <h3>Warning</h3>
        <Banner title="Attention" variant="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>
        <Banner title="Attention" variant="warning" />
        {/*-------------------------------------------------------------*/}
        <h3>Error</h3>
        <Banner
          title="There is a problem with your application"
          variant="error"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>
        <Banner
          title="There is a problem with your application"
          variant="error"
        />
        {/*-------------------------------------------------------------*/}
        <h3>Neutral</h3>
        <Banner title="Update available" variant="neutral">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>
        <Banner title="Update available" variant="neutral" />
      </div>
    </>
  );
}

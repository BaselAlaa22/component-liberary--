import BadgeContainer from "./components/BadgeContainer";
import BannerContainer from "./components/BannerContainer";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <BadgeContainer />
      <BannerContainer />

      <h1>Card</h1>
      <Card icon="./card_icon.png" title="Easy Deployment">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </Card>
      <Testimonial
        image="./office_guy.jpg"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
        name="John Anderson"
        position="Workcation, CTO"
      />

      <div className="spacer"></div>
    </>
  );
}

export default App;

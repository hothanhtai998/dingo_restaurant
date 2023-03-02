import data from '~/data';
import Banner from '~/layouts/components/Section/Banner';
import ExclusiveItem from '~/layouts/components/Section/ExclusiveItem';
import About from '~/layouts/components/Section/About';
import FoodMenu from '~/layouts/components/Section/FoodMenu';
import Chefs from '~/layouts/components/Section/Chefs';
import Reservation from '~/layouts/components/Section/Reservation';
import IntroVideo from '~/layouts/components/Section/IntroVideo';
import VideoButton from '~/components/Button/VideoButton';
const introVideoHome = data.introVideoHome;

function Home() {
  return (
    <>
      <Banner />
      <ExclusiveItem />
      <About />
      <IntroVideo introVideoHeading={introVideoHome}>
        <VideoButton />
      </IntroVideo>
      <FoodMenu />
      <Chefs />
      <Reservation />
    </>
  );
}

export default Home;

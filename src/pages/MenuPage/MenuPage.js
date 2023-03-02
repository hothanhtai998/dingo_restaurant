import data from '~/data';

import IntroVideo from '~/layouts/components/Section/IntroVideo';
import FoodMenu from '~/layouts/components/Section/FoodMenu';
import VideoButton from '~/components/Button/VideoButton';
const introVideoAbout = data.introVideoMenu;
const introVideoHome = data.introVideoHome;

function MenuPage() {
  return (
    <>
      <IntroVideo height={300} introVideoHeading={introVideoAbout} />
      <FoodMenu />
      <IntroVideo introVideoHeading={introVideoHome}>
        <VideoButton />
      </IntroVideo>
    </>
  );
}

export default MenuPage;

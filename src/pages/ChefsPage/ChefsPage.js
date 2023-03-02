import data from '~/data';

import IntroVideo from '~/layouts/components/Section/IntroVideo';
import VideoButton from '~/components/Button/VideoButton';
import Chefs from '~/layouts/components/Section/Chefs';
const introVideoChefs = data.introVideoChefs;
const introVideoHome = data.introVideoHome;

function AboutPage() {
  return (
    <>
      <IntroVideo height={300} introVideoHeading={introVideoChefs} />
      <Chefs />
      <IntroVideo introVideoHeading={introVideoHome}>
        <VideoButton />
      </IntroVideo>
    </>
  );
}

export default AboutPage;

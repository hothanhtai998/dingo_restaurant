import data from '~/data';

import IntroVideo from '~/layouts/components/Section/IntroVideo';
import About from '~/layouts/components/Section/About';
import Review from '~/layouts/components/Section/Review';
const introVideoAbout = data.introVideoAbout;

function AboutPage() {
  return (
    <>
      <IntroVideo height={300} introVideoHeading={introVideoAbout} />
      <About />
      <Review />
    </>
  );
}

export default AboutPage;

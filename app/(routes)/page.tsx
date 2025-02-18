/* eslint-disable max-len */

// Internal Dependencies
import AppNavigation from '@/modules/AppNavigation';
import AppFooter from '@/modules/AppFooter';

// Component Definition
export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      <AppNavigation />
      <div className="w-[70%] mx-auto grow flex flex-col justify-center">
        <div className="text-5xl mb-6">Howdy my hommie,</div>
        <div className="text-9xl font-bold mb-8">I&apos;m Earvin</div>
        <div className="w-[512px] text-lg">
          Hi! I&apos;m a Full Stack and Localization engineer based in Beijing.
          I try to spend as much spare time as possible learning new techs, exploring new things and building cool stuff.
          Always a persuader for a better work-life balance and thinker of a meaningful retired life about 30 years in advance :)
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

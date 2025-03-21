/* eslint-disable max-len */

// Internal Dependencies
import AppNavigation from '@/modules/AppNavigation';
import AppFooter from '@/modules/AppFooter';
import OptimizedImage from '@/components/OptimizedImage';

// Component Definition
export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col">
      <AppNavigation />
      <div className="w-[70%] h-[100%] mx-auto flex flex-row items-center">
        <div className="flex flex-col grow">
          <div className="text-5xl mb-6">Howdy my hommie,</div>
          <div className="text-9xl font-bold mb-8">I&apos;m Earvin</div>
          <div className="w-[512px] text-lg">
            Hi! I&apos;m a Full Stack and Localization engineer based in Beijing.
            I try to spend as much spare time as possible learning new techs, exploring new things and building cool stuff.
            Always a persuader for a better work-life balance and thinker of a meaningful retired life about 30 years in advance :)
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <OptimizedImage
            alt="Profile image of Earvin"
            src="/profile_earvin.jpg"
            width={240}
            height={160}
            // className="object-cover w-full h-full"
          />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

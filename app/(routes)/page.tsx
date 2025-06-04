// Internal Dependencies
import AppNavigation from '@/modules/AppNavigation';
import AppFooter from '@/modules/AppFooter';
import OptimizedImage from '@/components/OptimizedImage';

// Component Definition
export default function Home() {
  return (
    <div className='flex h-screen w-screen flex-col'>
      <AppNavigation />
      <div className='mx-auto flex h-full w-[70%] flex-row items-center'>
        <div className='flex grow flex-col'>
          <div className='mb-6 text-5xl'>Howdy my hommie,</div>
          <div className='mb-8 text-9xl font-bold'>I&apos;m Earvin</div>
          <div className='w-[512px] text-lg'>
            Hi! I&apos;m a Full Stack and Localization Engineer. I strive to
            spend my spare time learning new technologies, exploring innovative
            ideas, and building cool stuffs. I prioritize a healthy work-life
            balance and often contemplate a meaningful retired life a couple of
            decades down the line :)
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <OptimizedImage
            alt='Profile image of Earvin'
            src='/profile_earvin.jpg'
            width={240}
            height={160}
            className='rounded-2xl'
          />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

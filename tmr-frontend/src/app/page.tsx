import Image, { StaticImageData } from 'next/image';
import Logo from '../../public/images/tmr-logo.svg';
import TMRImage from '../../public/images/favicon.svg';
import FirstOnboardingImage from '../../public/images/tmr-section1.svg';
import SecondOnboardingImage from '../../public/images/tmr-section2.svg';
import Footer from './components/_common/Footer/Footer';
import Headers from './components/_common/Header/Headers';
import Link from 'next/link';

interface OnboardingProps {
  pointNumber: string;
  image: StaticImageData;
  title: string;
  description: string;
  reverseLayout?: boolean;
}

const OnboardingSection = ({
  pointNumber,
  image,
  title,
  description,
  reverseLayout = false,
}: OnboardingProps) => (
  <section className="relative w-full max-w-7xl z-10 md:z-10 sm:z-10">
    <p className="flex flex-row items-center font-bmHannaPro text-7xl md:text-5xl lg:text-[10rem] sm:text-[2rem] font-bold text-gray-9 md:text-white-F sm:text-white-F -rotate-12 opacity-50 absolute  transform -translate-y-[-5rem] md:-translate-y-[-9rem] sm:-translate-y-[-6rem]  -translate-x-4 md:-translate-x-1 z-50">
      <Image
        src={TMRImage}
        alt="TMR Logo Image"
        className="bg-white-F border-none rounded-full"
      />
      Point {pointNumber}
    </p>
    <div className="bg-black-2 rounded-[3rem] md:rounded-[6rem] lg:rounded-[12rem] overflow-hidden mt-16 md:mt-24">
      <div
        className={`flex flex-col-reverse ${
          reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'
        } justify-around items-center p-6 md:p-10 gap-6 md:gap-9 w-full`}
      >
        <div
          className={`flex-1 text-center md:text-left ${
            reverseLayout ? 'order-1 md:order-2' : ''
          }`}
        >
          <p className="font-bmHannaAir text-2xl md:text-3xl lg:text-[3rem] text-white-F font-bold leading-relaxed">
            {title}
            <br />
            {description}
          </p>
        </div>
        <div className={`flex-1 ${reverseLayout ? 'order-2 md:order-1' : ''}`}>
          <Image
            src={image}
            width={654}
            height={0}
            alt="TMR onboarding Image"
            className="w-full max-w-[65.4rem] rounded-[2rem] md:rounded-[4rem] lg:rounded-[8rem] z-10"
          />
        </div>
      </div>
    </div>
  </section>
);

const CTAButton = () => (
  <Link
    href="/recommend"
    className="flex items-center justify-center w-full max-w-xs md:max-w-sm lg:max-w-md
      px-6 py-4 md:py-5 lg:py-6
      text-xl md:text-2xl lg:text-[3.6rem]
      bg-black-2 text-white-F
      rounded-lg md:rounded-xl lg:rounded-2xl
      font-bold
      transition-transform hover:scale-105"
  >
    메뉴 추천 받기
  </Link>
);

export default function Home() {
  const onboardingSections = [
    {
      pointNumber: '01',
      image: FirstOnboardingImage,
      title: '오메추!',
      description:
        '한식/양식/중식/일식/후식 별로\n오늘의 음식 메뉴를 추천 받아보세요!',
    },
    {
      pointNumber: '02',
      image: SecondOnboardingImage,
      title: '게시판을 통해 사람들과',
      description: '추천 할 음식 메뉴를 공유 해보세요!',
      reverseLayout: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Headers />
      <main className="flex-1 flex flex-col justify-center items-center gap-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-20">
        <section className="flex flex-col w-full max-w-4xl mx-auto">
          <Image
            src={Logo}
            width={650}
            height={100}
            alt="TMR Logo Image"
            priority
            className="w-full max-w-[65rem] h-auto px-4 sm:px-6"
          />
        </section>

        {onboardingSections.map((section) => (
          <OnboardingSection key={section.pointNumber} {...section} />
        ))}

        <CTAButton />
      </main>
      <Footer />
    </div>
  );
}

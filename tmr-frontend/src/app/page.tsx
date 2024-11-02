import Image from 'next/image';
import Logo from '../../public/images/tmr-logo.svg';
import FirstOnboardingImage from '../../public/images/tmr-section1.svg';
import SecondOnboardingImage from '../../public/images/tmr-section2.svg';
import Footer from './components/_common/Footer/Footer';
import Headers from './components/_common/Header/Headers';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Headers isLoggedIn={false} />
      <main className="flex flex-col justify-center items-center gap-[10rem] sm:px-6">
        <section className="flex flex-col">
          <Image
            src={Logo}
            width={650}
            height={100}
            alt="TMR Logo Image"
            className="w-[65rem] h-auto pl-10"
          />
        </section>
        <section className="relative flex flex-row items-center justify-center md:flex-col sm:flex-col gap-3 bg-black-2 rounded-[12rem] ">
          <div className="flex flex-row justify-around items-center px-[10rem] gap-9 md:flex-col-reverse sm:flex-col-reverse">
            <p className="flex justify-center items-center md:translate-y-[-7rem] sm:translate-y-[-7rem] font-bmHannaAir text-wrap text-[3rem] sm:text-[2rem] text-white-F font-bold">
              오메추!
              <br />
              한식/양식/중식/일식/후식 별로
              <br /> 오늘의 음식 메뉴를 추천 받아보세요!
            </p>
            <Image
              src={FirstOnboardingImage}
              width={654}
              height={585}
              alt="TMR onboarding Image"
              className="w-[65.4rem] h-[58.5rem] rounded-[8rem] md:w-[45.4rem]"
            />
          </div>
          <p className="font-bmHannaPro text-[10rem] md:text-[8rem] sm:text-[5rem] font-bold absolute  text-gray-9 translate-x-[-50rem] md:translate-x-[-26rem] sm:translate-x-[-11rem] translate-y-[-28rem] md:translate-y-[-36rem]  -rotate-12 opacity-50">
            Point 01
          </p>
        </section>
        <section className="relative flex flex-row items-center justify-center md:flex-col sm:flex-col gap-3 bg-black-2 rounded-[12rem] ">
          <div className="flex flex-row justify-around items-center px-[10rem] gap-9 md:flex-col sm:flex-col">
            <Image
              src={SecondOnboardingImage}
              alt="TMR onboarding Image"
              width={654}
              height={585}
              className="w-[65.4rem] h-[58.5rem] rounded-[8rem] md:w-[45.4rem]"
            />
            <p className="flex justify-center items-center md:translate-y-[-7rem] sm:translate-y-[-7rem] font-bmHannaAir text-wrap text-[3rem] sm:text-[2rem] text-white-F font-bold">
              게시판을 통해 사람들과 <br />
              추천 할 음식 메뉴를 공유 해보세요!
            </p>
          </div>
          <p className="font-bmHannaPro text-[10rem] md:text-[8rem] sm:text-[5rem] font-bold absolute  text-gray-9 translate-x-[-50rem] md:translate-x-[-26rem] sm:translate-x-[-11rem] translate-y-[-28rem] md:translate-y-[-34rem] sm:translate-y-[-34rem] -rotate-12 opacity-50">
            Point 02
          </p>
        </section>
        <Link
          href="/recommend"
          className="flex items-center justify-center w-[31.7rem]  h-[7.2rem] rounded-[0.6rem] px-[2.2rem] py-[1.8rem] sm:w-[23.7rem] sm:h-[7.9rem] sm:rounded-[0.7rem] sm:px-[2.4rem] sm:py-[2rem] md:w-[25.7rem] md:h-[8.7rem] md:rounded-[0.8rem] md:px-[2.6rem] md:py-[2.2rem] bg-[#2B2B2B] text-[#FFFFFF] text-[3.6rem] sm:text-[1.4rem] md:text-[1.6rem] text-center translate-y-[-5rem] font-bold"
        >
          메뉴 추천 받기
        </Link>
      </main>
      <Footer />
    </>
  );
}

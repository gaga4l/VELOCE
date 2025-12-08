const HeroText = () => {
  return (
    <div className="bg-background3 px-[30px] pt-[50px] pb-[100px] text-center">
      <div className="flex flex-col gap-[41px]">
        <p className="font-geist font-bold text-headline2 text-[13px] leading-[110%] tracking-[-5%] md:text-[14px] lg:text-[15px]">
          ABOUT
        </p>
        <p className="font-staatliches text-headline2 text-[40px] leading-[110%] tracking-[-0.5%] md:tracking-[-1%] md:text-[50px] lg:text-[60px] ">
          {"Véloce represents a new era of the aperitif, where flavor and functionality converge in a beautifully crafted, alcohol-free beverage.".toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default HeroText;

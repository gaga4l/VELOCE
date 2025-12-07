import AboutButton from "./AboutButton";
const AboutSection = () => {
  return (
    <section className="bg-background1 px-5 pt-[30px] pb-[100px] md:px-[30px]">
      <div className="w-full h-fit flex flex-col gap-[50px]">
        <p className="font-staatliches text-[40px] leading-[110%] tacking-[-0.5%] md:text-[50px] md:tracking-[-1%] lg:text-[60px]">
          Véloce is the ZERO-PROOF aperitif for modern living, crafted with super
          herbs and nutraceuticals to elevate your well-being, without
          compromising the sophisticated ritual of the aperitif.
        </p>
        <AboutButton />
      </div>
      
    </section>
  )
}

export default AboutSection;
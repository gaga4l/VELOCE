import Button from "../../Shared/Button/Button";
const AboutSection = () => {
  return (
    <section className="w-fit h-fit gap-[50px] flex flex-col pl-5 pr-5 pt-[30px] pb-[100px] bg-background1">
      <p className="text-headline1 font-staatliches text-[38px]">
        Véloce is the ZERO-PROOF aperitif for modern living, crafted with super
        herbs and nutraceuticals to elevate your well-being, without
        compromising the sophisticated ritual of the aperitif.
      </p>
      <Button strokeClr="accent1" textClr="background2" background="accent1" />
    </section>
  );
};

export default AboutSection;

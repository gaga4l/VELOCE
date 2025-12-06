import image2 from "../../../assets/image2.webp"
import Button from "../../Shared/Button/Button";
const CtaSection = () => {
  return (
    <section className="w-full h-[536px] " style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <div className="flex flex-col w-full h-fit bg-background2 p-[30px] gap-[60px]">
        <p className="font-staatliches text-[32px]">The only SPIRIT-FREE aperitif that tastes as good as it makes you feel.</p>
        <Button textClr="background2" strokeClr="accent1" background="accent1" />
      </div>
    </section>

  )
}

export default CtaSection;
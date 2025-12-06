import image2 from "../../../assets/image2.webp"
import ShopNowButton from "./ShopNowButton";
const CtaSection = () => {
  return (
    <section className="w-full h-[536px] md:h-[540px]" style={{backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <div className="flex flex-col w-full h-fit bg-background2 p-[30px] gap-[60px] md:w-[450px] md:h-fit">
        <p className="font-staatliches text-[32px] md:text-[38px] md:leading-[110%] md:tracking-[1%]">The only SPIRIT-FREE aperitif that tastes as good as it makes you feel.</p>
        <ShopNowButton />
      </div>
    </section>

  )
}

export default CtaSection;
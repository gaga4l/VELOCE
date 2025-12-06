import NewTag from "../../../assets/Circular Tag.svg";
import FeatureProductImage from "../../../assets/maxim-hopman-NLCKduPjJqo-unsplash.jpg";
const FeaturedProduct = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${FeatureProductImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="backdrop-brightness-75 w-full h-[800px] px-11 py-20 md:px-[94px] md:py-20">
          <div className="flex flex-col justify-between items-center h-full md:justify-end md:max-w-[612px]">
            <img className="md:w-[115px] md:h-11 self-start" src={NewTag} alt="New Tag" />
          <div className="text-center px-[33px] flex flex-col gap-2 w-[287px] items-center justify-center md:w-fit md:p-0 md:text-center">
            <p className="font-staatliches wrap-break-word text-[100px]  text-headline2 leading-[80%] tracking-[1%] break-all md:text-[130px] md:break-normal">
              Primavera
            </p>
            <p className="font-staatliches text-[22px] text-body2 leading-[145%] tracking-[1%] md:text-[24px] md:leading-[135%]">
              A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
            </p>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;

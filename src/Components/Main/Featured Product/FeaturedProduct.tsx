import NewTag from "../../../assets/Circular Tag.svg";
import FeatureProductImage from "../../../assets/maxim-hopman-NLCKduPjJqo-unsplash.jpg";
const FeaturedProduct = () => {
  return (
    <section style={{
      backgroundImage: `url(${FeatureProductImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }} 
    className="md:h-[800px] md:w-full"
    > 
        <div className="backdrop-brightness-75 w-full h-full md:px-[94px] md:py-20 md:flex md:items-end md:justify-center ">
          <div className="md:w-[509px] md:h-fit md:p-0 md:flex md:flex-col md:gap-2">
            <div className="md:w-[115px] md:h-11"><img src={NewTag} alt="New Tag" /></div>
            <div className="md:w-fit md:h-fit md:text-center md:flex md:flex-col md:gap-2 ">
              <p className="font-staatliches text-headline2 md:text-[130px] md:leading-[80%] md:tracking-[1%] md:text-left">Primavera</p>
              <p className="font-staatliches text-body2 md:w-full md:text-[24px] md:leading-[135%] md:tracking-[1%]">A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.</p>
            </div>
          </div>
        </div>
  
    </section>
  );
};

export default FeaturedProduct;

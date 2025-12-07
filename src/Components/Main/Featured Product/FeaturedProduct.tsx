import NewTag from "../../../assets/Circular Tag.svg";
import FeatureProductImage from "../../../assets/maxim-hopman-NLCKduPjJqo-unsplash.jpg";
const FeaturedProduct = () => {
  return (
    <section style={{
      backgroundImage: `url(${FeatureProductImage})`
    }} 
    className="h-[800px] md:w-full bg-cover bg-center"
    > 
        {/*<div className="absolute inset-0 bg-black/40"></div>*/}
        <div className="backdrop-brightness-75 w-full h-full flex justify-center gap-2 px-11 py-20 md:px-[94px] md:items-end lg:px-[145px]">
          
          <div className="h-full w-[287px] flex flex-col items-center justify-between md:w-[509px] md:items-start md:h-fit md:p-0 md:gap-2 lg:w-fit lg:h-fit">
            <div className="w-[115px] h-11"><img src={NewTag} alt="New Tag" /></div>
            <div className="text-center flex flex-col gap-2 px-[33px] md:p-0 md:w-fit md:h-fit">
              <p className="font-staatliches text-headline2 text-[100px] leading-[80%] tracking-[1%] break-all md:text-[130px]  md:text-left lg:text-[150px]">Primavera</p>
              <p className="font-staatliches text-body2 md:w-full text-[22px] leading-[145%] w-[221px] tracking-[1%] md:text-[24px] md:leading-[135%]  lg:text-[30px] lg:w-[584px]">A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.</p>
            </div>
          </div>
        </div>
  
    </section>
  );
};

export default FeaturedProduct;

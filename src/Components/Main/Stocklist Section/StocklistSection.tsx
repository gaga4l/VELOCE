import StocklistImage from "../../../assets/stocklistist image.jpg";
const StocklistSection = () => {
  return (
    <section className="w-full h-fit">
      <div className="w-full h- fit px-[9px] py-[23px] bg-background1">
        <p className="font-staatliches text-headline1 text-[32px] leading-[120%] tracking-[1%] text-center ">
          Experience the refined taste of Véloce. Visit our premium stockists
          for your next alcohol-free aperitif.
        </p>
      </div>
      <img className="w-full h-[375px] object-cover object-center" src={StocklistImage} alt="stocklist image" />
    </section>
  );
};

export default StocklistSection;

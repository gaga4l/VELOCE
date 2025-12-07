interface Props {
  name: string;
  description: string;
  image: string;
}
const Product = ({ name, description, image }: Props) => {
  return (
    <article className="w-full h-fit flex flex-col gap-[30px] pb-[50px] min-w-[375px]">
      <div
        className="w-full aspect-square relative p-[30px] bg-cover bg-center md:h-[600px]"
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
        <p className="absolute z-10 font-staatliches text-[32px] text-[#ffffff] leading-[120%] tracking-[1%] md:text-[38px] md:leading-[110%] lg:[42px]">
          {name}
        </p>
      </div>
      <div className="w-full h-fit pr-[60px] flex flex-col gap-[30px]">
        <p className="font-staatliches text-[18px] text-body1 leading-[145%] tracking-[1%] md:text-[20px] md:leading-[135%] lg:leading-[130%]">
        {description}
      </p>
      <a
        href="#"
        className="font-staatliches text-[18px] text-body1 leading-[145%] tracking-[1%] md:text-[20px] md:leading-[135%] hover:opacity-60 transition-opacity duration-300"
      >
        Find near you
      </a>
      </div>
    </article>
  );
};

export default Product;

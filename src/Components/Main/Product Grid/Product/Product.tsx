interface Props {
  name: string;
  description: string;
  image: string;
}
const Product = ({ name, description, image }: Props) => {
  return (
    <article className="w-full h-[543px] flex flex-col gap-[30px] pb-[50px]">
      <div
        className="w-full relative aspect-3/3 px-[30px] py-[30px] bg-cover bg-center"
        style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
      >
        <p className="absolute font-staatliches text-[32px] text-[#ffffff] leading-[120%] tracking-[1%]">
          {name}
        </p>
      </div>
      <p className="font-staatliches text-[18px] text-body1 leading-[145%] tracking-[1%]">
        {description}
      </p>
      <a href="#" className="font-staatliches text-[18px] text-body1 leading-[145%] tracking-[1%]">
        Find near you
      </a>
    </article>
  );
};

export default Product;

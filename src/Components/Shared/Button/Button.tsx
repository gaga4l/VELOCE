interface Props{
  strokeClr: string;
  textClr: string;
  background: string;
}
const Button = ({strokeClr, textClr, background}: Props) => { 
  return (
    <div className={"bg-"+background+" outline-[1.3px] outline-"+strokeClr+" font-jaro text-"+textClr+" hover:text-"+background+" w-fit h-fit px-[26px] py-[7.8px] rounded-[50%/50%] flex align-middle justify-center"}>
      <button>
        Shop Now
      </button>
    </div>
  );
};

export default Button;
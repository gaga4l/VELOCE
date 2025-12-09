import { useNavigate } from "react-router-dom";

const ShopNowButton = () => {
  
  const navigate = useNavigate();
  return (
    <div className={"bg-accent1 outline-[1.3px] outline-accent1 font-jaro text-background2 hover:text-accent1 hover:bg-[#000000]/10 transition-all duration-300 w-fit h-fit px-[26px] py-[7.8px] rounded-[50%/50%] flex align-middle justify-center"}>
      <button onClick={() => navigate('/findus')} className="cursor-pointer md:text-[24px] md:leading-[139%]">
        Shop Now
      </button>
    </div>
  );
};

export default ShopNowButton;
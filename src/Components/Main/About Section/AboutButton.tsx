import { useNavigate } from "react-router-dom"
const AboutButton = () => {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/about')} className="bg-background1 outline-[1.3px] outline-[#000000] font-jaro text-accent1  hover:bg-[#000000]/10 transition-all duration-300 w-fit h-fit px-[26px] py-[7.8px] rounded-[50%/50%] flex align-middle justify-center lg:inset-0">
      <button className="cursor-pointer md:text-[24px] md:leading-[139%] md:tracking-[-1%] lg:text-[26px]">
        About Us
      </button>
    </div>
  );
};

export default AboutButton;
import BackgroundImage from "../../assets/BackgroundImage.webp";

const stocklistData = [
  {
    id: 1,
    country: "USA",
    location: `The Artisanal Grocer
    Hello@figma.com
    415-123-4567`.toUpperCase()
  },
  {
    id: 2,
    country: "Europe".toUpperCase(),
    location: `Le Marché Bio
    Hello@figma.com
    415-123-4567`.toUpperCase()
  },
  {
    id: 3,
    country: "Asia".toUpperCase(),
    location: `Kurashi & Co.
    Hello@figma.com
    415-123-4567`.toUpperCase()
  }
]

const Main = () => {
  return (
    <main className="flex justify-center items-center px-5 py-[120px] bg-cover bg-center  md:px-10 lg:px-[200px]" style={{backgroundImage: `url(${BackgroundImage})`}}>
      
      <div className="bg-background1 w-full flex flex-col items-center gap-[50px] px-6 pt-8 max-w-[335px] md:max-w-none">
        <p className="font-geist font-bold text-headline1 leading-[110%] tracking-[-5%] text-[13px] md:text-[14px] lg:text-[15px] ">OUR STOCK LISTS</p>
        <ul className="md:px-16 w-full">
          {stocklistData.map((item) => (
            <li className="w-full pt-5 pb-10 flex gap-2.5 border-t border-[#000000]" key={item.id}>
              <p className="w-full font-geist font-bold text-headline1 leading-[110%] tracking-[-5%] text-[13px] md:text-[14px] lg:text-[15px] ">{item.country}</p>
              <p className="w-full font-geist font-bold text-headline1 leading-[110%] tracking-[-5%] text-[13px] md:text-[14px] lg:text-[15px] ">{item.location}</p>
            </li>
          ))}
        </ul>
      </div>
      
    </main>
  )
}

export default Main;
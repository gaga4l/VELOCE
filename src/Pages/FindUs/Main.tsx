import BackgroundImage from "../../assets/BackgroundImage.webp";

const stocklistData = [
  {
    id: 1,
    country: "USA",
    location: {name: `The Artisanal Grocer`,
    email: `Hello@figma.com`,
    phone: `415-123-4567`}
  },
  {
    id: 2,
    country: "Europe",
    location: {name: `Le Marché Bio`,
    email: `Hello@figma.com`,
    phone: `415-123-4567`}
  },
  {
    id: 3,
    country: "Asia",
    location: {name: `Kurashi & Co.`,
    email: `Hello@figma.com`,
    phone: `415-123-4567`}
  }
]

const Main = () => {
  return (
    <main className="relative flex justify-center items-center px-5 py-[120px] bg-cover bg-center  md:px-10 lg:px-[200px]" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <div className="absolute inset-0 bg-accent1/20"></div>
      <div className="bg-background1 z-10 w-full flex flex-col items-center gap-[50px] px-6 pt-8">
        <p className="font-geist font-bold text-headline1 leading-[110%] tracking-[-5%] text-[13px] md:text-[14px] lg:text-[15px] ">OUR STOCK LISTS</p>
        <ul className="md:px-16 w-full">
          {stocklistData.map((item) => (
            <li className="w-full pt-5 pb-10 flex gap-2.5 border-t border-[#000000]" key={item.id}>
              <p className="w-full font-geist font-bold text-headline1 leading-[110%] tracking-[-5%] text-[13px] md:text-[14px] lg:text-[15px] ">{item.country}</p>
              <p className="w-full font-geist font-bold text-headline1 leading-[110%] tracking-[-5%] text-[13px] md:text-[14px] lg:text-[15px] "><a className=" hover:text-accent1/75 transition-all duration-300" href="/findus">{item.location.name}</a> <br /> {item.location.email} <br /> <a className=" hover:text-accent1/75 transition-all duration-300 " href="/findus">{item.location.phone}</a></p>
            </li>
          ))}
        </ul>
      </div>
      
    </main>
  )
}

export default Main;
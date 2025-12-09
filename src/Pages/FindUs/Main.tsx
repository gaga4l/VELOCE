import BackgroundImage from "../../assets/BackgroundImage.webp";
const Main = () => {
  return (
    <main className="flex justify-center items-center px-5 py-[120px] bg-cover bg-center md:px-10 lg:px-[200px]" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <div className="flex flex-col lg:gap-[] "></div>
    </main>
  )
}

export default Main;
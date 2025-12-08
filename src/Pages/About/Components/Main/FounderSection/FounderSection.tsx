import RecognitionList from "./RecognitionList";
const FounderSection = () => {
  return (
    <section className="grid h-[1537px] md:h-[1280px] lg:grid-cols-2 lg:h-[800px] ">
      <div className="bg-background2 flex md:h-[640px]  lg:flex-col gap-[41px] items-start px-[30px] py-10  ">
        <p className="font-geist font-bold text-headline1 text-[13px] leading-[110%] tracking-[-5%] md:text-[14px] lg:text-[15px] ">RECOGNITION</p>
        <RecognitionList />
      </div>
    </section>
  )
}

export default FounderSection;
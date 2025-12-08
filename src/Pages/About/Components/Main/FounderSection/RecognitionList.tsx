const listData = [
  {
    year: "2025",
    Recognition: "Best Botanical Blend"
  },
  {
    year: "2025",
    Recognition: "Gold Medal – Bittersweet Category"
  },
  {
    year: "2025",
    Recognition: "Best Sustainable Packaging"
  },
  {
    year: "2024",
    Recognition: "Eco-Friendly Brand of the Year"
  },
  {
    year: "2023",
    Recognition: "Editor's Choice – Best Aperitif"
  },
  {
    year: "2023",
    Recognition: "Most Elegant Bottle Design"
  },
  {
    year: "2022",
    Recognition: "Best Low & No Alcohol Beverage"
  },
]

const RecognitionList = () => {
  return (
    <ul>
      {listData.map(data => {
        return (
          <li className="font-staatliches  text-headline1 text-[22px] pt-4 pb-2.5 leading-[145%] tracking-[1%] outline md:text-[24px] md:leading-[135%] lg:leading-[130%] lg:text-[30px]" ><span className="font-geist font-bold leading-[115%] tracking-[-5%] text-[13px] md:text-[14px] lg:text-[15px] lg:mr-[30px]  ">{data.year}</span>{data.Recognition}</li>
        )
      })}
    </ul>
  )
}

export default RecognitionList;
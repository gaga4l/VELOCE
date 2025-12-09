import MacroMontero from "../../../../assets/marco-montero-pisani-5qTxX7nicco-unsplash.jpg"

const contactData = [
  {
    id: 1,
    contact: "Phone",
    value: "+1 (555) 123-4567"
  },
  {
    id: 2,
    contact: "Email",
    value: "info@veloce.com"
  },
  {
    id: 3,
    contact: "Social",
    value: "@veloce"
  }
]

const ContactInfo = () => {
  return (
  <section className="grid h-[1537px] md:h-[1280px] xl:grid-cols-2 lg:h-[800px]">
    <div className="relative h-[800px] md:h-[640px] lg:h-[800px] ">
      <img className="object-cover object-center h-full w-full saturate-0" src={MacroMontero} alt="Macro Montero Image" />
    </div>
    <div className="bg-background3 p-[30px] md:h-[800px] flex flex-col gap-[260px] md:justify-between ">
      <div className="flex flex-col gap-6">
        <p className="font-geist text-headline2 font-bold leading-[110%] tracking-[-5%] lg:text-[15px] ">CONTACT</p>
        <ul className="flex flex-col gap-6">
          {contactData.map(data => {
            return (
              <li className="font-staatliches text-headline2 text-[22px] leading-[145%] tracking-[1%] md:text-[24px] md:leading-[135%] lg:leading-[130%] lg:text-[30px] flex justify-between" key={data.id}>
                <span>{data.contact}</span> {data.value}
              </li>
            )
          })}
        </ul>
      </div>
      
      <div className="py-[30px] border-t border-[#ffffff] h-[180px] lg:text-center lg:h-fit">
        <p className="text-headline2 font-staatliches text-[100px] leading-[80%] tracking-[1%] md:text-[130px] lg:text-[150px] ">
          EST.2005
        </p>
      </div>
      
    </div>
  </section>
  )
}

export default ContactInfo;

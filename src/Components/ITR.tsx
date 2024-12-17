import icon1 from "../../public/table_left_align.png"
import { Link } from "react-router-dom";

const tableContent=[{link:"admin",name:"प्रशासन",name_eng:"PUTTY",num:"0",num2:"15",by:"boardadmin",date:"12 Sep 2024, 17:01"},
    {link:"admin",name:"प्रशासन",name_eng:"Document Scanners",num:"0",num2:"30",by:"maheshkumar",date:"31 Jul 2024, 14:15"},
    {link:"admin",name:"प्रशासन",name_eng:"DOT NET",num:"0",num2:"18",by:"maheshkumar",date:"31 Jul 2024, 14:12"},
    {link:"admin",name:"प्रशासन",name_eng:"AVASYAM",num:"0",num2:"47",by:"boardadmin",date:"20 Jun 2024, 11:34"},
    {link:"admin",name:"प्रशासन",name_eng:"Antivirus",num:"0",num2:"19",by:"boardadmin",date:"02 May 2024, 17:38"},
    {link:"admin",name:"प्रशासन",name_eng:"AMC of Computers & Printers (08-02-2024 to 07-02-2026)",num:"0",num2:"492",by:"maheshkumar",date:"08 Feb 2024, 10:42"},
    {link:"admin",name:"प्रशासन",name_eng:"SANSHRAY_A Backup Space",num:"0",num2:"22",by:"maheshkumar",date:"27 Jun 2023, 14:37"},
    {link:"admin",name:"प्रशासन",name_eng:"Kavach Installation Guide",num:"0",num2:"19",by:"boardadmin",date:"02 May 2023, 16:34"},
    {link:"admin",name:"प्रशासन",name_eng:"CYBERPOWER UPS Service Escalation Matrix and Invoice",num:"0",num2:"23",by:"maheshkumar",date:"22 Mar 2023, 09:40"},
    {link:"admin",name:"प्रशासन",name_eng:"OFFICE OPEN SOURCE",num:"0",num2:"265",by:"maheshkumar",date:"26 Jul 2022, 12:05"}
]

function ITR() {
  return (
    <div className="pt-52">
      <div className="text-2xl font-bold ml-4">
          प्रशासन/Admin
      </div>
      <div className="mt-2 ml-4 flex">
        <div className="text-md">
          New Topic
        </div>
        <div className="ml-5 text-md">
          Search this forum
        </div>
      </div>
      <div className=" pr-2 pt-5 pl-2">
      <table className="w-full border-solid border-2 border-black">
        <tr>
        <th className="w-full">
          <td className="w-[58vw] items-start text-left pl-2">Topic</td>
          <td className="w-[8vw]">Replies</td>
          <td className="w-[8vw]">
            Views
          </td>
          <td className="pl-10">
            Last Post
          </td>
        </th>
        </tr>
        {tableContent.map((table,index)=>(
          <Link to={table.link}>
          <tr key={index} className="flex items-center border-b-2 border-solid border-black">
            <td className="ml-2 w-[5vw]">
              <img src={icon1} className="w-10 h-10"/>
            </td>
            <td className="w-[55vw] font-bold ">
              {table.name} / {table.name_eng}
            </td>
            <td className="w-[8vw]">
              {table.num}
            </td>
            <td className="w-[8vw]">
              {table.num2}
            </td>
            <td className="mt-1 mb-1">
              {/* <div className="font-bold">
                {table.job}
              </div> */}
              <div>
                <span>by</span> <span className="font-bold">{table.by}</span>
              </div>
              <div>
                {table.date}
              </div>
            </td>
          </tr>
          </Link>
        ))}  
      </table>
      </div>
    </div>
  )
}

export default ITR
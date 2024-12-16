import icon1 from "../../public/table_left_align.png"
import { format } from 'date-fns';
import { Link } from "react-router-dom";

const tableContent=[{link:"admin",name:"प्रशासन",name_eng:"Admin",num:"253",num2:"253",job:"OFFICIAL BAG/LADIES PURSE REI...",by:"boardadmin",date:"10 Sep 2024, 16:51"},
  {link:"cghs", name:"सीजीएचएस",name_eng:"CGHS",num:"12",num2:"12",job:"CGHS LATEST GUIDELINES",by:"saketmital",date:"01 Jul 2024, 12:30"},
  {link:"Csd_Canteen", name:"सीजीएचएस",name_eng:"CSD Canteen",num:"12",num2:"12",job:"CSD Indicative Rate List as o...",by:"abdultauheed",date:"22 Oct 2024, 10:52"},
  {link:"Finance", name:"सीजीएचएस",name_eng:"Finance",num:"7",num2:"7",job:"TA/DA FORMS 2024",by:"finance",date:"18 Apr 2024, 14:59"},
  {link:"HRD", name:"सीजीएचएस",name_eng:"HRD",num:"16",num2:"16",job:"Training Completion Form",by:"boardadmin",date:"05 Jul 2024, 15:53"},
  {link:"ITR", name:"सीजीएचएस",name_eng:"Information Technology Group",num:"62",num2:"62",job:"PUTTY",by:"boardadmin",date:"12 sep 2024, 17:01"},
  {link:"Instrumentation", name:"सीजीएचएस",name_eng:"Instrumentation",num:"2",num2:"2",job:"Instrumentation Requisition F...",by:"sanjeevkumar",date:"08 Oct 2018, 14:57"},
  {link:"Library", name:"सीजीएचएस",name_eng:"Library",num:"27",num2:"27",job:"Wiley eBooks - SSPL",by:"library",date:"25 Apr 2023, 15:00"},
  {link:"Material_Management", name:"सीजीएचएस",name_eng:"Material Management Group",num:"52",num2:"52",job:"Pre-Contracted Section New Forms",by:"boardadmin",date:"15 Mar 2023, 10:26"},
  {link:"Mask_facility", name:"सीजीएचएस",name_eng:"Mask Facility",num:"0",num2:"0",job:"No posts"},
  {link:"Public", name:"सीजीएचएस",name_eng:"Public",num:"38",num2:"38",job:"PDF Merging & Spliting Software",by:"saketmital",date:"04 Jan 2024, 13:25"},
  {link:"Oms_group", name:"सीजीएचएस",name_eng:"OMS Group",num:"4",num2:"4",job:"Lecture on World Quality Day'...",by:"veenamakhija",date:"27 Nov 2018, 16:45"},
  {link:"Solid_State", name:"सीजीएचएस",name_eng:"Solid State Physics Laboratory",num:"21",num2:"21",job:"DRDO Oration Series ''Secrets...",by:"boardadmin",date:"20 Jan 2020, 14:56"},
  {link:"Sports", name:"सीजीएचएस",name_eng:"Sports",num:"2",num2:"2",job:"North zone TT result",by:"boardadmin",date:"07 Sep 2018, 16:33"},
  {link:"Technical", name:"सीजीएचएस",name_eng:"Technical Secreteriat",num:"1",num2:"1",job:"Form Format TS",by:"boardadmin",date:"02 May 2017, 11:34"},
  {link:"Wet_canteen", name:"सीजीएचएस",name_eng:"Wet Canteen",num:"0",num2:"0",job:"No posts"},
  {link:"Works_section", name:"सीजीएचएस",name_eng:"Works Section",num:"1",num2:"1",job:"Requisition Form For Hygiene ...",by:"sktomar",date:"24 Nov 2021, 17:42"},
  {link:"Workshop", name:"सीजीएचएस",name_eng:"Workshop",num:"1",num2:"1",job:"Work Order (MACHINE SHOP)",by:"boardadmin",date:"25 Jul 2024, 16:37"}
]

function Home() {
  const time=new Date();
  const formatted = format(time, 'dd MMMM yyyy, HH:mm');
  return (
    <div className="pt-52">
      <div className="w-full flex justify-end">
                <div className="mr-5">
                    It is currently {formatted}
                </div>
      </div>
      <div className="w-screen pr-2 pt-5 pl-2">
      <table className="w-full border-solid border-2 border-black">
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
              <div className="font-bold">
                {table.job}
              </div>
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

export default Home
import { HomeIcon, ReceiptIndianRupee, Settings, SquareChartGantt, Users } from "lucide-react"
import Company from "./Company"
import HeroButtons from "./HeroButtons"


const Hero = () => {
  return <div className='flex'>
    <div className='transition-all duration-1000 h-auto w-14 sm:w-64 bg-white-100'>
      <Company />
      <HeroButtons label="Home" icons={<HomeIcon/>}/>
      <HeroButtons label="Webinars" icons={<Users/>}/>
      <HeroButtons label="Billing" icons={<ReceiptIndianRupee/>}/>
      <HeroButtons label="User Management" icons={<SquareChartGantt/>}/>
      <HeroButtons label="Settings" icons={<Settings/>}/>
    </div>
  </div>
}

export default Hero

import logo from '../assets/logo.svg'
import Profilepic from './Profilepic'

const Company = () => {
  
  return (
    <div className="transition-all duration-500 flex items-center justify-between sm:w-64 w-full">
  <span className="m-2 items-center p-1 w-32 justify-center gap-1 bg-blue-500 rounded-xl hidden sm:flex">
    <img src={logo} alt="logo" className="size-4" />
    <div>
      <span className="text-gray-50">Webinar</span>
      <span className="text-blue-200">.gg</span>
    </div>
  </span>
  <Profilepic classname="h-8 w-10 m-2 rounded-lg"/>
</div>

  )
}

export default Company
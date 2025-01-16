import { useEffect, useState } from 'react';
import './App.css'
import Profilepic from './components/Profilepic'
import SidebarToggle from './components/icons/SidebarToggle'
import Hero from './components/Hero';
import { Calendar, MedalIcon, Plus, Video, VideoIcon, VideoOff, VideotapeIcon } from 'lucide-react';
import Down from './components/icons/Down';
import Left from './components/icons/Left';
import Right from './components/icons/Right';
import MeetButton from './components/meetButton';

function useMediaQueries(query: any) {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches);
    }
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener)
  }, [matches, query]);

  return matches;

}

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQueries("(min-width: 768px)")

  useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [isDesktop])

  return (
    <>
      <div className='bg-gray-200 min-h-screen flex'>
        {/* <div className=''>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div> */}
        <Hero />

        <MainContent />
      </div>
    </>
  )
}

function Sidebar({ sidebarOpen, setSidebarOpen }: any) {
  if (!sidebarOpen) {
    return <div className='fixed top-0 left-0'>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle />
      </div>

    </div>
  }

  return <div className='w-72 h-screen bg-red-100 fixed top-0 left-0 md:relative'>
    <div>
      <div className='cursor-pointer hover:bg-slate-200' onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SidebarToggle />
      </div>
    </div>

  </div>
}

function MainContent() {
  return <div className='w-full'>

    <div className='h-48 bg-slate-950'></div>
    <div className='grid grid-cols-1 md:grid-cols-11 gap-8 p-8'>

      <div className='rounded-2xl max-h-64 shadow bg-white-100 md:col-span-2 col-span-11 -translate-y-20 hidden md:block'>
        <div>
          <div className='flex flex-col p-4 justify-center items-center'>
            <Profilepic classname="h-20 w-20 rounded-xl" />
            <div className='font-bold mt-4'>Ankit Gupta</div>
            <div className='text-gray-500 mt-4'>saumya@gmail.com</div>
            <div className='text-gray-500'>9898789999</div>
            <div className='text-gray-500 mt-4'>Delhi,India</div>
          </div>
        </div>

      </div>

      <div className='flex flex-col col-span-11 md:col-span-6 max-w-auto'>
        <div>
          Monday, 14 October
        </div>
        <div className='text-blue-500 font-bold text-2xl pt-4'>
          Good Morning, Prabhleen!
        </div>

        <div className='rounded-2xl shadow bg-white-100 mt-6'>

          <div className='flex bg-gray-200 rounded-md p-2 mx-6 mt-6 justify-between'>
            <div className='flex gap-4'>
              <Calendar />
              <div className='flex gap-2'>
                <div>Monday, 14 October</div>
                <div> <Down /> </div>
              </div>
            </div>

            <div className='flex'>
              <div> <Left /> </div>
              <div> <Right /> </div>
            </div>

          </div>
          <MeetButton label="UX Webinar" />
          <MeetButton label="My first Webinar" />
          <MeetButton label="Important Webinar" />
          <MeetButton label="Webinar 1" />


        </div>
      </div>


      <div className='rounded-2xl max-h-72 shadow bg-white-100 md:col-span-3 col-span-11 mt-24'>
        <div className='m-8 flex justify-between items-center flex-wrap gap-y-8 '>
          <div className='flex flex-col p-1 gap-y-2 justify-center items-center '>
            <button className='p-2  rounded-lg bg-blue-200'> <Calendar /> </button>
            <span className='font-bold text-xs'>Schedule a Webinar</span>
          </div>
          <div className='flex flex-col p-1 gap-y-2 justify-center items-center '>
            <button className='p-2  rounded-lg bg-blue-200'> <Plus/>  </button>
            <span className='font-bold text-xs'>Join a Webinar</span>
          </div>
          <div className='flex flex-col p-1 gap-y-2 justify-center items-center '>
            <button className='p-2  rounded-lg bg-blue-200'> <VideotapeIcon/> </button>
            <span className='font-bold text-xs'>Open Recordings</span>
          </div>
          
        </div>


      </div>
    </div>
  </div>
}

export default App

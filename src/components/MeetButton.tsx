import Line from './icons/Line'
import { VideoIcon } from 'lucide-react'

const MeetButton = ({label}: any) => {
    return (
        <>
            <div className='flex p-2 mx-6'>
                <div className='flex flex-col'>
                    <div className=''>11:30 AM</div>
                    <div className='text-sm text-gray-500'>11:30 AM</div>

                </div>

                <div className='flex items-center'>
                    <div className='m-0 p-0'>
                        <Line />
                    </div>
                    <div>
                        <div className='flex gap-2 '>
                            <div className='text-gray-500'>Live</div>
                            <div><VideoIcon fill='red' /></div>
                        </div>
                        <div>
                            <div className=''>{label}</div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MeetButton
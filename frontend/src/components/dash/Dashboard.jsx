import { useSelector } from 'react-redux'

import votesCount from './../../resources/images/votes_cout.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const user = useSelector(state => state.user.userInfo)

    return (
        <div className='w-4/5 px-8 mb-16'>
            <div className='w-full'>
                <p className='text-2xl font-bold'>Hello <span className='color-application'>{user.displayName.split(' ')[0]}</span></p>
                <p className='text-gray-600 text-sm'>Welcome to the voting platform!</p>
            </div>
            <div className="cards w-full flex flex-wrap justify-between mt-10 px-20">
                <div className='w-45prec px-4 py-10'>
                    <p className='w-full'>
                        <p className='font-bold text-xl'>Onging Elections</p>
                        <ul className='mt-5 ml-5 list-disc text-gray-700'>
                            <li>Country Election</li>
                            <li>State Election</li>
                            <li>District Election</li>
                            <li>School Captain Election</li>
                        </ul>
                    </p>
                </div>
                <div className='w-45prec px-4 py-10'>
                    <p className='font-bold text-xl'>
                        Calendar
                        <FontAwesomeIcon className='ml-2' icon={faCalendar} />
                    </p>
                    <div className='flex justify-between mt-5'>
                        <p className='selectedDate'>Today</p>
                        <p className='text-gray-500'>Tomorrow</p>
                        <p className='text-gray-500'>This Month</p>
                    </div>

                    <div className='flex flex-wrap mx-10 text-center px-5 gap-2 mt-4 w-full py-5'>
                        <div className='1/3 text-xl'>27 <br /> Sept</div>
                        <div className='2/3 dash__date'>President student council</div>
                    </div>
                </div>
            </div>
            <div className='cards w-full mt-5 px-20'>
                <div className='w-full p-6'>
                    <p className='font-bold text-xl'>
                        Moniter your voting process here
                    </p>
                    <img src={votesCount} alt="charts" className='mt-5' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
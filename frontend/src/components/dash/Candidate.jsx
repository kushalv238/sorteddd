import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { countryElectionCandidates, stateElectionCandidates, schoolCaptainElectionCandidates } from '../../resources/candidates';

import scrollToTop from '../../utility/scrollToTop';

const Candidate = () => {
    const { id } = useParams();

    const identifier = parseInt(String(id).charAt(0))

    const [user, setUser] = useState();

    useEffect(() => {
        if (identifier === 9) {
            setUser(countryElectionCandidates.find(candidate => candidate.id === parseInt(id)))
        } else if (identifier === 6) {
            setUser(stateElectionCandidates.find(candidate => candidate.id === parseInt(id)))
        } else if (identifier === 4) {
            setUser(schoolCaptainElectionCandidates.find(candidate => candidate.id === parseInt(id)))
        }
    }, [])

    if (!user) {
        return (
            <></>
        )
    }

    return (
        <div className='w-4/5 px-8 mb-16'>
            <div className='candidate__bg w-full py-10'>
                <div className='text-center'>
                    <p className='text-5xl text-bold text-white'>VOTE FOR {user.name}</p>
                </div>
                <div className="flex flex-wrap items-center justify-start">
                    <div className="w-1/3 px-10 mt-10">
                        <div className="candidate__img-wrapper">
                            <img src={user.photoURL} alt="" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <ul className='text-white text-lg list-disc'>
                            <li>{user.name}</li>
                            <li>{user.designation}</li>
                            <li>{user.age} years old</li>
                            <li>"Lorem ipsum dolor sit amet consectetur."</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full mt-10'>
                <p className='text-3xl text-bold'>Campaign promise</p>
                <p className='mt-5'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eius saepe repellat esse, consectetur consequuntur, iste voluptate dolor ab asperiores obcaecati cum?
                </p>
                <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi!
                </p>
                <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa temporibus voluptatum pariatur nemo quae aut numquam eius ipsum expedita beatae id tempore consequatur veniam dicta, quasi ratione esse nesciunt delectus.
                </p>
                <p className="mt-5 ml-5">
                    <ul className='list-disc'>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat a veniam?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                </p>
            </div>
            <div className="mt-10 w-full flex justify-center">
                <Link onClick={scrollToTop} to={`/dash/vote-candidate/${user.id}`} className='confirm__vote-btn'>Vote</Link>
            </div>
        </div>
    );
}

export default Candidate
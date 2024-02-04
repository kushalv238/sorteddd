import { useParams } from "react-router-dom"
import { countryElectionCandidates, stateElectionCandidates, schoolCaptainElectionCandidates } from '../../resources/candidates';

import votedImg from './../../resources/images/voteSuccess.jpg'
import { useEffect, useState } from "react";

const VotedPage = () => {
    const { id } = useParams();
    const identifier = parseInt(String(id).charAt(0))

    const [user, setUser] = useState()

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
        <div className="w-4/5 px-8 mb-16 flex flex-wrap justify-center items-center h-48 mt-20">
            <div className="w-1/2">
                <p className="text-4xl text-center font-bold">Voting Successful</p>
            </div>
            <div className="px-10 flex justify-center w-full">
                <img className="w-1/3" src={votedImg} alt="" />
            </div>
            <div>
                <p className="text-xl text-gray-500">You have successfully voted for <span className="underline font-bold">{user.name}</span></p>
            </div>
        </div>
    )
}

export default VotedPage
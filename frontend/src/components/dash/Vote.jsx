import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

import { countryElectionCandidates, stateElectionCandidates, schoolCaptainElectionCandidates } from "../../resources/candidates";

import scrollToTop from "../../utility/scrollToTop";

const Vote = () => {
    const handleDragStart = (e) => e.preventDefault();

    const [items, setItems] = useState([])
    const [items2, setItems2] = useState([])
    const [items3, setItems3] = useState([])

    useEffect(() => {
        setItems(
            countryElectionCandidates.map((candidate, key) =>
                <div className="flex flex-wrap justify-center carousel-item-wrapper" onDragStart={handleDragStart}>
                    <div className="w-full flex justify-center">
                        <div className="candidate__card-img">
                            <img className="" src={candidate.photoURL} alt={candidate.name} />
                        </div>
                    </div>
                    <div className="text-center mt-5 w-full">
                        <p className="text-xl">{candidate.name}</p>
                        <p className="text-sm text-gray-500">{candidate.designation}</p>
                    </div>

                    <div className="flex flex-wrap justify-center w-full gap-2 text-sm mt-5">
                        <Link onClick={scrollToTop} to={`/dash/vote-candidate/${candidate.id}`} className="vote__btn">Vote</Link>
                        <Link onClick={scrollToTop} to={`/dash/candidate/${candidate.id}`} className="viewdet__btn">View details</Link>
                    </div>
                </div>
            )
        )
        setItems2(
            stateElectionCandidates.map((candidate, key) =>
                <div className="flex flex-wrap justify-center carousel-item-wrapper" onDragStart={handleDragStart}>
                    <div className="w-full flex justify-center">
                        <div className="candidate__card-img">
                            <img className="" src={candidate.photoURL} alt={candidate.name} />
                        </div>
                    </div>
                    <div className="text-center mt-5 w-full">
                        <p className="text-xl">{candidate.name}</p>
                        <p className="text-sm text-gray-500">{candidate.designation}</p>
                    </div>

                    <div className="flex flex-wrap justify-center w-full gap-2 text-sm mt-5">
                        <Link onClick={scrollToTop} to={`/dash/vote-candidate/${candidate.id}`} className="vote__btn">Vote</Link>
                        <Link onClick={scrollToTop} to={`/dash/candidate/${candidate.id}`} className="viewdet__btn">View details</Link>
                    </div>
                </div>
            )
        )
        setItems3(
            schoolCaptainElectionCandidates.map((candidate, key) =>
                <div className="flex flex-wrap justify-center carousel-item-wrapper" onDragStart={handleDragStart}>
                    <div className="w-full flex justify-center">
                        <div className="candidate__card-img">
                            <img className="" src={candidate.photoURL} alt={candidate.name} />
                        </div>
                    </div>
                    <div className="text-center mt-5 w-full">
                        <p className="text-xl">{candidate.name}</p>
                        <p className="text-sm text-gray-500">{candidate.designation}</p>
                    </div>

                    <div className="flex flex-wrap justify-center w-full gap-2 text-sm mt-5">
                        <Link onClick={scrollToTop} to={`/dash/vote-candidate/${candidate.id}`} className="vote__btn">Vote</Link>
                        <Link onClick={scrollToTop} to={`/dash/candidate/${candidate.id}`} className="viewdet__btn">View details</Link>
                    </div>
                </div>
            )
        )

    }, [])

    const res = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 }
    }


    return (
        <div className='w-4/5 px-8 mb-16'>
            <div className='w-full'>
                <p className='text-2xl font-bold'>Your Vote is Secure, Your Vote Counts</p>
                <p className='text-gray-600 text-sm'>Welcome to the voting platform!</p>
            </div>

            <div className="mt-10 carousel-wrapper candidates p-2">
                <p className="text-xl mb-2 flex items-center gap-2"><span className="active__election"></span>Country Elections</p>
                <AliceCarousel
                    items={items}
                    mouseTracking={true}
                    controlsStrategy="alternate"
                    responsive={res}
                    autoPlay={true}
                    autoPlayControls={true}
                    autoPlayStrategy="none"
                    autoPlayInterval={1400}
                    infinite={true}
                    keyboardNavigation={true}
                    touchTracking={true}
                />
            </div>

            <div className="mt-10 carousel-wrapper candidates p-2">
                <p className="text-xl mb-2 flex items-center gap-2"><span className="active__election"></span>State Elections</p>
                <AliceCarousel
                    items={items2}
                    mouseTracking={true}
                    controlsStrategy="alternate"
                    responsive={res}
                    autoPlay={true}
                    autoPlayControls={true}
                    autoPlayStrategy="none"
                    autoPlayInterval={1400}
                    infinite={true}
                    keyboardNavigation={true}
                    touchTracking={true}
                />
            </div>

            <div className="mt-10 carousel-wrapper candidates p-2">
                <p className="text-xl mb-2 flex items-center gap-2"><span className="active__election"></span>School Elections</p>
                <AliceCarousel
                    items={items3}
                    mouseTracking={true}
                    controlsStrategy="alternate"
                    responsive={res}
                    autoPlay={true}
                    autoPlayControls={true}
                    autoPlayStrategy="none"
                    autoPlayInterval={1400}
                    infinite={true}
                    keyboardNavigation={true}
                    touchTracking={true}
                />
            </div>
        </div>
    )
}

export default Vote
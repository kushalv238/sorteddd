import { useEffect } from "react";

import { useSelector } from "react-redux";

import './../../stylesheets/home.css'

import heroImg from './../../resources/images/hero_img.jpg'
import personVoted from './../../resources/images/personVoteed.jpg'
import graph from './../../resources/images/graph.jpg'
import votesCount from './../../resources/images/votes_cout.jpg'

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faServer, faVoteYea } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
    const user = useSelector(state => state.user.userInfo);
    const navigate = useNavigate()

    if(user) {
        navigate('dash')
    }

    useEffect(() => {
        props.setOnPage(1)
    }, [props])

    return (
        <>
            <div className="flex flex-wrap items-center justify center w-full mt-10 px-10">
                <div className="w-1/2 flex flex-wrap gap-5">
                    <h2 className="text-5xl">Fast, Secure and Accessible Voting System</h2>
                    <p className="text-gray-600">Let's make voting and elections easy for you. This is designed to ensure a secured voting platform.</p>
                    <Link to="auth/signup" className='registerBtn mt-10'>
                        Register as a voter
                    </Link>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className="features feat1 flex items-center flex-wrap gap-20">
                <div className="w-full text-center">
                    <p className="text-3xl">Our features</p>
                    <p>Secured system that guarentee seamless Elections</p>
                </div>
                <div className="flex items-center justify-evenly flex-wrap w-full">
                    <div className="w-64 h-64 relative">
                        <div className="fontawe-wrapper w-5 h-5">
                            <FontAwesomeIcon icon={faLock} className="text-6xl" />
                        </div>
                        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop>                            <stop id="stop2" stopColor="rgba(255, 255, 255, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M20.9,-35.5C27.4,-32.4,33.3,-27.5,37.5,-21.3C41.7,-15.1,44.1,-7.5,43,-0.6C41.9,6.3,37.3,12.5,33.1,18.8C29,25.1,25.4,31.5,20,35.1C14.5,38.7,7.3,39.6,0.2,39.3C-6.9,38.9,-13.8,37.4,-20.7,34.7C-27.7,31.9,-34.7,28,-38.8,22C-42.9,16,-44,8,-44,0C-43.9,-7.9,-42.6,-15.9,-38.2,-21.4C-33.9,-26.9,-26.4,-29.9,-19.6,-32.8C-12.7,-35.7,-6.3,-38.4,0.4,-39.1C7.2,-39.8,14.3,-38.5,20.9,-35.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "all 0.3s ease 0s" }} stroke="url(#sw-gradient)"></path>              </svg>
                        <p className="text-center text-xl">Secured Platform</p>
                        <p className="text-center text-sm mt-3 text-gray-400">With our platform your data is secured.</p>
                    </div>
                    <div className="w-64 h-64 relative">
                        <div className="fontawe-wrapper w-5 h-5">
                            <FontAwesomeIcon icon={faVoteYea} className="text-6xl" />
                        </div>
                        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop>                            <stop id="stop2" stopColor="rgba(255, 255, 255, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M20.9,-35.5C27.4,-32.4,33.3,-27.5,37.5,-21.3C41.7,-15.1,44.1,-7.5,43,-0.6C41.9,6.3,37.3,12.5,33.1,18.8C29,25.1,25.4,31.5,20,35.1C14.5,38.7,7.3,39.6,0.2,39.3C-6.9,38.9,-13.8,37.4,-20.7,34.7C-27.7,31.9,-34.7,28,-38.8,22C-42.9,16,-44,8,-44,0C-43.9,-7.9,-42.6,-15.9,-38.2,-21.4C-33.9,-26.9,-26.4,-29.9,-19.6,-32.8C-12.7,-35.7,-6.3,-38.4,0.4,-39.1C7.2,-39.8,14.3,-38.5,20.9,-35.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "all 0.3s ease 0s" }} stroke="url(#sw-gradient)"></path>              </svg>
                        <p className="text-center text-xl">Vote Online</p>
                        <p className="text-center text-sm mt-3 text-gray-400">Just with a few clicks you can vote your preferred candidates</p>
                    </div>
                    <div className="w-64 h-64 relative">
                        <div className="fontawe-wrapper w-5 h-5">
                            <FontAwesomeIcon icon={faServer} className="text-6xl" />
                        </div>
                        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop>                            <stop id="stop2" stopColor="rgba(255, 255, 255, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M20.9,-35.5C27.4,-32.4,33.3,-27.5,37.5,-21.3C41.7,-15.1,44.1,-7.5,43,-0.6C41.9,6.3,37.3,12.5,33.1,18.8C29,25.1,25.4,31.5,20,35.1C14.5,38.7,7.3,39.6,0.2,39.3C-6.9,38.9,-13.8,37.4,-20.7,34.7C-27.7,31.9,-34.7,28,-38.8,22C-42.9,16,-44,8,-44,0C-43.9,-7.9,-42.6,-15.9,-38.2,-21.4C-33.9,-26.9,-26.4,-29.9,-19.6,-32.8C-12.7,-35.7,-6.3,-38.4,0.4,-39.1C7.2,-39.8,14.3,-38.5,20.9,-35.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "all 0.3s ease 0s" }} stroke="url(#sw-gradient)"></path>              </svg>
                        <p className="text-center text-xl">Real Time Results</p>
                        <p className="text-center text-sm mt-3 text-gray-400">View real time voting results and scores for each candidate</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center py-20 px-10 gap-10">
                <div className="w-full text-center color-applMain2">
                    <p className="text-4xl font-bold">How it works</p>
                    <p>It's simple and easy to use with these 3 steps</p>
                </div>
                <div className="flex flex-wrap w-full dotted-left-border mx-10">
                    <div className="w-1/2 flex flex-wrap items-center">
                        <div className="w-full"><span className="feat-numbers">1</span><span className="ml-4 color-applMain text-xl w-full">Signup</span> <p className="text-gray-500 ml-9">Create an account on the platform to vote.</p> </div>
                        <div className="w-full"><span className="feat-numbers">2</span><span className="ml-4 color-applMain text-xl w-full">Vote</span> <p className="text-gray-500 ml-9">Vote for your preferred candidate</p> </div>
                        <div className="w-full"><span className="feat-numbers">3</span><span className="ml-4 color-applMain text-xl w-full">View election results</span> <p className="text-gray-500 ml-9">View election results of various candidates</p> </div>
                    </div>
                    <div className="w-1/2 flex items-center">
                        <img src={personVoted} alt="" />
                    </div>
                </div>
            </div>

            <div className="features flex items-center flex-wrap">
                <div className="w-1/2">
                    <img src={graph} alt="" />
                </div>
                <div className="paddingx-5rem w-1/2 flex items-center justify-center flex-wrap gap-5">
                    <p className="text-4xl">View Live Results</p>
                    <p className="text-gray-400">View live results of elections directly on our home page without loggin in. <br />You can also check out the electoral candidate page via the link given below</p>
                    <Link to="auth/signup" className='registerBtn mt-10 view-btn'>
                        View candidate profile
                    </Link>
                </div>
            </div>

            <div className="flex flex-wrap justify-center py-20 gap-10">
                <div className="w-full text-center color-applMain">
                    <p className="text-4xl font-bold">Moniter the voting system</p>
                    <p>Track the number of votes and voters with our real time counter</p>
                    <img src={votesCount} alt="count" className="mt-5" />
                </div>
            </div>
        </>
    )
}

export default Home
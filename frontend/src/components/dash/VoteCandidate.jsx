import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { countryElectionCandidates, stateElectionCandidates, schoolCaptainElectionCandidates } from '../../resources/candidates';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useUserAuth } from '../../context/UserAuthContext';

import loading from './../../resources/loading.gif'

import scrollToTop from '../../utility/scrollToTop';

const VoteCandidate = () => {
    const { id } = useParams();

    const navigate = useNavigate()

    const identifier = parseInt(String(id).charAt(0))

    const [user, setUser] = useState();
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const [imgSubmitted, setImgSubmitted] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const { logOut } = useUserAuth();

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const [confirmVoteBtnClicked, setConfirmVoteBtnClicked] = useState(false)

    let innerBtn;
    if (confirmVoteBtnClicked) {
        innerBtn = <img className='w-5' src={loading} alt="Loading..." />
    } else {
        innerBtn = "Confirm Vote"
    }

    const confirmVote = () => {
        // increment vote for user
        setConfirmVoteBtnClicked(true)

        setTimeout(() => {
            scrollToTop()
            navigate(`/dash/confirm-candidate-voted/${id}`)
        }, 2000);
    }

    const captureImage = async () => {
        if (videoRef.current && canvasRef.current) {
            setImgSubmitted(true)

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;

            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

            const imageDataURL = canvas.toDataURL('image/png');

            console.log('Captured Image:', imageDataURL);

            setTimeout(() => {
                setUserAuthenticated(true)
            }, 4000);

            // try {
            //     const serverPort = 5000;
            //     const response = await fetch(`http://localhost:${serverPort}/upload-endpoint`, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify({ image: imageDataURL }),
            //     });

            //     console.log('Server Response:', response);

            //     if (response.ok) {
            //         console.log('Image successfully uploaded to the server.');
            //         setUserAuthenticated(true)
            //     } else {
            //         console.error('Server responded with an error:', response.status, response.statusText);

            //         await logOut()
            //         window.location.pathname = "/";
            //     }

            // } catch (error) {
            //     console.error('Error sending image to server:', error);
            // }
        }
    };

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

    if (!userAuthenticated) {
        return (
            <div className='w-4/5 px-8 mb-16 flex flex-wrap mt-20'>
                <div className='w-1/2'>
                    <p className='text-2xl text-bold'>Let's make sure it's you and not an intruder</p>
                    <ul className='list-disc ml-5 my-5'>
                        <li>Click the `Start Camera` button given below</li>
                        <li>Click allow if asked for permission to use camera</li>
                        <li>Then most importantly; SMILE :)</li>
                        <li>Finally click on the `Capture Image` button to confirm your image</li>
                    </ul>
                    <button className='confirm__vote-btn mr-5' onClick={startCamera}>Start Camera</button>
                    <button className='confirm__vote-btn' onClick={captureImage}>Capture Image</button>
                </div>
                <div className="w-1/2 flex flex-wrap justify-center border-2 h-72 flex justify-center items-center">
                    {
                        imgSubmitted ?
                            <>
                                <img className='w-20 h-20' src={loading} alt="loading..." />
                                <p className='w-full text-center text-2xl'>Please wait till we confirm your identity</p>
                            </>
                            : <>
                                <video ref={videoRef} autoPlay style={{ width: "20rem", height: "20rem", display: 'block', margin: '10px 0' }} />
                                <canvas ref={canvasRef} style={{ display: 'none' }} />
                            </>
                    }
                </div>
            </div>
        )
    }

    const modalStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid var(--clr-application-main)',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className='w-4/5 px-8 mb-16'>
            <div className='candidate__bg w-full py-10'>
                <div className='text-center'>
                    <p className='text-5xl text-bold text-white'>You are eligible to VOTE FOR {user.name}</p>
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
                <span onClick={handleOpen} className='confirm__vote-btn'>Confirm Vote</span>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyles}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Once this action is done it cannot be undone
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <span onClick={confirmVote} className='confirm__vote-btn mt-10 w-2/3 flex justify-center'>{innerBtn}</span>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default VoteCandidate
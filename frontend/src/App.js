import { Routes, Route as Link } from 'react-router-dom';

import { UserAuthContextProvider } from "./context/UserAuthContext";

// importing components
import * as Component from './components';

import { useState, useEffect } from 'react';

import scrollToTop from './utility/scrollToTop';

function App() {
    const [onPage, setOnPage] = useState(1);
    const [notTop, setNotTop] = useState({ header: false, toTopButton: false });

    useEffect(() => {
        function showHideToTopButton() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setNotTop({ ...notTop, header: true });

                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    setNotTop({ header: true, toTopButton: true });
                }
            } else {
                setNotTop({ header: false, toTopButton: false });
            }
        }

        window.addEventListener('scroll', showHideToTopButton);

        return () => {
            window.removeEventListener('scroll', showHideToTopButton);
        };
    }, [notTop])

    useEffect(() => {
        scrollToTop();
    }, [onPage])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <UserAuthContextProvider>
                        <Component.Header onPage={onPage} setOnPage={setOnPage} notTop={notTop.header} />
                        <Routes>
                            <Link exact path='/' element={<Component.Home setOnPage={setOnPage} />} />
                            <Link exact path='about' element={<Component.About />} />
                            <Link exact path='contact' element={<Component.Contact />} />
                            <Link exact path='faqs' element={<Component.FAQ />} />

                            <Link exact path='auth' element={<Component.AuthLayout />}>
                                <Link path='login' element={<Component.Login />} />
                                <Link path='signup' element={<Component.Signup />} />
                                <Link path='user' element={<Component.UserPage />} />
                                <Link path='reset' element={<Component.ResetPass />} />
                            </Link>
                            <Link exact path='dash'
                                element={
                                    <Component.ProtectedRouting>
                                        <Component.DashboardLayout />
                                    </Component.ProtectedRouting>
                                }
                            >
                                <Link index element={<Component.Dashboard />} />
                                <Link path='vote' element={<Component.Vote />} />
                                <Link path='guidelines' element={<Component.Guidelines />} />
                                <Link path='candidate/:id' element={<Component.Candidate />} />
                                <Link path='vote-candidate/:id' element={<Component.VoteCandidate />} />
                                <Link path='confirm-candidate-voted/:id' element={<Component.VotedPage />} />

                            </Link>
                        </Routes>
                        <Component.GoToTop notTop={notTop.toTopButton} />
                        <Component.Footer onPage={onPage} setOnPage={setOnPage} />
                    </UserAuthContextProvider>
                </div>
            </div>
        </div>
    );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1587368062478-e804f5e2a55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1623&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">WELCOME TO THE HOME OF CONQUERORS</h1>
                        <p className="mb-5">Founded in 1884, the club has a long history of winning championships, developing players for state and national team selection</p>
                        <Link to='/clubs'><button className="btn btn-outline btn-warning px-20">CLUBS</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen bg-base-100">
                    <div className='hidden lg:flex md:hidden justify-between h-full w-full'>
                        <div className='bg-yellow-500 h-full w-48'> </div>
                        <div className='bg-yellow-500 h-full w-48'></div>
                        <div className='bg-yellow-500 h-full w-48'></div>
                        <div className='bg-yellow-500 h-full w-48'></div>
                        <div className='bg-yellow-500 h-full w-48'></div>
                        <div className='bg-yellow-500 h-full w-48'></div>
                        <div className='bg-yellow-500 h-full w-48'></div>
                    </div>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" className="max-w-md rounded-lg shadow-2xl m-5" />
                        <div>
                            <h1 className="text-6xl font-bold text-teal-600">OFFICIAL CONQUERORS
                                TEAM STORE!</h1>
                            <p className="py-6 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Link to='/clubs'><button className="btn btn-outline bg-gray-800 px-40">CLUBS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
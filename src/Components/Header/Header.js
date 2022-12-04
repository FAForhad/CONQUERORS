import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-yellow-400">
                <div className="flex-1 mr-2 px-6 text-2xl text-black font-bold ">
                    <h1 className='py-2 px-2'><Link to='/'>CONQUERORS</Link></h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal mr-2 py-6 text-black font-bold ">
                        <li className='hover:bg-yellow-500 py-2 px-2'><Link to='/'>HOME</Link></li>
                        <li className='hover:bg-yellow-500 py-2 px-2'><Link to='/leagues'>SPORTS</Link></li>
                        <li className='hover:bg-yellow-500 py-2 px-2'><Link to='/clubs'>CLUBS</Link></li>
                        <li className='hover:bg-yellow-500 py-2 px-2'><Link to='/favourite'>FAVOURITE</Link></li>
                        <li className='hover:bg-yellow-500 py-2 px-2'><Link to='/joinUs'>JOIN US</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;




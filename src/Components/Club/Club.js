import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid'

const Club = ({ club, handleAddtofavouriteTeam }) => {
    const { strTeam, strTeamBadge, strLeague } = club
    return (
        <div>
            <div className="card w-96 shadow-xl border border-yellow-400 my-5">
                <figure><img src={strTeamBadge} alt="Shoes" className='p-12' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className=" text-yellow-400 text-4xl ">{strTeam}</div>
                    </h2>
                    <p className='text-xl'>{strLeague}</p>
                    <div className="card-actions justify-center w-full">
                        <Link to='/clubs'><button onClick={() => handleAddtofavouriteTeam(club)} className="btn btn-outline btn-warning px-20 w-full hover:text-yellow-700 text-yellow-500 "><HeartIcon className="h-6 w-6" /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Club;
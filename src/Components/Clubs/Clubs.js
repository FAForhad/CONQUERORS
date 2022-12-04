import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Club from '../Club/Club';

const Clubs = ({ handleAddtofavouriteTeam }) => {
    const clubs = useLoaderData()

    return (
        <div>
            <div className='mx-10 my-5 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    clubs.teams.map(club =>
                        <Club
                            key={club.idTeam}
                            club={club}
                            handleAddtofavouriteTeam={handleAddtofavouriteTeam}
                        ></Club>)
                }
            </div>
        </div>
    );
};

export default Clubs;
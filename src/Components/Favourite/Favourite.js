import React from 'react';
import Favleauges from '../FavLeauges/Favleauges';
import FavouriteTeam from '../FavouriteTeam/FavouriteTeam';

const Favourite = ({ favourite, setFavourite, favouriteTeam, setFavouriteTeam }) => {
    const handleRemove = (fv) => {
        const remaining = favourite.filter(favo => favo.idSport !== fv.idSport)
        setFavourite(remaining)
    }
    const handleRemoveTeam = (fv) => {
        const remaining = favouriteTeam.filter(favo => favo.idTeam !== fv.idTeam)
        setFavouriteTeam(remaining)
    }
    return (
        <div>
            <div className='favouriteSports'>
                <div className="mockup-window border border-base-300 min-h-max">
                    <h1 className='text-4xl py-5 text-yellow-400 font-bold'>FAVOURITE LEAUGES</h1>
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-4 px-4 py-16 border-t border-base-300">
                        {
                            favourite.map(fv => <Favleauges key={fv.idSport} fv={fv} handleRemove={handleRemove}></Favleauges>)
                        }
                    </div>
                </div>
            </div>
            <div className='favouriteTeams'>
                <div className="mockup-window border border-base-300 min-h-max">
                    <h1 className='text-4xl py-5 text-yellow-400 font-bold'>FAVOURITE TEAMS</h1>
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-4 px-4 py-16 border-t border-base-300">
                        {
                            favouriteTeam.map(fv => <FavouriteTeam key={fv.idTeam} fv={fv} handleRemoveTeam={handleRemoveTeam}></FavouriteTeam>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favourite;
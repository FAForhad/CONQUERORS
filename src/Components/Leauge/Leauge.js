
import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'

const Leauge = ({ leauge, handleAddtofavourite }) => {
    const { strFormat, strSport, strSportThumb, strSportIconGreen } = leauge
    return (
        <div className='mt-5 text-black py-4'>
            <div className="card w-96 bg-base-100 border border-yellow-500 shadow-xl image-full">
                <figure><img src={strSportThumb ? strSportThumb : strSportIconGreen} alt={strSport} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-yellow-500">{strSport}</h2>
                    <h3 className="card-title">{strFormat}</h3>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddtofavourite(leauge)} className="btn btn-outline btn-warning text-yellow-500 hover:text-yellow-700"><HeartIcon className="h-6 w-6 " /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leauge;
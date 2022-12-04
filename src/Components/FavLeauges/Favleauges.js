import React from 'react';

const Favleauges = ({ fv, handleRemove }) => {
    const { strFormat, strSport, strSportThumb } = fv
    return (
        <div>
            <div className="card w-96 p-8 bg-base-100 border my-5 border-yellow-500 shadow-xl image-full">
                <figure><img src={strSportThumb} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-yellow-500">{strSport}</h2>
                    <h3 className="card-title">{strFormat}</h3>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleRemove(fv)} className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favleauges;
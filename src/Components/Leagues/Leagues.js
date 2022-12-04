
import { useLoaderData } from 'react-router-dom';
import Leauge from '../Leauge/Leauge';

const Leagues = ({ handleAddtofavourite }) => {
    const leauges = useLoaderData()
    return (
        <div>
            <div className='mx-10 my-5 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                {
                    leauges.sports.map(leauge =>
                        <Leauge
                            key={leauge.idSport}
                            leauge={leauge}
                            handleAddtofavourite={handleAddtofavourite}
                        ></Leauge>)
                }
            </div>
        </div>
    );
};

export default Leagues;
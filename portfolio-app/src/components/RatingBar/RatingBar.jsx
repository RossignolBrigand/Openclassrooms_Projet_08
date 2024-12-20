import { BsSquareFill } from 'react-icons/bs';

import './_ratingBar.scss';

//-------------------------------------------------------------------

export default function RatingBar({ rating, label, count, icon }) {

    const DEFAULT_MAX_COUNT = 5;
    const DEFAULT_ACTIVE_COLOR = 'orange';

    return (
        <>
            <div className='rating-bar__container'>
                <div className='rating-bar__container--icon'>
                    {icon}
                </div>
                <div className="rating-bar__container--label">
                    <h5>{label}</h5>
                </div>
                <div className="rating-bar__container--bar">
                    {[...Array(count || DEFAULT_MAX_COUNT)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <BsSquareFill
                                key={index}
                                className={`star ${starValue <= rating ? `star-filled__${label || DEFAULT_ACTIVE_COLOR}` : ''}`}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

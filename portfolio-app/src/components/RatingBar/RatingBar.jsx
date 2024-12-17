import { BsSquareFill } from 'react-icons/bs';
import './_ratingBar.scss';

const DEFAULT_MAX_COUNT = 5;
const DEFAULT_ACTIVE_COLOR = 'orange';

export default function RatingBar({ rating, label, count }) {
    return (
        <>
            <div className="rating-bar__wrapper">
                <div className="rating-bar__label">
                    <h4>{label}:</h4>
                </div>
                <div className="rating-bar__container">
                    {[...Array(count || DEFAULT_MAX_COUNT)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <BsSquareFill
                                key={index}
                                className={`star ${starValue <= rating ? `star-filled__${label || DEFAULT_ACTIVE_COLOR}` : ''}`}
                            />
                        );
                    })}
                    <div></div>
                </div>
            </div>
        </>
    );
}

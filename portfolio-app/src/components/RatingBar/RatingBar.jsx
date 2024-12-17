import { BsXDiamondFill } from 'react-icons/bs';
import './_ratingBar.scss';

const DEFAULT_MAX_COUNT = 5;

export default function RatingBar({ rating, label, count }) {
    return (
        <>
            <div className="rating-bar__wrapper">
                <div className="rating-bar__label">
                    <h3>Rating bar label {label}</h3>
                </div>
                <div className="rating-bar__container">
                    {[...Array(count || DEFAULT_MAX_COUNT)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <BsXDiamondFill
                                className={`star ${starValue <= rating ? 'star-filled' : ''}`}
                            />
                        );
                    })}
                    <div></div>
                </div>
            </div>
        </>
    );
}

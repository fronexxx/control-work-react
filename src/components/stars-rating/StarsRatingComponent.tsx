import '../../css/StarsRating.css';

type StarsRatingProps = { rating: number };

const StarsRatingComponent = ({rating}: StarsRatingProps) => {
    const totalStars = 5;
    const filledStars = Math.round(rating / 2);

    const stars = [];
    for (let i = 0; i < totalStars; i++) {
        stars.push(
            <span key={i} className={`star ${i < filledStars ? 'filled' : ''}`}>★</span>
        )
    }
    return (
        <div className='stars'>
            {stars}
        </div>
    );
};

export default StarsRatingComponent;

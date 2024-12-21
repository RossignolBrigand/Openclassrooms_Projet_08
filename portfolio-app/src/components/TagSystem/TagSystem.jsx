
import './_tagSystem.scss';

export default function TagSystem({ data }) {

    return (
        <div className='tags-wrapper'>
            <h4>Tags</h4>
            <div className='tags-container'>
                {data.map((item) => (
                    <span className='tag' key={item}>{item}</span>
                ))}
            </div>
        </div>
    );
}

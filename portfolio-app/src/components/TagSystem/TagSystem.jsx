import './_tagSystem.scss';

export default function TagSystem({ data }) {

    return (
        <div className='tags-container'>
            {data.map((item) => (
                <span className='tag'>{item}</span>
            ))}
        </div>
    );
}

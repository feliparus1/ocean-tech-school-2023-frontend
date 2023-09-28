import Tag from './Tag/Tag';
import './Card.css'

export default function Card(props) {
    const item = props.item;

    // Jeito literal
    // let tags = item.tags;
    // console.log(tags);
    
    // if (!tags) {
    //     tags = [];
    // }

    const tags = item.tags || [];

    return <div className="card">
            <h2>{item.nome}</h2>
            <div className='tags'>
                {tags.map(function (tag, index) {
                    return <Tag text={tag} key={`card_tag_${index}`} />
                })}
            </div>
            <img src={item.imagemUrl} />
        </div>
}
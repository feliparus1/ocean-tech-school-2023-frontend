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

    const tags = [
        `Status: ${item.status}`,
        `Espécie: ${item.species}`,
        `Origem: ${item.origin.name}`,
    ];
    //console.log(tags)

    // TODO: Fazer as tags funcionarem na nova estrutura de dados recebida da API
    // Exibir Tab de status, species e origem

    return <div className="card">
            <h2>{item.name}</h2>
            <div className='tags'>
                {tags.map(function (tag, index) {
                    return <Tag text={tag} key={`card_tag_${index}`} />
                })}
            </div>
            <img src={item.image} />
        </div>
}
import './Card.css'

export default function Card(props) {
    console.dir(props);
    const item = props.item;
    
    return (
        <div className="card" tag="adicional">
            <h2>{item.nome}</h2>
            <div className='tags'>
                <div className='tag'>Status: Vivo</div>
                <div className='tag'>Espécie: Humana</div>
                <div className='tag'>Origem: Terra C-137</div>
            </div>
            <img src={item.imagemUrl} />
        </div>)
}
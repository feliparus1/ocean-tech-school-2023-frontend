import './Tag.css'

export default function Tag(props) {
    /* conteúdo do componente */
    const text = props.text;

    /* Return -> encerra a função
    No Reactjs, o return precisa devolver um componente JSX para ser exibido na tela
    */

    return <div className='tag'>{text}</div>
}
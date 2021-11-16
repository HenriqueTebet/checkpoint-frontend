import './style.scss';

const Cards = (props) => {

    return (
            <div id="projetos" className="card mx-5" style={{width: "18rem"}}>
                <img className="card-img-top" src={props.projeto.img} alt="Card imagem cap"/>
                <div className="card-body">
                <h5 className="card-title">{props.projeto.titulo}</h5>
                <p className="card-text">{props.projeto.descricao}</p>
                <a href={props.projeto.link} class ="btn btn-primary">Acesse o projeto</a>
                </div>
            </div>
    )
}

export default Cards;
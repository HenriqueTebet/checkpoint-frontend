import './style.scss';
import img1 from '../../images/to-do-app.jpg'
import img2 from '../../images/cadastre-seu-carro.jpg'
import img3 from '../../images/primeiro-site-react.jpg'
import Cards from '../Cards'

const Banner = () => {

    const projetos = [
        {
            img: img1,
            titulo: "To Do App",
            descricao: "Projeto de lista de tarefas desenvolvido durante o curso Certified Tech Developer da Digital House.",
            link: "https://github.com/gSantosP/ToDo"
        },
        {
            img: img2,
            titulo: "Cadastre Seu Carro",
            descricao: "Projeto para criação de cards de carros desenvolvido durante o curso Certified Tech Developer da Digital House.",
            link: "https://github.com/HenriqueTebet/projetoFE2"
        },
        {
            img: img3,
            titulo: "Primeiro Site React",
            descricao: "Meu primeiro site com React desenvolvido durante o curso Certified Tech Developer da Digital House.",
            link: "https://github.com/HenriqueTebet/ReactApp"
        }
    ]

    return (
        <section id="banner">
            <div className="img-banner">
                <div id="apresentacao" className="img-banner-profile"></div>
                <h2>Dev Full Stack</h2>
                <p>Estudante do Certified Tech Developer e programador em formação com experiência de 6 meses.</p>
            </div>
            <div className="my-5">
                <ul className="d-flex align-items-center flex-wrap" id="projetos">
                    {projetos.map((p, i) => {
                        console.log(p)
                        return <li key={i} ><Cards projeto={p} /></li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Banner;
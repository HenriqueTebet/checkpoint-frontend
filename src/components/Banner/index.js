import './style.scss';
import img1 from '../../images/artificial-intelligence-ge7eefe2ac_1920.jpg'
import img2 from '../../images/laptop-gce52d721e_1920.jpg'
import img3 from '../../images/technology-g708bf05b9_1920.jpg'
import Cards from '../Cards'

const Banner = () => {

    const projetos = [
        {
            img: img1,
            titulo: "Projeto 1",
            descricao: "Lorem ipsum",
            link: "https://github.com/gSantosP/ToDo"
        },
        {
            img: img2,
            titulo: "Projeto 2",
            descricao: "Lorem ipsum",
            link: "https://github.com/HenriqueTebet/projetoFE2"
        },
        {
            img: img3,
            titulo: "Projeto 3",
            descricao: "Lorem ipsum",
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
                <ul className="d-flex align-items-center" id="projetos">
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
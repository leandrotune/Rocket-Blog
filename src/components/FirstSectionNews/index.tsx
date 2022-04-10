import arrowRightImg from "../../assets/images/arrow-right.svg";
import newsFeaturedImg from "../../assets/images/featured-image.png";
import { Container, Content } from "./style";

/* eslint-disable prettier/prettier */
export function FirstSectionNews() {
    return (
        <Container>
            <Content>
                <div className="sectionInformative">
                    <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nibn eu in aliquest ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.</p>

                    <div>
                        <p>veja mais </p>
                        <img src={arrowRightImg} alt="Arrow Right" />
                    </div>
                </div>

                <div className="sectionVisualNews" >
                    <img src={newsFeaturedImg} alt="Imagem em destaque da notícia" />
                </div>
            </Content>
        </Container>
    );
}

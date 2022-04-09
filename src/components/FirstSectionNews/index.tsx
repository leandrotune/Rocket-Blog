import newsFeaturedImg from "../../assets/images/featured-image.png";
import { Container, Content } from "./style";

/* eslint-disable prettier/prettier */
export function FirstSectionNews() {
    return (
        <Container>
            <Content>
                <div className="sectionInformative">
                    <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus voluptatem quidem laboriosam fugiat aliquam ipsam excepturi.</p>
                </div>

                <div className="sectionVisualNews" >
                    <img src={newsFeaturedImg} alt="Imagem em destaque da notícia" />
                </div>
            </Content>
        </Container>
    );
}

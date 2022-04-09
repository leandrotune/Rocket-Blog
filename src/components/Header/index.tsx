/* eslint-disable prettier/prettier */
import logoIgm from "../../assets/images/logo.svg"
import { SearchField } from "../SearchField";
import { Container } from "./styles";


export function Header() {
    return (
        <Container>
            <img src={logoIgm} alt="Logotipo Rocket Blog" srcSet="" />

            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">sobre</a></li>
                <li><a href="#">categorias</a></li>
                <li><a href="#">contato</a></li>
            </ul>

            <SearchField />

        </Container>
    );
}

/* eslint-disable prettier/prettier */
import logoIgm from "../../assets/images/logo.svg"
import { SearchField } from "../SearchField";
import { Container } from "./styles";


export function Header() {
    return (
        <Container>
            <img src={logoIgm} alt="Logotipo Rocket Blog" />

            <ul>
                <li><a href="http://">home</a></li>
                <li><a href="http://">sobre</a></li>
                <li><a href="http://">categorias</a></li>
                <li><a href="http://">contato</a></li>
            </ul>

            <SearchField />

        </Container>
    );
}

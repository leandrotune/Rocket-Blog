import searchImg from "../../assets/images/search.svg";
import { Container } from "./styled";

/* eslint-disable prettier/prettier */
export function SearchField() {
    return (
        <Container>
            <input
                type="text"
                placeholder="Buscar"
            />

            <button type="button">
                <img src={searchImg} alt="Buscar" />
            </button>
        </Container>
    );
}

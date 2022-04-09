/* eslint-disable prettier/prettier */

import { FirstSectionNews } from "../FirstSectionNews";
import { Header } from "../Header";
import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />
            <FirstSectionNews />
        </Container>

    );
}

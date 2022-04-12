/* eslint-disable prettier/prettier */

import { FirstSectionNews } from "../FirstSectionNews";
import { Header } from "../Header";
import { MainSection } from "../MainSection";
import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />
            <FirstSectionNews />
            <MainSection />
        </Container>

    );
}

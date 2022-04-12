/* eslint-disable prettier/prettier */

import post_1Img from "../../assets/images/post-1.png"
import post_2Img from "../../assets/images/post-2.png"
import post_3Img from "../../assets/images/post-3.png"
import post_4Img from "../../assets/images/post-4.png"
import { Container } from "./styled";

export function MainSection() {
    return (
        <Container>
            <div>
                <img src={post_1Img} alt="Imagem da noticia" />
                <span>janeiro 04, 22</span>
                <h2>começando no reactJS em 2022</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime error, optio quo animi incidunt praesentium nam cum a molestiae odit id ipsum, possimus dolorum ipsa harum corrupti eum inventore? Illo!</p>
            </div>

            <div>
                <span>janeiro 04, 2022</span>
                <h2>conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fuga et voluptates exercitationem, error excepturi eveniet nostrum eaque autem eos vitae sint earum nobis ab vel ipsum magni nam quo.</p>

                <span>janeiro 04, 2022</span>
                <h2>veja evolução do front-end na prática</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto nulla sit suscipit ex eius corporis, eos quos consequuntur repellat, blanditiis itaque sapiente facilis voluptatem libero animi atque vel reprehenderit.</p>
            </div>

            <div>
                <img src={post_2Img} alt="Imagem da noticia" />
                <span>janeiro 04, 22</span>
                <h2>10 dicas para conseguir a vaga desejada</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vitae placeat dolorum quibusdam nulla, corrupti harum aperiam illo ab facilis, sequi est, eaque voluptates recusandae provident. Tenetur adipisci facere veniam.</p>
            </div>

            <div>
                <img src={post_3Img} alt="Imagem da noticia" />
                <span>janeiro 04, 22</span>
                <h2>deixe seu código mais semântico com essas dicas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut veritatis corporis cumque earum placeat praesentium eligendi similique qui nihil impedit, neque quaerat non, quidem saepe ratione. Error, maxime? Minima.</p>
            </div>

            <div>
                <img src={post_4Img} alt="Imagem da noticia" />
                <span>janeiro 04, 22</span>
                <h2>use essas dicas nas suas aplicações mobile</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut veritatis corporis cumque earum placeat praesentium eligendi similique qui nihil impedit, neque quaerat non, quidem saepe ratione. Error, maxime? Minima.</p>
            </div>
        </Container>

    );
}

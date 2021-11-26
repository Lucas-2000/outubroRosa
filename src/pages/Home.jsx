import React from 'react'
import Header from '../components/Header'
import '../styles/home.scss'
import about from '../assets/images/about.png'
import contact from '../assets/images/contact.png'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <div id='page-home'>
                <main>
                    <section id="statistic-content" className="statistic-content">
                        <h1>
                            Estatísticas sobre o câncer de mama
                        </h1>
                        <div className="informations-content">
                            <div className="total-cases">
                                <strong>
                                    Total de casos
                                </strong>
                                <p>
                                    66280
                                </p>
                            </div>
                            <div className="risk-occurrence">
                                <strong>
                                    Casos
                                </strong>
                                <p>
                                    61,61 a cada 100 mil 
                                </p>
                            </div>
                            <div className="cure-chance">
                                <strong>
                                    Chance de cura
                                </strong>
                                <p>
                                    95%
                                </p>
                            </div>
                        </div>
                        <h3>
                            Estimativa para o triênio de 2020/2022 | Dados divulgados pelo INCA
                        </h3>
                    </section>
                    <section id="prevention-content" className="prevention-content">
                        <div className="prevention-explication">
                            <strong>O que é a prevenção do câncer de mama?</strong>
                            <p>Quando se fala em prevenção do câncer estamos tratando de estratégias para reduzir o risco de que a doença se desenvolva. A prevenção, em geral, atua sobre os fatores de risco modificáveis, portanto inclui mudanças de hábito que envolvem evitar o consumo excessivo de álcool, não fumar, praticar atividades físicas, ter uma alimentação saudável e evitar exposição aos riscos ambientais. Em conjunto, essas ações diminuem significativamente as chances de uma pessoa desenvolver câncer de mama. No entanto, mesmo que essas medidas sejam colocadas em prática, ainda existe a possibilidade, embora reduzida, do câncer de mama se manifestar.</p>
                            <p>Existe um grupo específico de mulheres portadoras de mutação genética hereditária que aumenta a predisposição ao surgimento do câncer de mama. A mutação mais comum é conhecida como BRCA. Para identificar a presença de mutação, essas mulheres precisam atender a um conjunto de características e realizar testes genéticos com acompanhamento de geneticista. Se comprovado o risco aumentado, é possível conduzir medidas preventivas adicionais. Nesses casos, a paciente e o médico devem avaliar as possibilidades, que podem ser mais ou menos invasivas e assegurar índice maior ou menor de redução de risco para a doença. Algumas medidas possíveis são a quimioprevenção, que consiste na administração de medicamentos como o tamoxifeno antes que a doença se manifeste para reduzir sua chance de desenvolvimento, e a cirurgia profilática, que consiste na retirada preventiva das mamas para evitar a formação de um tumor.</p>
                        </div>
                        <div className="detection-explication">
                            <strong>O que é a detecção precoce do câncer de mama?</strong>
                            <p>A detecção precoce do câncer de mama consiste na realização de exames que têm como objetivo garantir que a doença seja detectada o mais rápido possível, em sua fase inicial. Nessa etapa, os esforços não se direcionam a evitar que o câncer se manifeste, e sim a investigar se ele está presente, para possibilitar que o tratamento inicie o mais rápido possível em caso positivo. Por isso, os exames para detecção precoce não devem ser chamados de preventivos no caso do câncer de mama. O câncer pode se manifestar antes que os sintomas sejam aparentes ou identificados pelo paciente e é por isso que manter os exames em dia faz toda a diferença. É importante ter em mente que quanto mais rápido o câncer de mama é diagnosticado e tratado, maiores são as chances de cura, com tratamentos menos invasivos para a paciente e com investimento menor e mais eficiente para a gestão pública.</p>
                            <p>Entre as estratégias de detecção precoce está o rastreamento do câncer, política de realização de exames na população de risco, em pessoas ainda sem sintomas No Brasil, a Lei 11.664/2008 define que a mamografia de rastreamento deve ser realizada anualmente em todas as mulheres com idade entre 40 e 69 anos, estratégia defendida pela FEMAMA e pela Sociedade Brasileira de Mastologia. </p>
                            <p>Além da mamografia de rastreamento, a detecção precoce do câncer de mama pode ser feita em consultas ao ginecologista através do exame clínico (palpação da mama pelo profissional de saúde), e por exames de imagem que possam ser solicitados pelo médico, como mamografia, ultrassonografia ou outros. Esses exames não são considerados preventivos, pois sua função é identificar um possível tumor que já esteja presente, para então agir rápido através do tratamento mais adequado a cada caso.</p>
                            <p>O autoexame é uma prática de autoconhecimento sobre o corpo, mas não substitui os exames de detecção precoce. Ele é importante para que as mulheres conheçam bem o seu corpo e identifiquem com facilidade qualquer alteração suspeita nas mamas, podendo assim procurar um médico o mais rápido possível para a realização de um exame diagnóstico.</p>
                        </div>
                    </section>
                    <section id="about-content" className="about-content">
                        <aside>
                            <img src={about} alt="" />
                        </aside>
                        <div className="information-about">
                            <h1>
                                Sobre mim
                            </h1>
                            <p>
                                Projeto desenvolvido pelo programador Lucas Marchesoni com o intuito de divulgar informações sobre o outubro rosa
                                <br />
                                Aluno da Universidade São Judas Tadeu
                                <br />
                                Aspirante a desenvolvedor Full Stack
                            </p>
                            <a href='#contact-content'>
                                <button>Fale Comigo</button>
                            </a>
                        </div>
                    </section>
                    <section id="contact-content" className="contact-content">
                        <form>
                            <strong>Fale comigo</strong>
                            <p>Insira seus dados e deixe sua mensagem</p>
                            <img src={contact} alt="Fale comigo" />
                            <input type="text" placeholder="Nome" required />
                            <input type="number" placeholder="Telefone" required />
                            <input type="text" placeholder="Email" required />
                            <input type="text" placeholder="Mensagem" required />
                            <button type="submit">Enviar</button>
                        </form>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Home

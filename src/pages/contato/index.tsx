import React, { useCallback, useState } from 'react';
import Button from '../../components/button';

import Footer from '../../components/footer';
import Header from '../../components/header';
import contact from '../../assets/images/contact.png';
import emailjs from 'emailjs-com';

import { Container, HeaderContent, Questions } from './styles';

const Contato: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSendEmail = useCallback((e) => {
    console.log(`Email enviado: ${name}, ${email}, ${question}`);

    var templateParams = {
      name: name,
      email: email,
      question: question
  };
  
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.send(`service_lpg7yn4`,`template_7wz31lq`, templateParams ,`user_RJZjlwjWFGihK1N5bgzPg`);
  }, [email, name, question]);

  return (
    <>
      <Header />
      <Container>
        <HeaderContent>
          <aside>
            <h1>Dúvidas? Manda pra gente!</h1>

            <section>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                type="text"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                type="text"
              />
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Dúvidas ou sugestões"
              />
            </section>

            <button onClick={handleSendEmail}>Enviar e-mail</button>
          </aside>

          <img src={contact} alt="Contato" />
        </HeaderContent>
        <Questions>
          <div className="content">
            <header>
              <section>
                <h4>Principais dúvidas</h4>
                <p>
                  Fizemos uma lista das perguntas mais frequentes que recebemos,
                  talvez seja a sua:
                </p>
              </section>

              <h4>
                Não foi respondida? <br /> Manda pra gente
              </h4>
            </header>

            <hr />

            <div className="questions">
              <section>
                <article>
                  <h4>Qual é o diferencial da Mooney?</h4>
                  <p>
                    Além da metodologia completa e humanizada de educação
                    financeira, desenvolvemos o aplicativo Mooney, que auxilia o
                    jovem no desenvolvimento de hábitos financeiros saudáveis,
                    incluindo seus familiares e a sociedade.
                  </p>
                </article>

                <article>
                  <h4>São professores da Mooney que aplicam as aulas?</h4>
                  <p>
                    Não. A Mooney capacita os professores dos colégios parceiros
                    para aplicar as aulas. Todas as aulas e conceitos são
                    descritos de forma simples e completa para que qualquer
                    professor, independente da área de formação e atuação,
                    consiga aplicar a metodologia da Mooney.
                  </p>
                </article>

                <article>
                  <h4>A Mooney trabalha com apostilas?</h4>
                  <p>
                    Não. Os professores recebem acesso ao material digital e os
                    alunos podem acessar o conteúdo das aulas pelo aplicativo da
                    Mooney e pela plataforma Web. Tudo é muito interativo!
                  </p>
                </article>
              </section>

              <section>
                <article>
                  <h4>O aplicativo faz parte do pacote?</h4>
                  <p>
                    Sim. Todas as aulas contam com o suporte de uma trilha de
                    conhecimento gamificada e algumas aulas usam o aplicativo
                    como recurso pedagógico durante as atividades, para caso a
                    escola tenha disponibilidade de acesso aos alunos dentro do
                    ambiente de aprendizagem.
                  </p>
                </article>

                <article>
                  <h4>
                    A apostila e/ou livro utilizado no meu colégio contempla
                    educação financeira. Posso ser parceiro Mooney mesmo assim?
                  </h4>
                  <p>
                    A Mooney oferece uma abordagem de Educação Financeira
                    prática e baseada no desenvolvimento de habilidades
                    socioemocionais, complementando o projeto de vida do aluno.
                    Todas as nossas aulas são preparadas e validadas pela nossa
                    equipe pedagógica, para garantir um material sempre
                    atualizado e alinhado com as novidades do mercado
                    financeiro. A metodologia Mooney é complementar aos
                    conteúdos contemplados em apostilas e livros didáticos.
                  </p>
                </article>

                <article>
                  <h4>
                    A metodologia Mooney está alinhada ao novo Ensino Médio?
                  </h4>
                  <p>
                    Sim! A Mooney seguiu as diretrizes da BNCC para desenvolver
                    as aulas e já tem um projeto desenvolvido especialmente para
                    o novo Ensino Médio, o Mooney Lab.
                  </p>
                </article>
              </section>

              <section>
                <article>
                  <h4>Quantas aulas têm?</h4>
                  <p>
                    A Mooney se adequa às necessidades de cada colégio, então o
                    colégio tem a flexibilidade de escolher no início do
                    processo se as aulas serão semanais ou quinzenais
                  </p>
                </article>

                <article>
                  <h4>Existe alguma capacitação para os professores?</h4>
                  <p>
                    Sim, existe um programa específico para capacitação
                    continuada dos professores dos colégios parceiros.
                  </p>
                </article>

                <article>
                  <h4>
                    Durante o ano a Mooney faz eventos para responsáveis de
                    alunos e funcionários dos colégios parceiros sobre o tema de
                    educação financeira?
                  </h4>
                  <p>
                    Sim, a Mooney promove eventos periódicos sobre educação
                    financeira com diferentes temas e abordagens.
                  </p>
                </article>
              </section>
            </div>
          </div>
        </Questions>
      </Container>
      <Footer />
    </>
  );
};

export default Contato;

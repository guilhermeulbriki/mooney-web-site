import React, { useCallback, useState } from 'react';
import Button from '../../components/button';

import Footer from '../../components/footer';
import Header from '../../components/header';
import contact from '../../assets/images/contact.png';

import { Container, HeaderContent, Questions } from './styles';

const Contato: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSendEmail = useCallback(() => {
    console.log(`Email enviado: ${name}, ${email}, ${question}`);
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
                  <h4>O meu aluno paga direto para vocês?</h4>
                  <p>
                    Não, ao fechar-se um pacote como escola parceira, nenhuma
                    cobrança adicional será repassada aos alunos.
                  </p>
                </article>

                <article>
                  <h4>Quantas aulas têm?</h4>
                  <p>
                    A Mooney se adequa às necessidades de cada colégio, então o
                    colégio tem a flexibilidade de escolher no início do
                    processo se as aulas vão ser semanais ou quinzenais
                  </p>
                </article>

                <article>
                  <h4>Vocês trabalham com apostilas?</h4>
                  <p>
                    Não, os professores recebem acesso ao material digital e os
                    alunos podem acessar o conteúdo das aulas pelo aplicativo da
                    Mooney.
                  </p>
                </article>
              </section>

              <section>
                <article>
                  <h4>Vocês já estão alinhados ao novo Ensino Médio?</h4>
                  <p>
                    Sim! A Mooney seguiu as diretrizes da BNCC para desenvolver
                    as aulas e já tem um projeto desenvolvido especialmente para
                    o novo Ensino Médio, o Mooney Lab
                  </p>
                </article>

                <article>
                  <h4>Qual é o diferencial da Mooney?</h4>
                  <p>
                    Além da metodologia completa e humanizada de educação
                    financeira, o aplicativo da Mooney ajuda o aluno no
                    desenvolvimento de hábitos financeiros saudáveis e
                    desenvolvimento de relações entre os alunos e familiares e
                    com a sociedade.
                  </p>
                </article>

                <article>
                  <h4>É um curso extracurricular?</h4>
                  <p>
                    Não. A Mooney é preparada para ser um curso intracurricular,
                    que pode ser utilizada na grade de qualquer disciplina caso
                    a escola não tenha uma disciplina específica, garantindo que
                    todos os alunos do colégio tenham acesso às aulas.
                  </p>
                </article>
              </section>

              <section>
                <article>
                  <h4>O aplicativo faz parte do pacote?</h4>
                  <p>
                    Sim! Todas as aulas contam com o suporte de uma trilha de
                    conhecimento gamificada e algumas aulas usam o aplicativo
                    como recurso pedagógico durante as atividades, para caso a
                    escola tenha disponibilidade de acesso aos alunos dentro do
                    ambiente de aprendizagem.
                  </p>
                </article>

                <article>
                  <h4>
                    Eu já tenho educação financeira na minha escola, porque eu
                    precisaria de mais?{' '}
                  </h4>
                  <p>
                    A Mooney oferece uma abordagem de Educação Financeira
                    prática e baseada no desenvolvimento de habilidades
                    socioemocionais, complementando o projeto de vida do aluno.
                    Todas as nossas aulas são preparadas e validadas pela nossa
                    equipe pedagógica, para garantir um material sempre
                    atualizado e alinhado com as novidades do mercado
                    financeiro.
                  </p>
                </article>

                <article>
                  <h4>São professores de vocês que aplicam a aula?</h4>
                  <p>
                    Não, a Mooney capacita os professores dos colégios parceiros
                    para aplicar as aulas. Todas as aulas e conceitos são
                    escritos de forma simples e completa para que qualquer
                    professor, independente da área que dá aula, consiga aplicar
                    as aulas da Mooney.
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

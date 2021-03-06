import React, { useCallback, useState } from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';

import arrow from '../../assets/images/illustrations/arrow.svg';

import { Container, HeaderComponent, BePart } from './styles';

const Sejamooney: React.FC = () => {
  const [schoolName, setSchoolName] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');

  const handleSendContact = useCallback(() => {
    console.log(
      `Contato enviado, ${schoolName}, ${name}, ${role}, ${whatsapp}, ${message}`
    );
  }, [message, name, role, schoolName, whatsapp]);

  return (
    <>
      <Header />
      <Container>
        <HeaderComponent>
          <div className="content">
            <aside>
              <h3>#SejaMooney</h3>
              <h2 className="side">
                Preencha os campos ao lado e fale com um consultor
              </h2>
              <h2 className="below">
                Preencha os campos abaixo e fale com um consultor
              </h2>
              <p>
                Vamos levar Educaçao e Alfabetização Financeira de qualidade
                para seus alunos?
              </p>

              <img src={arrow} alt="Just an arrow" />
            </aside>

            <div className="form">
              <h4>Seja um colégio parceiro</h4>

              <input
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder="Nome da sua escola"
                type="text"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                type="text"
              />
              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Cargo"
                type="text"
              />
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp"
                type="text"
              />
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensagem (opcional)"
                type="text"
              />

              <button onClick={handleSendContact}>Entrar em contato</button>
            </div>
          </div>
        </HeaderComponent>
        <BePart>
          <h2>
            Faça parte dessa revolução e{' '}
            <strong>leve a educação financeira</strong> com você
          </h2>
          <p>
            Vamos levar educação financeira de qualidade para os seus alunos?
            Junte-se a nós e seja um colégio parceiro!
          </p>

          <section>
            <div className="content">
              <article>
                <strong>+ 50 colégios</strong>
                <p>Faça parte dessa revolução</p>
              </article>

              <article>
                <strong>+ 10 estados</strong>
                <p>Presentes em todo o Brasil</p>
              </article>

              <article>
                <strong>+ 20 mil alunos</strong>
                <p>Utilizando nossa metodologia</p>
              </article>
            </div>
          </section>
        </BePart>
      </Container>
      <Footer />
    </>
  );
};

export default Sejamooney;

import React, { useCallback, useState } from 'react';
import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';

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

  const handleSendContact = useCallback(
    (e) => {
      console.log(
        `Contato enviado, ${schoolName}, ${name}, ${role}, ${whatsapp}, ${message}`
      );

      var templateParams = {
        schoolName: schoolName,
        name: name,
        role: role,
        whatsapp: whatsapp,
        message: message,
      };

      e.preventDefault(); // Prevents default refresh by the browser
      emailjs.send(
        `service_lpg7yn4`,
        `template_amtghxd`,
        templateParams,
        `user_RJZjlwjWFGihK1N5bgzPg`
      );

      alert('E-mail enviado com sucesso!');

      setSchoolName('');
      setName('');
      setRole('');
      setWhatsapp('');
      setMessage('');
    },
    [message, name, role, schoolName, whatsapp]
  );

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
              <InputMask
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Whatsapp"
                mask="(99) 99999-9999"
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
            <strong>leve a Educação Financeira</strong> com você
          </h2>
          <p>
            Vamos levar Educação Financeira de qualidade para os seus alunos?
            Junte-se a nós e seja um colégio parceiro!
          </p>

          <section>
            <div className="content">
              <article>
                <strong>+ 50 colégios</strong>
                <p>fazendo parte dessa revolução</p>
              </article>

              <article>
                <strong>+ 10 estados</strong>
                <p>em todo o Brasil usam a Mooney</p>
              </article>

              <article>
                <strong>+ 20 mil alunos</strong>
                <p>utilizando nossa metodologia</p>
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

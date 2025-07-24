import { Col, Container, Row } from 'react-grid-system';
import { CampoTexto } from './componentes/CampoTexto/CampoTexto.jsx';
import { Card } from './componentes/Card/Card.jsx';
import Estilos from './componentes/EstilosGlobais/Estilos.jsx';
import { Footer } from './componentes/Footer/Footer.jsx';
import { Header } from './componentes/Header/Header.jsx';
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema.jsx';
import { Tipografia } from './componentes/Tipografia/Tipografia.jsx';
import { Botao } from './componentes/Botao/Botao.jsx';
import { Link } from './componentes/Links/Links.jsx';
import { FreelandoLogo } from './componentes/Icone/FreelandoLogo.jsx';
import { ListaInline } from './componentes/Lista/ListaInline.jsx';
import { ItemListaInline } from './componentes/Lista/ItemListaInline.jsx';
import { IconeWhatsApp } from './componentes/Icones/IconeWhatsApp.jsx';
import { IconeTwitch } from './componentes/Icones/IconeTwitch.jsx';
import { IconeInstagram } from './componentes/Icones/IconeInstagram.jsx';
import { IconeTwitter } from './componentes/Icones/IconeTwitter.jsx';

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

function App() {
  return (
    <ProvedorTema >
      <Estilos />
      <Header>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Header>
      <Container style={{ margin: '80px 0' }}>
        <Row justify="center" align="center">
          <Col lg={6} md={8} sm={10} xs={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <CampoTexto titulo="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8} xs={8}>
                  <CampoTexto titulo="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col >
                  <CampoTexto titulo="E-mail" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <CampoTexto titulo="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <CampoTexto titulo="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Botao variante="secundaria">Anterior</Botao>
                </Col>
                <Col>
                  <div style={{ textAlign: 'right' }}>
                    <Botao>Proxima</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Tipografia variante="legenda" componente="legenda">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
              <ListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <IconeWhatsApp />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitch">
                    <IconeTwitch />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Instagram">
                    <IconeInstagram />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitter">
                    <IconeTwitter />
                  </a>
                </ItemListaInline>
              </ListaInline>
            </Col>
          </Row>
        </Container>
      </Footer>
    </ProvedorTema>
  );
}

export default App;

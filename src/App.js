import { CampoTexto } from './componentes/CampoTexto/CampoTexto.jsx';
import { Card } from './componentes/Card/Card.jsx';
import Estilos from './componentes/EstilosGlobais/Estilos.jsx';
import { Footer } from './componentes/Footer/Footer.jsx';
import { Header } from './componentes/Header/Header.jsx';
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema.jsx';
import { Tipografia } from './componentes/Tipografia/Tipografia.jsx';

function App() {
  return (
    <ProvedorTema >
      <Estilos />
      <Header />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo" />
      </Card>
      <Footer/>
    </ProvedorTema>
  );
}

export default App;

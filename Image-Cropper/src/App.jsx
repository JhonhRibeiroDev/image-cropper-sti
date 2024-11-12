import React from 'react';
import ImageCropper from './components/ImageCropper.jsx';
import './App.css';

function App() {
  return (
    <main className="app-main">
      <div className="app-container">
        <section className="intro-section">
          <h1 className="title"><mark>Cropper de Imagens </mark>- STI</h1>
          <p className="description">
            Ajuste sua imagem para que se encaixe adequadamente no banner da UFPI. Este site é destinado a funcionários responsáveis por gerenciar e publicar artigos e notícias nos sites internos da Universidade Federal do Piauí.
          </p>
          <ImageCropper />
        </section>

        <div className="tutorial-section">
          <h2 className="tutorial-title">Como Usar?</h2>
          <div className="tutorial-content">
            <ol>
              <li><strong>Passo 1:</strong> Carregue a imagem clicando no botão "Escolher arquivo".</li>
              <li><strong>Passo 2:</strong> Ajuste a imagem na área de corte utilizando a interface interativa.</li>
              <li><strong>Passo 3:</strong> Clique em "Cortar Imagem" para cortar no formato correto.</li>
              <li><strong>Passo 4:</strong> Faça o download da imagem cortada clicando em "Baixar Imagem Cortada".</li>
            </ol>
          </div>
        </div>
      </div>

      <footer>
        <p>Criado por &copy; Jhonnatas Ribeiro</p>
      </footer>
    </main>
  );
}

export default App;

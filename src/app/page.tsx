import react from "react";
import Nav from "../components/Nav/Nav";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Container>
        <h1 className="text-4xl font-bold mb-6">Bem-vindo ao meu portfólio</h1>
        <p className="text-lg mb-4">
          Aqui você encontrará meus projetos e habilidades.
        </p>
        <p className="text-lg">Explore e conheça mais sobre meu trabalho!</p>
      </Container>
      <Footer />
    </div>
  );
}

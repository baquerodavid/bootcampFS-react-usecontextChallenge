function Home() {
  return (
    <>
      <section className="page">
        <h1>Bienvenido al proyecto de cambio de tema</h1>

        <h3>Introducción al proyecto</h3>
        <p>
          Esta aplicación ha sido desarrollada como parte del proceso de
          aprendizaje en React dentro del bootcamp. El objetivo principal de
          este ejercicio es entender cómo organizar una aplicación sencilla con
          varias rutas y cómo compartir un estado global entre distintos
          componentes.
        </p>

        <h3>Modo claro y modo oscuro</h3>
        <p>
          Desde cualquier página puedes utilizar el botón para alternar entre el
          modo claro y el modo oscuro. Este cambio permite modificar la
          apariencia visual de toda la aplicación de forma dinámica, aplicando
          diferentes estilos según el tema seleccionado.
        </p>

        <h3>Uso de createContext y useContext</h3>
        <p>
          Para construir esta funcionalidad se ha utilizado createContext junto
          con useContext de React. Gracias a ello, el estado del tema se
          comparte entre varios componentes sin necesidad de pasar props
          manualmente en cada nivel de la jerarquía.
        </p>

        <h3>Proyecto orientado a showcase</h3>
        <p>
          Este ejercicio representa una parte del recorrido realizado durante el
          bootcamp y está pensado como una pieza más para un futuro showcase
          del bootcamp. La intención es reunir en una misma colección distintos
          proyectos que reflejen la evolución técnica y la práctica adquirida
          durante la formación.
        </p>
      </section>
    </>
  );
}

export default Home;


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
import Template from "../components/Template";

const Home = () => <Template title="Soy la Home" img="https://eldata.es/img/runwaydata.png"/>
export default Home
 */
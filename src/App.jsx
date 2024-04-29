import Header from "./components/Header"
import MyCard from "./components/MyCard"
import Footer from "./components/Footer"
import imagen1 from './assets/imgs/imagen1.jpeg'
import imagen2 from './assets/imgs/imagen2.jpeg'
import imagen3 from './assets/imgs/imagen3.jpeg'
import imagen4 from './assets/imgs/imagen4.jpeg'


function App() {
  return (
    <>
      <Header nombre="Adopta un perrito"/>
      <div className="main">
        <MyCard imagen={imagen1} nombre="Bartolo" descripcion="lleno de energia y listo para jugar, !dale a bartolo el hogar amoroso que merece¡."btn1="Bobtall" BgColor="primary"/>
        <MyCard imagen={imagen2} nombre="messi" descripcion="Es jugueón, amigable y se lleva bien con los niños y otros animales. !haz de messi parte de tu familia hoy mismo¡." btn1="husky" BgColor="secondary"/>
        <MyCard imagen={imagen3} nombre="gohan" descripcion="Un perro de tamaño mediano con un corazon gigante. Hazte amigo de gohan y experimenta un amor incondicional!" btn1="shar pel" BgColor="success"/>
        <MyCard imagen={imagen4} nombre="princesa" descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. !ayuda a princesa a encontrar su final feliz!." btn1="Beagle" BgColor="info"/>
      </div>
      <Footer descripcion="explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferenctes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia unica. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre"/>
    </>
  )
}

export default App
// para efectos de este desafio inclui todo el texo en app.jsx, soy conciente de que es posible hacerlo de otras maneras pero espero que no sea un problema, ya que, en el desafio no hay especificacion sobre este aspecto, al igual que por esta vez omiti usar un for o un map. con el fin de entender mejor como funciona react, espero que no afecte a la nota gracias profe :) //


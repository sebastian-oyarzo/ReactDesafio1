import Tags from "./Tags"

const MyCard = ({imagen , nombre , descripcion, btn1 , BgColor}) => {
  return (
    <div className="card">
        <img src={imagen} alt="imagen de perro"/>
        <p>{nombre}</p>
        <p>{descripcion}</p>
        <Tags btn={btn1} color={BgColor}/>
    </div>
  )
}

export default MyCard
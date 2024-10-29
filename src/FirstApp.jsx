import PropTypes from "prop-types";

/* const getResult = (a,b) =>{
    return a+b
}

const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando',

}; */

export const FirstApp = ( {title, subtitle,name} ) => {

  //console.log(props);


  return (
   <>
    <h1 data-testid="test-title"> {title} </h1>
    {/* <code>{getResult(1,2)}</code>  */}
    <p>{subtitle}</p>
    <p>{subtitle}</p>
    <p>{name}</p>
   </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    name: 'Fernando Herrera',
    subtitle: 'No hay subtitulo',
    //title: 'No hay titulo',
}
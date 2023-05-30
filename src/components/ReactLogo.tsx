//import foaLogo from '../image/logo_foa.png';
import globaLogo from '../image/logo_global.png';

const onClick = () =>{
  window.location.href="https://api.whatsapp.com/send/?phone=51943344831&text&type=phone_number&app_absent=0";
}


export const ReactLogo = () => {
  return (
    <>
      <div className='content-leyenda'>
        <h4 className='titulo'>Leyenda</h4>
        <div className='content-desc'>
          <p>Zona Con Cobertura</p>
          <div className="cuadrado"></div>
        </div>
        <button className='contact-agente' onClick={onClick} formTarget='_blank'> Contactar Agente</button>
      </div>

      <img src={globaLogo} alt="Logo de foa"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '100px',
        }}
      />
    </>
  )
}

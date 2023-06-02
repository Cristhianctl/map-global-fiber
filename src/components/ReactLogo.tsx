//import foaLogo from '../image/logo_foa.png';
import globaLogo from '../image/logo_global.png';
import zona from '../image/map.svg';

const onClick = () =>{
  window.location.href="https://api.whatsapp.com/send/?phone=51943344831&text&type=phone_number&app_absent=0";
}


export const ReactLogo = () => {
  return (
    <>
      <div className='content-leyenda'>
        <div className='content-desc'>
          <h4 className='titulo'>Leyenda</h4>
          <h6>Zona Con Cobertura</h6>
          <img className="cuadrado" src={zona} alt='zona de coberuta' />
          <p>Contacatar Agente</p>
          <button className='contact-agente' onClick={onClick} formTarget='_blank'> CONTACTAR</button>
        </div>
      </div>

      <img className='img-logo' src={globaLogo} alt="Logo de foa"
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

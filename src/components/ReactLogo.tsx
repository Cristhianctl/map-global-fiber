import foaLogo from '../image/logo_foa.png';
import globaLogo from '../image/logo_global.png';

export const ReactLogo = () => {
  return (
    <>
      <img src={foaLogo} alt="Logo de foa"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '80px',
        }}
      />

      <img src={globaLogo} alt="Logo de foa"
        style={{
          position: 'fixed',
          top: '60px',
          right: '20px',
          width: '80px',
        }}
      />
    </>
  )
}

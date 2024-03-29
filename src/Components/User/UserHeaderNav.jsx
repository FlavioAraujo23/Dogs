import React from 'react';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { UserStorage } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatísticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './css/UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const {userLogout} = React.useContext(UserStorage);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const {pathname}= useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  
  function handleLogout() {
    userLogout();
    navigate('/login')
  }

  return (
    <>
      {mobile && (
        <button 
          aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)} 
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}>
        </button>
      )} 
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to={'/conta'} end> 
          <MinhasFotos/> 
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to={'/conta/estatisticas'}> 
          <Estatísticas/> 
          {mobile &&'Estatísticas'}
        </NavLink>
        <NavLink to={'/conta/postar'}> 
          <AdicionarFoto/> 
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}> 
          <Sair/> 
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
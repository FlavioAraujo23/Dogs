import React from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { UserStorage } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatísticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './css/UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = React.useState(null);
  const {userLogout} = React.useContext(UserStorage);
  function handleLogout() {
    userLogout();
    navigate('/login')
  }
  
  return (
    <nav className={styles.nav}>
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
  )
}

export default UserHeaderNav
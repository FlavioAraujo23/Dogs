import React from 'react'
import { UserStorage } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({children}) => {
  const {login} = React.useContext(UserStorage);
  if(login === true) {
    return children
  } else if (login === false) {
    return <Navigate to={'/login'}/>;
  } else {
    return <>Carregando...</>
  }
}

export default ProtectedRouter
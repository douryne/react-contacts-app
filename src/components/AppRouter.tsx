import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { publicRoutes, privateRoutes } from '../router/index';


export const AppRouter: React.FC = () => {
  const {isAuth} = useAppSelector(state => state.authReducer);
  return (
    <Routes>
      {
        isAuth
        ?
        privateRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element {...route.props}/>}
          />
        ))
        :
        publicRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element {...route.props}/>}
          />
        ))
      }
    </Routes>
  );
};

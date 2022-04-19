import Contacts from "../pages/Contacts"
import Login from "../pages/Login"
import { Navigate } from "react-router-dom";
import React from "react";

interface IRoute {
  path: string,
  element: React.FC | typeof Navigate,
  props: { to: string }
}

export const privateRoutes: IRoute[] = [
  {path: '/contacts', element: Contacts, props: { to: '/contacts' }},
  {path: '/*', element: Navigate, props: { to: '/contacts' }}
]

export const publicRoutes: IRoute[] = [
  {path: '/login', element: Login, props: { to: '/login' }},
  {path: '/*', element: Navigate, props: { to: '/login' }}
]
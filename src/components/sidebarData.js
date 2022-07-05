import React from 'react';
import * as AiIcons from 'react-icons/ai';
import {IoLogOut} from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text '
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoLogOut />,
    cName: 'nav-text'
  },
   
];
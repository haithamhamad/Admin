import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';


export default function Dashboard(){

return(
    <>
        <Nav>
            <Bars />

            <NavMenu>
                <NavLink to='/NewUsers' activestyle>
                    New users
                </NavLink>
                <NavLink to='/Dashboard' activestyle>
                 Notifications
                </NavLink>



            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/'>Sign out</NavBtnLink>
            </NavBtn>
        </Nav>

    </>

















)


















}
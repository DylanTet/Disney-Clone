import styled from 'styled-components'
import React from 'react'
import { disneyLogo } from "../../images/logo.svg"


const Header = () => {

    return (
  
      <Nav>
        <img src={disneyLogo} />
        <NavMenu>
          
          <a>
            <img />
            <span>HOME</span>
          </a>
          <a>
            <img />
            <span>SEARCH</span>
          </a>
          <a>
            <img />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img />
            <span>MOVIES</span>
          </a>
          <a>
            <img />
            <span>SERIES</span>
          </a>
          
        </NavMenu>
        <ProfileImg />
      
      </Nav>
      
    )
  }
  
  export default Header
  
  const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    
    `
  
  const NavMenu = styled.div`
    display: flex;
    flex: 1;
    padding: 0 40px;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

      img {
        height: 20px;
      }

      span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
          position: absolute;
          content: "";
          color: white;
          top: 0;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
      }
      &:hover {
          span:after {
            transform: scaleX(1);
            opacity: 1;
            
          }
      }
    }
    
    
    `
  
  const ProfileImg = styled.img `
      height: 48px;
      width: 48px;
      border-radius: 50%;
    `
import styled from 'styled-components'
import React from 'react'
import disneyLogo  from "../images/logo.svg"
import house from '../images/home-icon.svg'
import search from '../images/search-icon.svg'
import watch from '../images/watchlist-icon.svg'
import original from '../images/original-icon.svg'
import movie from '../images/movie-icon.svg'
import series from '../images/series-icon.svg'
import { Outlet } from 'react-router-dom'



const Header = () => {

    return ( 
      <div>
        <Nav>
          <img className='logo' src={disneyLogo} />
          <NavMenu>
            
            <a>
              <img src={house} />
              <span>HOME</span>
            </a>
            <a>
              <img src={search}/>
              <span>SEARCH</span>
            </a>
            <a>
              <img src={watch}/>
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={original}/>
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src={movie} />
              <span>MOVIES</span>
            </a>
            <a>
              <img src={series} />
              <span>SERIES</span>
            </a>
            
          </NavMenu>
          <ProfileImg />
          
        </Nav>
        <Outlet />
      </div>
      
    )
  }
  
  export default Header
  
  const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;

    .logo {
        width: 80px;
    }
    
    `
  
  const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

      img {
        height: 25px;
        margin-right: 2px;
      }

      span {
        font-size: 16px;
        letter-spacing: 1.42px;
        position: relative;

          &:after {
            position: absolute;
            content: "";
            background: white;
            height: 2px;
            left: 0;
            right: 0;
            bottom: -3px;
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
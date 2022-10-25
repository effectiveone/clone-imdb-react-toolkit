import React, { useState, useEffect, useRef} from 'react'
import Link from 'next/link';
import uuid from 'react-uuid';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
// import { useDispatch, useSelector } from "react-redux";
import {Container} from "@mui/material"
import { getCategoryMovies } from "../../../redux/reducers/categorySlice";
import { getMovies } from "../../../redux/reducers/movieSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { IconContext } from "react-icons";
import {FaImdb } from "react-icons/fa";
import ReactDOM from 'react-dom';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from "../../../assets/images/IMDB_Logo_2016.svg"
import SearchBox from "./SearchBox/SearchBox";
import LanguageBox from "./LanguageBox/LanguageBox"
import SearchPortal from "./SearchPortal/SearchPortal"


import Divider from '@mui/material/Divider';

const   MenuChanger = styled('div')(({ theme }) => ({
     display: "flex",
     float: "left",
     alignItems: "center",
     '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        }
}));



const SearchContainer = styled('div')(({ theme }) => ({
display: "flex",
float: "left",
alignItems: "center",
backgroundColor: "white",
color: "black"
}))

const Search = styled('div')(({ theme }) => ({
     position: 'relative',
     borderRadius: theme.shape.borderRadius,
     backgroundColor: alpha(theme.palette.common.white, 0.15),
     '&:hover': {
       backgroundColor: alpha(theme.palette.common.white, 0.25),
     },
     marginRight: theme.spacing(2),
     marginLeft: 0,
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       marginLeft: theme.spacing(3),
       width: '600px',
     },
   }));
   
   const SearchIconWrapper = styled('div')(({ theme }) => ({
     padding: theme.spacing(0, 2),
     height: '100%',
     position: 'absolute',
     right: "250px",
     pointerEvents: 'none',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   }));
   
   const StyledInputBase = styled(InputBase)(({ theme }) => ({
     color: 'inherit',
     '& .MuiInputBase-input': {
       padding: theme.spacing(1, 1, 1, 0),
       // vertical padding + font size from searchIcon
       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
       transition: theme.transitions.create('width'),
       width: '100%',
       [theme.breakpoints.up('md')]: {
         width: '20ch',
       },
     },
   }));


const Navbar: React.FC = () => {
// Search Portal
const [name, setName] = useState("love");
  const [open, setOpen] = useState(false);
  const {
    moviesList
  } = useAppSelector((state) => ({ ...state.movie }));

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name, dispatch]);

 console.log("moviesList",moviesList)

  const inputSearch = useRef();
const Portals = () => {
  if (!open) return null;
  return ReactDOM.createPortal(
<SearchPortal/> ,document.body);
  }

  

  useEffect(() => {
    window.onclick = (event) => {
      if (event.target.contains(inputSearch.current)
        && event.target !== inputSearch.current) {     
          setOpen(false)
      }
    }
}, []);



  //Another


  const { category, loading } = useAppSelector(state=>state.category);
  
  useEffect(() => {
  
  dispatch(getCategoryMovies());
  
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (

    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
          <AddIcon/>
      
          </Badge>
        </IconButton>



      </MenuItem>
      <p>   Watchlist</p>
    </Menu>
  );
  return (
   <>
 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      style={{backgroundColor: "#121212",
    display: "flex", 
    alignItems: "center"}}
      >
      <Container>

        <Toolbar>

        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           
             <IconContext.Provider value={{ color: "rgb(245,197,24)",   className: "global-class-name", style: { width: '100px', height: "50px" } }}>
          <div>
          <FaImdb/>
          </div>
        </IconContext.Provider>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          <MenuChanger>  <MenuIcon /><p style={{fontSize: "16px"}}>Menu</p> </MenuChanger>
          </IconButton>
     
     <SearchContainer> <SearchBox/>
          <Search>
  
            <StyledInputBase
              ref={inputSearch}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={({target: {value}}) => {
                setName(value)
                setOpen(true)
               
              }}
            />
          </Search>
          
          <SearchIconWrapper>
<SearchIcon />
</SearchIconWrapper>
          </SearchContainer>
          <Portals/>
          <Divider orientation="vertical" flexItem style={{color: "green"}} />

          <Box sx={{ flexGrow: 1, alignItems: "center" }} >
          <Badge  color="error">
                <FavoriteIcon />
              </Badge>
              </Box>
              <p style={{display: "flex", alignItems: "center"}}>Favorite</p>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        
              <Badge  color="error">
                <AddIcon />
              </Badge>
            </IconButton>
       <p style={{display: "flex", alignItems: "center"}}>Watchlist</p>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <LanguageBox/>
        </Toolbar>
        </Container>

      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>

</>
  )
}

export default Navbar
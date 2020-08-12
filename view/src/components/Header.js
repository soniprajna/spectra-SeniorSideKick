import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
//import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink, lightBlue } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({ typography: { fontFamily: [ 'Permanent Marker' ]}});

function Header() {
    return (
        <div className="header">
            <Link href="http://localhost:3000/"><IconButton>
            <HomeRoundedIcon fontSize="large" style={{ color: pink[200] }} />
            </IconButton></Link>
            <div class="title">
            {/* <img className="header__logo" src="https://cdn2.vectorstock.com/i/1000x1000/52/21/charity-helping-hands-with-red-heart-vector-27945221.jpg" alt="our logo"/> */}
            <h1>
                Senior x Sidekick
            </h1>
            </div>
            <Link href="/login"><IconButton>
            <PersonIcon fontSize="large" style={{ color: pink[200] }}/>
            </IconButton></Link> 
        </div>
    )
}

export default Header
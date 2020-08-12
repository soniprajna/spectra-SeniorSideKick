import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { pink, lightBlue, grey, blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';


function Copyright() {
  return (
    <p style={{ color: grey[800] }}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/soniprajna/spectra-SeniorSideKick">
        SeniorSideKick
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 0,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === blue[200] ,
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: blue[200]}}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Find your SeniorSideKick!</Typography>
          <Link href="/HowTo"><IconButton>
          <HelpIcon fontSize="large" style={{ color: pink[200] }} />
          </IconButton></Link>
          <Copyright />
        </Container>
      </footer>
    </div>
   
    
  );
}

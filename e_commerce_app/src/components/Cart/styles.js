import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  toolbar: theme.mixins.toolbar,
  title: {
    border: '1px solid black',
    marginTop: '5%',
    textAlign:'center',
   
    backgroundColor: "#222",
    color: '#fff',
    borderRadius: '8px'
    
  },
  btnContainer:{
  display: 'flex',
  alignItems: 'center',
  },
  emptyButton: {
    backgroundColor: 'rgba(224,36,36,0.9)',
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '10px',
      fontSize: '0.8em'
    },
  },
  checkoutButton: {
    backgroundColor: 'blue',
    minWidth: '10px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
     
      fontSize: '0.8em'
    },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    border: '1px solid black',
    padding: '10px',
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: '8px'
  },
  InfoNoArticles:{
    fontSize: '1.5em',
    textAlign: 'center',
    paddingTop: "50px"
  },

}));
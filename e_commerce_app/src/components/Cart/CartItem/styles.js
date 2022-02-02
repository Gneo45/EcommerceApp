import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    minHeight: '100%'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '100%'
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#222',
    border:'1px solid grey',
    borderRadius: '5px',
    color: "white"
  },
  addArticle: {
    color: "gold",
   fontWeight: '900',
   fontSize: '1.3em'
  },
  deleteArticle:{
    backgroundColor: 'rgba(224,36,36,0.9)',
    color: '#fff'
  }
}));
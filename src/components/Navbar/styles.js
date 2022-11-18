import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, orange, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: green[100],
    borderRadius: 15,
    margin: '10px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
    color: '#FFFFFF',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    color: 'white',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '0.7em',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: orange[500],
    padding: '4px 0px 0px 0px',
    borderRadius: 10,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

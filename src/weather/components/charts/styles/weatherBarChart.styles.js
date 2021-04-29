import { makeStyles } from '@material-ui/core/styles';

const weatherBarChartStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  paper: {
    width: '60px',
    backgroundColor: 'aqua',
    maxWidth: 100,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  date: { fontSize: '14px' },
  temperature: { fontSize: '18px', fontWeight: 'bold' },
});

export default weatherBarChartStyles;

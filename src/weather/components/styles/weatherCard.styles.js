import { makeStyles } from '@material-ui/core/styles';

const weatherCardStyles = makeStyles({
  root: {
    margin: '10px',
    padding: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  media: {
    paddingTop: '46.25%',
  },
});

export default weatherCardStyles;

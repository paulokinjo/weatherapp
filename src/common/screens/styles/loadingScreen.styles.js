import { makeStyles } from '@material-ui/core/styles';

const loadingScreenStyles = makeStyles({
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

export default loadingScreenStyles;

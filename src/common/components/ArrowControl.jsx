import ForwardIcon from '@material-ui/icons/Forward';
import arrowControlStyles from './styles/arrowControl.styles';

const ArrowControl = (props) => {
  const { className, style, onClick, customStyle, isVisible } = props;

  return (
    <>
      {isVisible && (
        <ForwardIcon
          className={className}
          style={{ ...style, ...arrowControlStyles, ...customStyle }}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default ArrowControl;

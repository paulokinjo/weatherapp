import ArrowControlStyles from './styles/arrowControl.styles';
import ForwardIcon from '@material-ui/icons/Forward';

const ArrowControl = (props) => {
  const { className, style, onClick, customStyle, isVisible } = props;

  return (
    <>
      {isVisible && (
        <ForwardIcon
          className={className}
          style={{ ...style, ...ArrowControlStyles, ...customStyle }}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default ArrowControl;

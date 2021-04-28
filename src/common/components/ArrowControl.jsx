import ForwardIcon from '@material-ui/icons/Forward';

const ArrowControl = (props) => {
  const defaultStyle = { fontSize: 70, color: 'blue' };
  const { className, style, onClick, customStyle, isVisible } = props;

  return (
    <>
      {isVisible && (
        <ForwardIcon
          className={className}
          style={{ ...style, ...defaultStyle, ...customStyle }}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default ArrowControl;

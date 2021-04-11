import './Spinner.css';

interface Props {
  asOverlay?: boolean;
}

const Spinner = ({ asOverlay }: Props) => {
  return (
    <div
      className={`loading-spinner ${asOverlay && 'loading-spinner__overlay'}`}
    >
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;

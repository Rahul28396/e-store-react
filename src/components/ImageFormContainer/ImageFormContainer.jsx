import './ImageFormContainer.css';

const ImageFormContainer = ({ src, alt, children }) => {
  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="wrapper">
          {/* Left Image */}
          <div className="image">
            <img src={src} alt={alt} />
          </div>

          {/* Right Form */}
          <div className="form-section">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFormContainer;

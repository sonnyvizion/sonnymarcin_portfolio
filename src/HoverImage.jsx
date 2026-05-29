function HoverImage({ primarySrc, secondarySrc, alt = "", className = "" }) {
  return (
    <span className={`hover-image ${className}`}>
      <img className="hover-image__primary" src={primarySrc} alt={alt} />
      {secondarySrc && (
        <img className="hover-image__secondary" src={secondarySrc} alt="" />
      )}
    </span>
  );
}

export default HoverImage;

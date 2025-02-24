const VapeCard = ({ imgURL, changeVapeBigImage, vapeBigImage }) => {
    const handleClick = () => {
      if (vapeBigImage !== imgURL.vapeBig) {
        changeVapeBigImage(imgURL.vapeBig);
      }
    };
  
    return (
      <div 
        className={`border-2 rounded-xl mb-20 ${vapeBigImage === imgURL.vapeBig ? 'border-blue-600' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className="p-2">
          <img 
            src={imgURL.thumbnail} 
            alt="Vape thumbnail" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    );
  };
  
  export default VapeCard;
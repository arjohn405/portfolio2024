import React from 'react';

function Banner({ imageUrl }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="banner-content">
        {/* You can add any content here if needed */}
      </div>
    </div>
  );
}

export default Banner; 
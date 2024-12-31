import React from 'react';

function Banner({ imageUrl }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* The background image is set via inline style */}
    </div>
  );
}

export default Banner; 
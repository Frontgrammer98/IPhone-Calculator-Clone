import React from 'react';
import redeveloperlogo from '../Images/relogo.png'; // Importing the logo image
import '../Styles/Logo.css';

// React functional component for the Logo
const Logo: React.FC = () => {
  return (
    // Container for the redeveloper logo
    <div className='redeveloper-logo-container'>
      {/* Logo image with alt text and a specific class */}
      <img
        src={redeveloperlogo} // Source of the logo image
        alt='redeveloper-logo' // Alternative text for accessibility
        className='redeveloper-logo' // CSS class for styling
      />
    </div>
  );
}

export default Logo;

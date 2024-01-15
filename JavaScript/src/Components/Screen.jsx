// Import React and the screen styles
import React from "react";
import '../Styles/Screen.css';

// Screen component function
function Screen({ input }) {
  // Render the screen component with the provided input
  return (
    <div className='screen-container'>
      {/* Display the input value on the screen */}
      {input}
    </div>
  );
}

// Export the Screen component as the default export
export default Screen;

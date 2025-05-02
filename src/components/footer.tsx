import React from 'react';

function Footer() {
  return (
    <div className='text-indigo-700 p-5 justify-items-center'>
        <footer >
            <p>&copy; {new Date().getFullYear()} NoteNinja. All rights reserved.</p>
        </footer>
    </div>
    
  );
}

export default Footer;
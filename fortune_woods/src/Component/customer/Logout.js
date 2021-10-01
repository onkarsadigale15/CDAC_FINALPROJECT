import React from "react";


function Logout(){

    console.log("before  logout " +localStorage.getItem('loginDetails') ? localStorage.getItem('loginDetails') : null);
    
    localStorage.removeItem('role');
    localStorage.removeItem('loginDetails');
    localStorage.clear();
    console.log("after  logout " +localStorage.getItem('loginDetails') ? localStorage.getItem('loginDetails') : null);
    
    
  return(
  
      <div>
            <h4>Logout Succesfully</h4>
        </div>
  );
}



export default Logout;
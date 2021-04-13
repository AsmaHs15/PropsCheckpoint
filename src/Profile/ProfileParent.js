import React from 'react';
import ChildComponent from './ProfileComponent ';



const ParentComponent = () => {
    
  const handleAlert = () => alert(`Thank you !`);
  
        const generalStyle={backgroundImage:`url('/BackGround.jpg')` }

        const avatar = {   
          verticalAlign: 'middle',
          width: 300,
          height: 300,
          borderRadius: 50 }


    return (
      <div style={generalStyle}>
        <ChildComponent
          // String Types

          fullName="Asma Haouas"
         
          bio="I am a the influencer of the year"
             
          
          profession='I am French blogger and youtuber'
        
          // Function Type
          handleName ={handleAlert}
     >
        
          <div>
        
            <img  style={avatar} src="/profileImg.png"  alt="imagePrpfile"></img> 
        
          </div>
        </ChildComponent>
      </div>
    );
  };
  
  export default ParentComponent;
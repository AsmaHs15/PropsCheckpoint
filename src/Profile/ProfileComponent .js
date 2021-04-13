import React from 'react';
import PropTypes from 'prop-types';


          const buttonStyle={

           textDecoration:'none',
           textTransform:'upperCase',
           fontFamily:'Roboto sansSerif',
           fontWeight:700,

           color:'black',
          }



const ChildComponent = (props) => {
    console.log(props);
  
    // Destructuring 
    const {
     fullName,
      bio,
      profession,
      children,
      handleName,
      } = props;
  
    return (

      <div>
     
      <h1 style={{color:'lightGray'}}>{fullName}</h1>

      < h5 style={{color: 'lightGray'}}> {profession} </h5>

         <div   style ={{display:'flex', justifyContent:'space-around'}} >

            <p style={{fontFamily:'Times New Roman", Times, serif', fontStyle: 'oblique', color: '#3ae1e5'}}> 
               <pre> <b> 3300 Pub,  999.8k Abonnet,  1000 Abonnement </b></pre> <br></br>
               {bio} <br></br>Currently : Paris <br></br>
                Beauty, Fashion , Travel <br></br>
                Youtube : MyBlog <br></br>
                Iphone 11Pro <br></br>
            </p>
             {children}
        </div>
        <div   style ={{display:'flex', justifyContent:'space-around'}} >
     
          <button  style ={buttonStyle} onClick={() => handleName('')}>Subscribe</button>
          <p></p>
        
          </div>
      </div>
    );
  }
  


  // Default Props
  ChildComponent.defaultProps = {
    fullName: 'fullName...',
    bio : 'bio...',
    profession:'profession...',
  };
  
  //PropTypes
  ChildComponent.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
  };
  
  export default ChildComponent;
  
import React from 'react';

const Profile = (props) => {
    console.log(props);
    return (
     
        <div>
            <h1 style={{color:'green',fontSize:'40px',fontFamily:'fantasy'}}>{props.name} </h1> 
            <h1 style={{color:'white',fontFamily:'fantasy'}}>{props.profession}</h1>
            <h1 style={{color:'red',fontFamily:'fantasy'}} >{props.bio}</h1>
            <div>{props.children}</div>
        </div>
    )
}

export default Profile

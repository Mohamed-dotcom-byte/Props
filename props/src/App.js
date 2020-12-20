
import './App.css';
import Profile from './profile/Profile';
import myphoto from './myImage.jpg';
import PropTypes from "prop-types";
function App() {
  const fullName = "Mohamed Aziz Ben Chawacha ";
  const bio = "Automation engineer" ;
  const profession = "Js Fullstack developper";
const alertName= alert('Mohamed Aziz Ben Chawacha');
  return (

    <div className="App">
      <div className="App-header">
      <Profile name={fullName} bio={bio} profession={profession} alert={alertName} /><img src={myphoto} alt="me" /><Profile />
   </div>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,

};


export default App;

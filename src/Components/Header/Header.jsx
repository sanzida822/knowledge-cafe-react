
import './Header.css'
import profileImage from '../../assets/OIP.jpg'
const Header = () => {
    return (
        <div className='Header'>
            <div className='knowleghe-cafe'>
            <h2>Knowledge Cafe</h2> 
            </div>
          

           <div className='profile-image'>
            <img src={profileImage} alt="" />
           </div>
        </div>
    );
};

export default Header;
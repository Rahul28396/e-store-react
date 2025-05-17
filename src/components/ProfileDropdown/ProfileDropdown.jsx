import { useNavigate } from 'react-router';
import './ProfileDropdown.css';

const ProfileDropdown = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="profile-dropdown">
                <h4> Welcome Guest!! </h4>
                <button onClick={() => navigate('/login')}>Login/Signup</button>
                <ul>
                    <li>Orders</li>
                    <li>Wishlist</li>
                    <li>Saved Addresses</li>
                    <li>Saved Cards</li>
                    <li>Saved VPAs</li>
                </ul>
            </div>
        </>
    );
};

export default ProfileDropdown;
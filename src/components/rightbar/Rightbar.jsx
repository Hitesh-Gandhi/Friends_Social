import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../Online";

export default function Rightbar({ profile }) {

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Johnny Walker</b> and <b>3 others Friends</b> have birthday today.
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.jpeg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightBar = () =>{
        return(
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Queensland</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Barcelona</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Married</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
                    <span className="rightbarFollowingName">Johnny Walker</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
                    <span className="rightbarFollowingName">Coby Bryant</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
                    <span className="rightbarFollowingName">David Beckham</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
                    <span className="rightbarFollowingName">Jill Kargil</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
                    <span className="rightbarFollowingName">Illeana Mbappe</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    );
}


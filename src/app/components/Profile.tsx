import { ReactComponent as IconArrowdown } from "../../assets/icon-arrow-down.svg";
function Profile({
  picture,
  userName,
}: {
  picture: string | undefined;
  userName: string | undefined;
}) {
  return (
    <div className="profile">
      <img src={picture} alt="user" />
      <div className="profile__user">
        <p>{userName}</p>
        <button className=" btn-text">
          Your account <IconArrowdown />
        </button>
      </div>
    </div>
  );
}

export default Profile;

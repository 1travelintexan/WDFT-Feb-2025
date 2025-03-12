import { Message } from "./Message";
import { ProfileImage } from "./ProfileImage";
import { TimeStamp } from "./TimeStamp";
import { User } from "./User";
import { Actions } from "./Actions";
function Tweet(props) {
  console.log(props);
  const { user, timestamp, message } = props.oneTweet;
  return (
    <div className="tweet">
      <ProfileImage userImage={user.image} />
      <div className="body">
        <div className="top">
          <User user={user} />
          <TimeStamp timestamp={timestamp} />
        </div>
        <Message theMessage={message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

import { firstTweet } from "../../constants"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(tweets, setTweets, userProfile) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox userProfile = {userProfile} setTweets = {setTweets}/>


      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {/* {props.map((item, index) => {
          return <Tweet key = {index} tweet = {item}/>
        })} */}
      </div>
    </div>
  )
}

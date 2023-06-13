import { firstTweet } from "../../constants"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed({tweets, setTweets, userProfile, tweetText, setTweetText}) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox tweets = {tweets} userProfile = {userProfile} setTweets = {setTweets} tweetText = {tweetText} setTweetText = {setTweetText}/>


      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {/* {console.log(tweets)}
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))} */}
        {tweets.map((item, index) => {
          return <Tweet key = {index} tweet = {item}/>
        })}
      </div>
    </div>
  )
}

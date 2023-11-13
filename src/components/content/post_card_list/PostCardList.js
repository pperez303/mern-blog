import Post from "../post_card/PostCard";
import "./postcardlist.css";

export default function Posts({ posts }) {
  return (
    <div className="postCardContainer">
      {posts.map((p) => (
        <Post key={p._id} post={p} />                 //must add the key= property or it sends a warning message.
        //<Post />
      ))}
    </div>
  );
}
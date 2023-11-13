import Post from "../post/PostContent";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="postlist">
      {posts.map((p) => (
        <Post key={p._id} post={p} />                 //must add the key= property or it sends a warning message.
        //<Post />
      ))}
    </div>
  );
}
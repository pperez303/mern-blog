
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./singlepost.css";


export default function SinglePost() {
  const location = useLocation();
  console.log(location)
  const path = location.pathname.split("/")[2];
  console.log(path)
  const [post, setPost] = useState({});
  const PubFolder = process.env.REACT_APP_PROXY + "/api/images/";
  //const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [postbody, setPostBody] = useState("");

  useEffect(() => {
    const getPost = async () => {
      console.log('In useEffect')
      const res = await axios.get(process.env.REACT_APP_PROXY + "/api/posts/" + path);
      console.log('After useEffect')
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setPostBody(res.data.postbody);
      console.log(res)
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">{title} </h1>
        
          {post.photo && (
            <img src={PubFolder + post.photo} alt="" className="singlePostImg" />
            )}

        
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
          
        </div>

        <div className="singlePostDesc">
          <p className="postDescription">{desc}</p>
        </div>

        <div className="postbody">
          {parse(postbody)}
        </div>
        
        
        {/* // test - here is where you would insert the additional blog content. */}
        <br />
        
        {/* // test */}
      </div>
    </div>
  );
}
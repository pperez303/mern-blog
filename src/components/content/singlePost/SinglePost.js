
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./singlepost.css";

import Sidebar from "../../common/left_sidebar/LeftSidebar";


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
    <div className="postContainer">
      <section className="postSectionTop">
        <div className="postHeaderTop">
          <div className="postHeaderImage">
            {post.photo && (
              <img src={PubFolder + post.photo} alt="" className="singlePostImg" />
            )}
          </div>
          <div className="postHeaderInfo">
            <div className="postHeaderTitle">{title} </div>
            <div className="postHeaderHook">{desc}</div>
            <div className="metaData">
              <div className="postHeaderAuthor">
                Author:
                <Link to={`/?user=${post.username}`} className="link">
                  <b> {post.username}</b>
                </Link>
              </div>
              <div className="postHeaderDate">
                {new Date(post.createdAt).toDateString()}
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="postSectionMiddle">
        <div className="socialIcons">
          social Icons
        </div>
        <div className="contactMe">
          <button className="contactMeButton">
            <Link className="link" to="/contact">
              Contact me if you have any questions
            </Link>
          </button>
        </div>
      </section>
      <section className="postSectionDivider">
        <div>
          <hr className="hrSolid" />
        </div>
      </section>
      <section className="postSectionBottom">
        <div className="postBody">
          <div className="postBodyLeft">
          <Sidebar className="sidebar"/>
          </div>
          <div className="postBodyRight">
            <h2> my Story </h2>
            <p>
            rightsideoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
            eeeeeeeeeee
            eeeeeeeeell
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <p>
            rightsideoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
            eeeeeeeeeee
            eeeeeeeeell
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
            <br></br>
            <p>
            rightside
            eeeeeeeeeee
            eeeeeeeeell
            llllllllllll
            lllllllllllll
            llllllllllll
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}

/*
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

        
        /* // test - here is where you would insert the additional blog content.
        <br />
        
      </div>
    </div>
  );
}

*/
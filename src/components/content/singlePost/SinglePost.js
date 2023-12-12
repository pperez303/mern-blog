
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./singlepost.css";

//import Sidebar from "../../common/left_sidebar/LeftSidebar";

// Single
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
              <img src={PubFolder + post.photo} alt="" className="singlePostImg" />
              <div className="postHeaderImageText">
                <h2 className="posteader">{post.articleheader}</h2>
                <h3 className="postSubHeader">{post.articlesubheader}</h3>
                <h4 className="postModuleNumber">{post.modulenumber}</h4>
              </div>
          </div>

          <div className="postHeaderInfo">
            <div className="postHeaderTitle">{title} </div>
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
            <div className="navLogo">nubeWebDev</div>
          </div>
        </div>
      </section>
      
      
      <section className="postSection">
        <div className="postGroup">
          
          <div className="postBody">
            <div className="singlePostDesc">
              <p className="postDescription">{desc}</p>
            </div>
            <div className="postContent">
              {parse(postbody)}
            </div>
          </div>
          {/*
          <div className="postSideBar">
            <Sidebar className="sidebar"/>
          </div>
  */}
        </div>
          
      </section>
      <section className="postSectionDivider">
        <div>
          <hr className="hrSolid" />
        </div>
      </section>

      <section className="postSectionSocial">
        <div className="postSocial">
          <div className="socialIcons">
            <div className="postSocialIcons">
              <i className="postIcon fab fa-facebook-square"></i>
              <i className="postIcon fa-brands fa-linkedin"></i>
              <i className="postIcon fab fa-pinterest-square"></i>
              <i className="postIcon fab fa-instagram-square"></i>
            </div>
          </div>
          <div className="contactMe">
            <p className="contact-me-help">Do you need some guidance?</p>
            <button className="contactMeButton">
              <Link className="link" to="/contact">
                Contact me
              </Link>
            </button>
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
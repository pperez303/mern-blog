// import React from 'react'
import SinglePost from "../../components/content/singlePost/SinglePost.js"
import Sidebar from "../../components/common/sidebar/Sidebar.js"
import "./postpage.css"


function Single_Post() {

  return (
    <>
      <div className="wrapper">
          <SinglePost className="singlepost" />
          <Sidebar className="sidebar" />
      </div>
    </>
  )
}

export default Single_Post;
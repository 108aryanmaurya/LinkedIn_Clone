import React, { useState,useMemo } from "react";
import "./index.scss";
import { getTimeStamp } from "../../../helper/useMoment";
import { getLikes,postcomment,GetComments } from "../../../api/FireStoreAPI";

import { likepost } from "../../../api/FireStoreAPI";
import {AiOutlineComment, AiOutlineLike ,AiFillLike} from "react-icons/ai";
function LikeButton({ userId, postId,currentUser }) {
  const [likescount,setlikecount]=useState(0)
  const [liked,setliked]=useState(false)
  const [allcomments,setallcomments]=useState([])
  const [show,setshow]=useState(false)
  const [getcomment,setgetcomment]=useState("")
// const []

    const getCommnet=(event)=>{
    setgetcomment(event.target.value);
    console.log(getcomment)
    // console.log(event)
    console.log("getcomment")
      
    }


const addcomment=()=>{
  console.log(getcomment)
  postcomment(postId,getcomment,currentUser.name,getTimeStamp("LLL"),setgetcomment)
}
  const handelclick = () => {
    // console.log("i weork")
    likepost(userId, postId,liked);
  };
  useMemo(() => {
    getLikes(postId,userId,setliked,setlikecount);
    GetComments(postId,setallcomments)
  }, [userId,postId]);
  console.log(allcomments)
  return (
    <div
      className="like-cont"
    
    >
      <div>
    <p className="like-count"> {likescount} people liked this post</p>
      {/* <p>you {likescount-1>0? `and  ${likescount-1} `:""}  {likescount-1>0&&likescount==0?'others':'other'} liked</p> */}
      <hr/>
      </div>
  <div className="reply-cont">
  
<div   onClick={() => {
        handelclick();
      }} className="like-cont2">   
  {liked? <AiFillLike color={'#0072b1'} size={20}></AiFillLike>:
      <AiOutlineLike size={20}></AiOutlineLike>
}
      <p className={liked?"blue":"black"} > {liked?"liked":"like"}</p>
    </div>
    <div onClick={()=>{setshow(!show)}} className="comment">
{<AiOutlineComment color={show?'#0072b1':""} size={20}></AiOutlineComment>}
<p className={show?"blue":"black"} > Comment</p>
</div>
    </div>
 
      <div className="cmt-box">
    {show?<><input onChange={getCommnet} className="input" name="comment"
     value={getcomment}
      placeholder="Add a comment"></input>
    <button onClick={addcomment} className="save-cmt">Add comment</button>
  <div className="all-comments">
    {allcomments.length>0? (allcomments.map((comnt)=>{
      return (<>
      <div className="single-comment">
      <p className="name1">{comnt.commentor}</p>
      <p className="comment">{comnt.data}</p>
      {/* <p>•</p> */}
      <p className="timestamp">{comnt.timestamp}</p>
      </div>
      </>)
    })
   ):<></>}
      </div>

    </>:<></>}

    </div> 
    </div> 
    
  );
}

export default LikeButton;

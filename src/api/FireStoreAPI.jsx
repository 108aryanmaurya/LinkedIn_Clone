import { firestore } from "../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
let dbref = collection(firestore, "posts");
let useref = collection(firestore, "user");
let likeref = collection(firestore, "likes");
let commentref = collection(firestore, "comments");
export const postStatus = (data) => {
  //console.log(data);
  addDoc(dbref, data)
    .then((res) => {
      toast.success("Post added Successfully");
      // //console.log("document uploaded in database")
    })
    .catch((err) => {
      //console.log(err);
    });
};

export const getStatus = (setallstatus) => {
  onSnapshot(dbref, (response) => {
    setallstatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};
export const getallusers = (setallusers) => {
  onSnapshot(useref, (response) => {
    setallusers(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const postuserdata = (data) => {
  //console.log(data);
  addDoc(useref, data)
    .then(() => {})
    .catch((err) => {
      //console.log(err);
    });
};

export const getCurrentuser = (setcurrentUser) => {
  let currEmail = localStorage.getItem("userEmail");
  onSnapshot(useref, (response) => {
    setcurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          // //console.log(item);
          // //console.log(currEmail);
          return item.email === currEmail;
        })[0]
    );
    // //console.log(setcurrentUser);
  });
};

export const editProfile = (id, payLoad) => {
  let userToEdit = doc(useref, id);

  updateDoc(userToEdit, payLoad)
    .then(() => {
      toast.success("Profile has been Updated Successfully");
    })
    .catch((err) => {
      //console.log(err);
    });
};

export const getSingleStatus = (setallstatus, id) => {
  const SinglePostQuery = query(dbref, where("userId", "==", id));
  //console.log("stat");
  onSnapshot(SinglePostQuery, (res) => {
    setallstatus(
      res.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
  //console.log("stat");
};
export const getSingleUser = (setcurrentProfile, email) => {
  const SingleUserQuery = query(useref, where("email", "==", email));
  //console.log("user");
  onSnapshot(SingleUserQuery, (res) => {
    setcurrentProfile(
      res.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0]
    );
  });
  // //console.log("user");
};

export const likepost = (userid, postid, liked) => {
  // console.log(userid, postid);
  try {
    // console.log("i work")
    // console.log(liked)
    let docToLike = doc(likeref, `${userid}_${postid}}`);
    if (liked) {
      deleteDoc(docToLike);
    } else {
      setDoc(docToLike, { userid, postid });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLikes = (postid, userid, setliked, setlikecount) => {
  try {
    let likequery = query(likeref, where("postid", "==", postid));
    onSnapshot(likequery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      console.log(likes);

      let likescount = likes?.length;

      const islike = likes.some((like) => {
        return like.userid === userid;
      });
      setlikecount(likescount);
      setliked(islike);
      // console.log(islike+"islike")
      // console.log(likequery);
    });
  } catch (error) {
    console.log(error);
  }
};

export const postcomment = (
  postId,
  data,
  commentor,
  timestamp,
  setgetcomment
) => {
  try {
    addDoc(commentref, { postId, data, timestamp, commentor }).then(
      setgetcomment("")
    );
  } catch (error) {
    console.log(error);
  }
};

export const GetComments = (postid, setallcomments) => {
  try {
    let singlePostQuery = query(commentref, where("postId", "==", postid));
    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setallcomments(comments);
    });
  } catch (error) {
    console.log(error);
  }
};

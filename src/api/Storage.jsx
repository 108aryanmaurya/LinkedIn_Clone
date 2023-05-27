import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { editProfile } from "./FireStoreAPI";
export const uploadImage = (file, id, setModal2Open, setprogress) => {
  console.log(file[0].name);
  const profilePicsRef = ref(storage, `ProfileImages/${file[0].name}`);
  const uploadtask = uploadBytesResumable(profilePicsRef, file);

  uploadtask.on(
    "state_changed",
    (snapshot) => {
      const progess = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setprogress(progess);
    },
    (error) => {
      console.error(error);
    },
    () => {
      getDownloadURL(uploadtask.snapshot.ref).then((response) => {
        editProfile(id, { ImageLink: response });
        // setImageLink(response);
        setModal2Open(false);
        console.log(response);
        setprogress(0);
      });
    }
  );
};

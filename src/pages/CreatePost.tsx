import { Button, Center, Select, useDisclosure } from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db, storage } from "../utils/firebase";
import { useAppContext } from "../App";
import { v4 as uuidv4 } from "uuid";
import {
  getDownloadURL,
  uploadBytes,
  ref as storageRef,
} from "firebase/storage";
import Dropzone from "react-dropzone";
import PostEditor from "../components/CreatePost/PostEditor";
import PostAlertDialog from "../components/CreatePost/PostAlertDialog";

const CreatePost = () => {
  // get state from App component
  const { isAuth, navigate } = useAppContext();

  const { onOpen, isOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState<string>("Judul...");
  const [post, setPost] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [postCategory, setPostCategory] = useState<string>("berita-sekolah");

  // add doc on firebase database on posts collection then navigate to home
  const createPost = async (imgUrl: string, imgPath: string) => {
    const postCollectionRef = collection(db, "news");
    await addDoc(postCollectionRef, {
      title,
      post,
      postCategory,
      imgUrl,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    }).catch((err) => console.log(err));
    navigate("/");
    window.location.reload();
  };

  // upload image in storage and then save downloadUrl to referred doc on firestore
  const uploadFile = () => {
    if (file === null) {
      alert("Please select an image");
      return;
    }

    const imgPath = `post-image/${postCategory}/${uuidv4()}`;
    const imageRef = storageRef(storage, imgPath);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            createPost(url, imgPath);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    // avoid navigate here when user not login
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {/* drag 'n drop */}
      <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles?.[0])}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <section>
            <div
              {...getRootProps({
                className:
                  "h-[200px] flex justify-center items-center border-dashed border cursor-pointer mx-11 my-4",
              })}
            >
              <input
                {...getInputProps({
                  accept: "image/*",
                })}
              />
              {isDragActive ? (
                <p>Drop some files here</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
          </section>
        )}
      </Dropzone>
      <Select
        placeholder="Pilih Kategori Berita"
        defaultValue={postCategory}
        onChange={(e) => setPostCategory(e.target.value)}
        w={200}
      >
        <option value="berita-sekolah">Berita Sekolah</option>
        <option value="informasi">Informasi</option>
        <option value="pengumuman">Pengumuman</option>
      </Select>
      <PostEditor
        title={title}
        setTitle={setTitle}
        post={post}
        setPost={setPost}
        file={file}
      />
      <Center>
        <Button
          size={{ base: "sm", sm: "md" }}
          mt={"10px"}
          color={"white"}
          bgColor={"lime"}
          onClick={onOpen}
        >
          Publish
        </Button>
      </Center>

      <PostAlertDialog
        uploadFile={uploadFile}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default CreatePost;

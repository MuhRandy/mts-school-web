import PostProvider from "../services/state/PostContext";
import CreatePostEditor from "../components/CreatePost/CreatePostEditor";

export type CreatePostProps = {
  forEdit?: boolean;
};

const CreatePost = ({ forEdit = false }: CreatePostProps) => {
  return (
    <PostProvider>
      <CreatePostEditor forEdit={forEdit} />
    </PostProvider>
  );
};

export default CreatePost;

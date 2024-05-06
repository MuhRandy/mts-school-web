import { Select } from "@chakra-ui/react";
import { useCreatePostContext } from "../../utils/context";

const PostCategoryOption = () => {
  const { createPostState, createPostStateAction } = useCreatePostContext();

  const { postCategory } = createPostState;
  const { changePostCategory } = createPostStateAction;

  return (
    <Select
      placeholder="Pilih Kategori Berita"
      value={postCategory}
      onChange={(e) => changePostCategory(e.target.value)}
      w={200}
      pl={5}
    >
      <option value="berita-sekolah">Berita Sekolah</option>
      <option value="informasi">Informasi</option>
      <option value="pengumuman">Pengumuman</option>
    </Select>
  );
};

export default PostCategoryOption;

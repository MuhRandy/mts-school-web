import { Select } from "@chakra-ui/react";
import { useCreatePostContext } from "../../pages/CreatePost";

const PostCategoryOption = () => {
  const { postCategory, setPostCategory } = useCreatePostContext();

  return (
    <Select
      placeholder="Pilih Kategori Berita"
      value={postCategory}
      onChange={(e) => setPostCategory(e.target.value)}
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

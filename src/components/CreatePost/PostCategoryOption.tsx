import { Select } from "@chakra-ui/react";
import {
  usePostContext,
  usePostDispatchContext,
} from "../../services/state/PostContext";

const PostCategoryOption = () => {
  const { postCategory } = usePostContext();
  const dispatch = usePostDispatchContext();

  return (
    <Select
      placeholder="Pilih Kategori Berita"
      value={postCategory}
      onChange={(e) => {
        dispatch({
          type: "changed_category",
          postCategory: e.target.value,
        });
      }}
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

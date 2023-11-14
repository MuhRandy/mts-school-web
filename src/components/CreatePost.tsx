import { Button, Card, Divider, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  return (
    <Card>
      <Text mb="8px" mt={"10px"}>
        Judul: {title}
      </Text>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Judul..."
        size="sm"
        mb={"8px"}
      />
      <Divider />
      <Text mb="8px" mt={"10px"}>
        Postingan: {post}
      </Text>
      <Textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Postingan..."
        size="sm"
      />
      <Button size={"sm"} mt={"10px"}>
        Publish
      </Button>
    </Card>
  );
};

export default CreatePost;

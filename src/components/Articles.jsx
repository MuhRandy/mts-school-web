import { motion } from "framer-motion";
import Card from "./Card";

function Articles() {
  const news = [
    {
      title: "Judul",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis ducimus nam unde vero natus quis a consequatur fugiat nulla quia quod iste exercitationem, amet perspiciatis, molestiae in eos velit!",
      key: 1,
    },
    {
      title: "Judul",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis ducimus nam unde vero natus quis a consequatur fugiat nulla quia quod iste exercitationem, amet perspiciatis, molestiae in eos velit!",
      key: 2,
    },
    {
      title: "Judul",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis ducimus nam unde vero natus quis a consequatur fugiat nulla quia quod iste exercitationem, amet perspiciatis, molestiae in eos velit!",
      key: 3,
    },
    {
      title: "Judul",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis ducimus nam unde vero natus quis a consequatur fugiat nulla quia quod iste exercitationem, amet perspiciatis, molestiae in eos velit!",
      key: 4,
    },
    {
      title: "Judul",
      post: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perferendis ducimus nam unde vero natus quis a consequatur fugiat nulla quia quod iste exercitationem, amet perspiciatis, molestiae in eos velit!",
      key: 5,
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {news.map((post, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, left: "-128px" }}
            whileInView={{ opacity: 1, left: 0 }}
            transition={{ duration: 2, type: "spring" }}
            className="relative"
          >
            <Card imgUrl={"https://placehold.co/200"} key={post.key}>
              <Card.Title>{post.title}</Card.Title>
              <Card.Body>{post.post}</Card.Body>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Articles;

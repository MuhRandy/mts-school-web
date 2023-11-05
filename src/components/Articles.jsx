import { motion } from "framer-motion";
import Card from "./Card";
import { news } from "../utils/utils";

function Articles() {
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

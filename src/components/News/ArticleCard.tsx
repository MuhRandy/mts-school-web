import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

type ArticleProps = {
  title: string;
  postText: string;
  postID: string;
  imgURL: string;
  postCategory: string;
  cardMaxW: string | number;
};

function ArticleCard({
  title,
  postText,
  postID,
  imgURL,
  postCategory,
  cardMaxW,
}: ArticleProps) {
  return (
    <>
      <Card maxW={cardMaxW} mx={2} size={"sm"} overflow={"hidden"}>
        <img
          src={imgURL}
          alt="Card Post Image"
          className="w-full h-40 object-cover object-center"
        />
        <CardBody px={2} mt={"-20px"}>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Box
              fontSize={"small"}
              noOfLines={3}
              dangerouslySetInnerHTML={{ __html: postText }}
            />
          </Stack>
        </CardBody>
        <Divider border={"1px solid lime"} />
        <CardFooter px={2}>
          <Box display={"flex"} justifyContent={"center"} w={"full"}>
            {/* navigate to /article and send article id on search text for later use */}
            <Link to={`/news/${postCategory}/detail?id=${postID}`}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
                size={"sm"}
              >
                Lanjut Baca...
              </Button>
            </Link>
          </Box>
        </CardFooter>
      </Card>
    </>
  );
}

export default ArticleCard;

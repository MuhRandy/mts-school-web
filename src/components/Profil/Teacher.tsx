// import { IconUserCircle } from "@tabler/icons-react";
import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react";

type TeacherProps = {
  name: string;
  imgURL: any;
  jabatan: string;
};

function Teacher({ name, imgURL, jabatan }: TeacherProps) {
  return (
    <Card rounded={"none"}>
      <Image src={imgURL} alt={name} />
      <CardBody p={2}>
        <Stack>
          <Heading fontSize={{ md: "md", lg: "xl" }} textAlign={"center"}>
            {name}
          </Heading>
          <Text textAlign={"center"} fontSize={{ md: "sm", lg: "md" }}>
            {jabatan}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Teacher;

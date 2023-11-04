import { IconUserCircle } from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
} from "@chakra-ui/react";

function Teacher({ name, imgURL, jabatan }) {
  return (
    // <Card maxW="sm">
    //   <CardBody>
    //     <Image
    //       src={mrandyProfil}
    //       alt="Green double couch with wooden legs"
    //       borderRadius="md"
    //       sizes="20px"
    //     />
    //     <Stack mt="6" spacing="3">
    //       <Heading size="md">Muhammad Randy</Heading>
    //     </Stack>
    //   </CardBody>
    // </Card>

    <div className="flex flex-col items-center text-center text-sm">
      <img
        src={imgURL}
        alt={name}
        className="object-cover object-center w-[40vw]"
      />
      <h1 className="font-semibold">{name}</h1>
      <p>{jabatan}</p>
    </div>
  );
}

export default Teacher;

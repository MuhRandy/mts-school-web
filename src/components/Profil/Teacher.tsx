// import { IconUserCircle } from "@tabler/icons-react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Stack,
//   Heading,
//   Image,
//   Text,
// } from "@chakra-ui/react";

type TeacherProps = {
  name: string;
  imgURL: any;
  jabatan: string;
};

function Teacher({ name, imgURL, jabatan }: TeacherProps) {
  return (
    // <Card maxW="sm">
    //   <CardBody>
    //     <Image src={imgURL} alt={name} borderRadius="md" sizes="20px" />
    //     <Stack mt="6" spacing="3">
    //       <Heading size="md">{name}</Heading>
    //       <Text>{jabatan}</Text>
    //     </Stack>
    //   </CardBody>
    // </Card>

    <div className="flex flex-col items-center text-center text-sm">
      <img
        src={imgURL}
        alt={name}
        className="object-cover object-top h-[200px]"
      />
      <h1 className="font-semibold">{name}</h1>
      <p>{jabatan}</p>
    </div>
  );
}

export default Teacher;

import { Stack, Text } from "@chakra-ui/react";
import schoolLogo from "../../assets/logo-mts.png";
import clsx from "clsx";

const HeaderLogo = () => {
  return (
    <Stack direction={"row"} align={"center"}>
      <img
        src={schoolLogo}
        alt="Logo MTs Miftahul Ulum"
        className={clsx("w-[60px] ml-2 mt-2", [
          "min-[480px]:w-[80px]",
          "min-[768px]:w-[120px]",
        ])}
      />
      <Stack spacing={"0"}>
        <Text fontWeight={"bold"} fontSize={{ sm: "x-large", md: "xx-large" }}>
          MTs Miftahul Ulum
        </Text>
        <Text
          fontSize={{ base: "small", sm: "medium", md: "x-large" }}
          lineHeight={1}
        >
          Desa Lok Buntar Kecamatan Sungai Tabuk Kabupaten Banjar
        </Text>
      </Stack>
    </Stack>
  );
};

export default HeaderLogo;

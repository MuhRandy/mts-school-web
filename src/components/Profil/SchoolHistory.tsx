import { ListItem, OrderedList, Text } from "@chakra-ui/react";
import TextContent from "../TextContent";

function SchoolHistory() {
  return (
    <TextContent title="Sejarah Sekolah">
      <Text fontSize={{ base: "xs", sm: "medium", md: "large" }}>
        MTs Miftahul Ulum adalah sekolah swasta menengah pertama yang berada di
        Desa Lok Buntar, Kecamatan Sungai Tabuk, Kabupaten Banjar, Provinsi
        Kalimantan Selatan, dimana sekolah ini didirikan pada tahun 1976. Sejak
        saat itu pergantian pimpinan sekolah dapat diurutkan sebagai berikut :
      </Text>
      <OrderedList fontSize={{ base: "xs", sm: "medium", md: "large" }} ml={5}>
        <ListItem>H. Majedi Hasan (1976 sd. 1978)</ListItem>
        <ListItem>H. Jamhuri (1979 sd. 1986)</ListItem>
        <ListItem>H. Majedi Hasan (1987 sd. 2000)</ListItem>
        <ListItem>Pauji Abdullah A.Md (2000 sd. 2007)</ListItem>
        <ListItem>Abdusani S.pd (2007 sd. Sekarang)</ListItem>
      </OrderedList>
    </TextContent>
  );
}

export default SchoolHistory;

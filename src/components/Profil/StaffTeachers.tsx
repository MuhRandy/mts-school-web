// import { Text, VStack } from '@chakra-ui/react';
// import { teachers } from '../src/utils/utils';
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Content from "../Content";
import { SimpleGrid } from "@chakra-ui/react";
import Teacher from "./Teacher";
import muhammadRandy from "../../assets/teachers/Muhammad_Randy.jpg";

function StaffTeachers() {
  return (
    <Content title="Staff Guru">
      {/* <Swiper
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <VStack>
              <img
                src={teacher.url}
                alt="sdasas"
                className="w-[120px] object-cover"
              />
              <Text
                textAlign={'center'}
                fontSize={'medium'}
                fontWeight={'bold'}
                lineHeight={0}
                mt={3}
              >
                {teacher.nama}
              </Text>
              <Text textAlign={'center'} fontSize={'medium'}>
                ({teacher.jabatan})
              </Text>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        px={{ base: "50px", md: "100px" }}
        gap={10}
      >
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
        <Teacher
          name="Muhammad Randy"
          jabatan="Guru Matematika"
          imgURL={muhammadRandy}
        />
      </SimpleGrid>
    </Content>
  );
}

export default StaffTeachers;

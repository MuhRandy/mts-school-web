// import { Text, VStack } from '@chakra-ui/react';
// import { teachers } from '../src/utils/utils';
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Content from "../Content";

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
    </Content>
  );
}

export default StaffTeachers;

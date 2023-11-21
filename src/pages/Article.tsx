import { IconCalendarStats, IconUserCircle } from '@tabler/icons-react';
import { Container } from '@chakra-ui/react';

function Article() {
  const date = new Date();

  const days = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ags',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title');
  const post = searchParams.get('post');

  return (
    <Container maxW={'70vw'}>
      <div className="p-2">
        <img
          src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80"
          alt=""
          className="w-full"
        />
        <h1 className="text-4xl font-bold my-3">{title}</h1>
        <div className="py-5 mb-7 flex items-center justify-between border-b-2 border-black">
          <div className="flex gap-2 items-center">
            <IconUserCircle
              size={35}
              className="hover:scale-125 transition duration-500"
            />
            <span className="font-semibold">@Admin</span>
          </div>
          <div className="flex items-center gap-1">
            <IconCalendarStats size={20} stroke={1} />
            <span className="font-semibold">
              {day}, {date.getDate()} {month} {date.getFullYear()}
            </span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post ? post : '' }}></div>
      </div>
    </Container>
  );
}

export default Article;

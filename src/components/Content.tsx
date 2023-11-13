import Contact from './Contact';

type ContentProps = {
  children: any;
  className?: string;
};

type HeadingProps = {
  title: string;
  imgUrl: any;
  imgAlt: string;
};

type MainProps = ContentProps;

type AsideProps = {
  noTitle?: boolean;
};

function Content({ children, className }: ContentProps) {
  return (
    <div
      className={`${className} flex md:flex-row gap-6 px-5 md:px-28 sm:px-14 pt-4 flex-col`}
    >
      {children}
    </div>
  );
}

function Heading({ title, imgUrl, imgAlt }: HeadingProps) {
  return (
    <div className="relative mt-4">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="w-full h-[100px] md:h-[150px] object-cover brightness-50"
      />
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-lime-100 md:text-5xl lg:text-6xl absolute right-0 left-0 top-[50%] translate-y-[-50%]">
        {title}
      </h1>
    </div>
  );
}

function Main({ children, className }: MainProps) {
  return (
    <main className="min-w-[70%]">
      <section className={`${className}`}>{children}</section>
    </main>
  );
}

function Aside({ noTitle }: AsideProps) {
  return (
    <aside className={`min-w-[30%] flex flex-col gap-10`}>
      <Contact />
      {/* <Doa /> */}
      {/* <Calender /> */}
    </aside>
  );
}

Content.Heading = Heading;
Content.Main = Main;
Content.Aside = Aside;

export default Content;

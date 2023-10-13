function AsideContent({ children }) {
  const line =
    "after:absolute after:top-0 after:right-0 after:h-1 after:border-t-4 after:border-lime-500 after:w-[40%] hover:after:w-full after:transition-all after:duration-500 after:rounded-md xxxx before:absolute before:bottom-0 before:left-0 before:h-1 before:border-t-4 before:border-lime-500 before:w-[40%] hover:before:w-full before:transition-all before:duration-500 before:rounded-md";
  return (
    <div className="relative">
      <section
        className={`p-2 shadow-lg border-l-8 border-lime-500 bg-lime-200`}
      >
        {children}
      </section>
    </div>
  );
}

function T1({ title }) {
  return <h1 className="font-semibold text-2xl">{title}</h1>;
}

function T2({ children, title, className }) {
  return (
    <h2 className={`${className} font-semibold text-lg`}>
      {title || children}
    </h2>
  );
}

function P({ children, className }) {
  return <p className={className}>{children}</p>;
}

AsideContent.T1 = T1;
AsideContent.T2 = T2;
AsideContent.P = P;

export default AsideContent;

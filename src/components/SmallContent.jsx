function SmallContent({ children }) {
  return (
    <article className="border-y-2 border-lime-500 p-2">{children}</article>
  );
}

function T1({ title }) {
  return <h2 className="text-3xl text-center">{title}</h2>;
}
function T2({ title }) {
  return (
    <h3 className="text-2xl mt-5 border-b-2 border-lime-200 border-dashed">
      {title}
    </h3>
  );
}

function P({ children, className }) {
  return <p className={`${className} mt-2 first-letter:pl-10`}>{children}</p>;
}

function Ol({ children }) {
  return <ol className="list-decimal ml-5">{children}</ol>;
}

SmallContent.T1 = T1;
SmallContent.T2 = T2;
SmallContent.P = P;
SmallContent.Ol = Ol;

export default SmallContent;

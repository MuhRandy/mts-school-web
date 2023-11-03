import clsx from "clsx";

function SmallContent({ children }) {
  return (
    <article
      className={clsx("border-y-2 border-lime-500 p-1 relative", "sm:p-2")}
    >
      {children}
    </article>
  );
}

function T1({ title }) {
  return (
    <h2 className={clsx("text-2xl text-center", "sm:text-3xl")}>{title}</h2>
  );
}
function T2({ title }) {
  return (
    <h3
      className={clsx(
        "text-xl mt-5 border-b-2 border-lime-200 border-dashed",
        "sm:text-2xl"
      )}
    >
      {title}
    </h3>
  );
}

function P({ children, className }) {
  return (
    <p className={clsx("text-sm mt-2 first-letter:pl-10", className)}>
      {children}
    </p>
  );
}

function Ol({ children }) {
  return <ol className="list-decimal ml-5 text-sm">{children}</ol>;
}

SmallContent.T1 = T1;
SmallContent.T2 = T2;
SmallContent.P = P;
SmallContent.Ol = Ol;

export default SmallContent;

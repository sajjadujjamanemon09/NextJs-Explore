import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2>This is home page</h2>
      <Counter />
      <Link href={'/aboutUs'}>
        {" "}
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href={'/news'}>
        {" "}
        <button className="btn btn-ghost">news</button>
      </Link>
    </div>
  );
};

export default HomePage;

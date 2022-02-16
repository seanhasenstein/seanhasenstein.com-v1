import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative my-6 mx-4 sm:m-7 px-5 flex flex-col justify-between [min-height:_calc(100vh_-_28px)] bg-gray-100">
      <div>
        <Header />
        <main className="mt-1 mx-auto max-w-4xl">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

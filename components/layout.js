import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 lg:container px-8 py-6 mx-auto md:px-8 md:py-12">
        {props.children}
      </main>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
}

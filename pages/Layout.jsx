import Navbar from "../components/navbar";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* Footer */}
      {/* You can add more things here  */}
    </>
  );
}
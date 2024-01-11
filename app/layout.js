import Header from "./components/header";
import "./globals.css";

export default function RootLayot({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
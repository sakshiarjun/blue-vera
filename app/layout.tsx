import "./styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { nura, nuraBold, nuraLight, nuraMedium, nuraBlack, nuraThin} from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`
          ${nura.variable}
          ${nuraBold.variable}
          ${nuraLight.variable}
          ${nuraMedium.variable}
          ${nuraBlack.variable}
          ${nuraThin.variable}
        `}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

// fonts importation
import { KumbhSans } from "@/lib/fonts";

// components importation
import Wrapper from "@/components/Wrapper/Wrapper";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${KumbhSans.className}`}>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
      </body>
    </html>
  );
};

export default RootLayout;

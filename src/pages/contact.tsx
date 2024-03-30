import Contactcontent from "@/components/ContactContent";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="Meu primeiro site utilizando TypeScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <Contactcontent />
        <Footer />
      </main>
    </>
  );
}

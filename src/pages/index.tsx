import Head from "next/head";
import Menu from "@/components/Menu";
import HomeTop from "@/components/HomeTop";
import HomeService from "@/components/HomeService";
import HomePremium from "@/components/HomePremium";
import Footer from "@/components/Footer";

const Home = ():React.ReactElement => {
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
        <HomeTop />
        <HomeService />
        <HomePremium />
        <Footer />
      </main>
    </>
  );
}

export default Home;

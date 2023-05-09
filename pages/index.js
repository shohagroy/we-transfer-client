import FileTransfer from "@/components/FileTransfer";
import HomeFooter from "@/components/HomeFooter";
import CommonLayout from "@/Layouts/CommonLayout";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>We Transfer</title>
      </Head>
      <main className={`bg-blue-200 h-screen w-full`}>
        <div>
          <FileTransfer />
        </div>

        <HomeFooter />
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <CommonLayout>{page}</CommonLayout>;
};

export default Home;

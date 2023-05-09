import AdminLayout from "@/Layouts/AdminLayout";
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
          <h2>Hello world</h2>
        </div>
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <CommonLayout>{page}</CommonLayout>;
};

export default Home;

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>Here is our app home</h1>

      <Image
       src="/assets/images/logo.svg"
       width={200} 
       height={200} 
       alt="logo"
      />
    </main>
  );
}

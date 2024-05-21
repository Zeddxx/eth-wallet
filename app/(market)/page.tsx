import HeroSection from "@/components/hero-section";

export default async function App() {
  const req = await fetch("http://localhost:3000/api/siwe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      statement: "hello",
      address: "0xa5A605a400294c8A6d98B9f980F7BC513d423df8",
    }),
  });
  const result = await req.json();
  console.log(result);

  return (
    <main className="w-full">
      <HeroSection />
    </main>
  );
}

import Siderbar from "@/components/Siderbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = "Adrian"

  return (
    <main className='flex h-screen w-full font-inter'>
      <Siderbar user={user} />
      {children}
    </main>
  );
}

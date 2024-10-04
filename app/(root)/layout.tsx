import Siderbar from "@/components/Siderbar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = "Adrian"

  return (
    <main className='flex h-screen w-full font-inter'>
      <Siderbar user={user} />
      <div className="flex size-full flex-col ">
        <div className="flex items-center justify-between mx-8 mt-2">
          <Image src="/icons/logo.svg" alt="menu logo" width={32} height={32} />
          <div>
            <MobileNav user={user} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

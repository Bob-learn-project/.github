import Siderbar from "@/components/Siderbar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')


  return (
    <main className='flex h-screen w-full font-inter'>
      <Siderbar user={loggedIn} />
      
      <div className="flex size-full flex-col ">
        <div className="flex items-center justify-between mx-8 mt-2">
          <Image src="/icons/logo.svg" alt="menu logo" width={32} height={32} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

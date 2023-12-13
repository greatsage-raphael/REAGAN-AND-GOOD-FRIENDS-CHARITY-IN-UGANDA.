/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hqs894ZW3ft
 */
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "../components/card"
import { Web5 } from "@web5/api";
import { useState, useEffect } from "react";

export default function Component() {
      
  const [web5, setWeb5] = useState<Web5 | null>(null)
  const [myDid, setMyDid] = useState<string | null>(null)

  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect();

      setWeb5(web5);
      setMyDid(did);

      console.log("web5:", web5)
      console.log("did:", did)

    };
    initWeb5();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex items-center h-16 px-4 border-b bg-white">
        <StethoscopeIcon className="h-6 w-6" />
        <h1 className="ml-2 text-2xl font-semibold">HealthBank</h1>
        <nav className="ml-auto font-medium">
          <Link className="mx-2 text-gray-500 hover:text-gray-900" href="#">
            Home
          </Link>
          <Link className="mx-2 text-gray-500 hover:text-gray-900" href="#">
            Profile
          </Link>
          <Link className="mx-2 text-gray-500 hover:text-gray-900" href="#">
            Records
          </Link>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <h2 className="text-xl font-semibold mb-4">Your Medical Records</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>General Checkup</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Performed on: 2023-12-01</p>
              <p>Performed by: Dr. John Doe</p>
              <p>Summary: Regular health checkup. No issues detected.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dental Checkup</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Performed on: 2023-11-20</p>
              <p>Performed by: Dr. Jane Smith</p>
              <p>Summary: Regular dental checkup. One cavity detected and treated.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Eye Checkup</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Performed on: 2023-11-15</p>
              <p>Performed by: Dr. Alice Johnson</p>
              <p>Summary: Regular eye checkup. Vision remains 20/20.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="flex items-center justify-center h-16 border-t bg-white">
        <p className="text-center text-sm text-gray-500">© 2023 HealthApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

function StethoscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  )
}

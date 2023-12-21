import { SVGProps } from "react"
import { Button } from "../components/button"

export default function Component() {
  return (
    <div className="flex justify-between">
      <div className="w-3/5 space-y-6">
        <div className="p-4 bg-white shadow">
          <h2 className="text-lg font-semibold">Primary </h2>
          <p>
            Go deeper and learn job-ready skills. Practice with real-world projects, take assessments, and earn
            certificates.
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">My Paths</h2>
            <Button className="text-sm" variant="ghost">
              Edit .
            </Button>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white shadow cursor-pointer">
              <h3 className="font-semibold">CAREER PATH</h3>
              <p className="text-xl font-bold">Software Engineer</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{
                    width: "7%",
                  }}
                />
              </div>
              <p className="mt-2">7%</p>
            </div>
            <div className="p-4 bg-white shadow cursor-pointer">
              <h3 className="font-semibold">CAREER PATH</h3>
              <p className="text-xl font-bold">Lawyer</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{
                    width: "15%",
                  }}
                />
              </div>
              <p className="mt-2">15%</p>
            </div>
            <div className="p-4 bg-white shadow cursor-pointer">
              <h3 className="font-semibold">SKILL PATH</h3>
              <p className="text-xl font-bold">JavaScript</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{
                    width: "11%",
                  }}
                />
              </div>
              <p className="mt-2">11%</p>
            </div>
            <div className="p-4 bg-white shadow cursor-pointer">
              <h3 className="font-semibold">SKILL PATH</h3>
              <p className="text-xl font-bold">Web Scraping</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{
                    width: "4%",
                  }}
                />
              </div>
              <p className="mt-2">4%</p>
            </div>
            <div className="p-4 bg-white shadow cursor-pointer">
              <h3 className="font-semibold">SKILL PATH</h3>
              <p className="text-xl font-bold">Pen Testing</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{
                    width: "51%",
                  }}
                />
              </div>
              <p className="mt-2">51%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 p-4 bg-white shadow space-y-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">My Goals</h2>
          <Button className="text-sm" variant="ghost">
            Edit
          </Button>
        </div>
        <div>
          <h3 className="font-semibold text-blue-800">Build a project</h3>
          <div className="mt-4">
            <h4 className="font-semibold">THIS WEEK</h4>
            <div className="flex items-center space-x-2 mt-2">
              <CircleIcon className="h-5 w-5 text-gray-400" />
              <p>0 of 5 days</p>
            </div>
            <div className="flex space-x-1 mt-1">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <CalendarIcon className="h-5 w-5 text-gray-400" />
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">TARGET MET</h4>
            <div className="flex items-center space-x-2 mt-2">
              <CircleIcon className="h-5 w-5 text-gray-400" />
              <p>0 weeks in a row</p>
            </div>
          </div>
        </div>
        <Button className="text-blue-800" variant="ghost">
          View Achievements →
        </Button>
      </div>
    </div>
  )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}

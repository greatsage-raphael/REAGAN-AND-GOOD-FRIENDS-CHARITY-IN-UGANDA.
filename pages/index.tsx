import { CardTitle, CardHeader, CardContent, Card, CardDescription, CardFooter } from "../components/card"
import {  Web5 } from "@web5/api";
import { useState, useEffect } from "react";
import { Button } from "../components/button"

export default function Component() {
      
  const [web5, setWeb5] = useState<Web5 | null>(null)
  const [myDid, setMyDid] = useState<string | null>(null)
  const [doctor, setDoctor] = useState<string>("")
  const [summary, setSummary] = useState<string >("")
  const [date, setDate] = useState<string | null >(null)
  const [reason, setReason] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  
  //connecting to web5 and logging my credentials
  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect();

      setWeb5(web5);
      setMyDid(did);

      console.log("web5:", web5)
      console.log("did:", did)

      if (web5 && did) {
        await configureProtocol(web5, did);
        await fetchMedicalRecord(web5, did)
      }

    };
     initWeb5();
  }, []);

//defining the mediBank protocol 
  const createProtocolDefinition = () => {
    const mediBankProtocolDefinition = 
    {
      "protocol": "https://medibankbytes.dev/medical-records-protocol.dev",
      "published": true,
      "types": {
        "medicalRecord": {
          "schema": "https://medibank.dev/medicalRecord",
          "dataFormats": ["application/json"],
        },
      },
      "structure": {
        "medicalRecord": {
          "$actions": [
            { 
              "who": "anyone",
              "can": "write" 
            },
            { 
              "who": "author", 
              "of": "medicalRecord",
              "can": "read" 
            }
          ],
        },
      },
    };
    return mediBankProtocolDefinition;
  };




  //installing defined protocol
  const installProtocolLocally = async (web5: Web5, protocolDefinition: any) => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  // console.log("Local Protocol:", installProtocolLocally)


  //Checking for Protocol existence
  const queryForProtocol = async (web5: Web5) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: "https://medibank.dev/medical-records-protocol",
        },
      },
    });
  };

  // console.log("Query Protocol:", queryForProtocol)

  //configuring the protocol
  const configureProtocol = async (web5: Web5, did: any) => {
    const protocolDefinition = await createProtocolDefinition();

    const { protocols: localProtocol, status: localProtocolStatus } =
        await queryForProtocol(web5);
    console.log({ localProtocol, localProtocolStatus });
    
    if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
        const { protocol, status } = await installProtocolLocally(web5, protocolDefinition);
        console.log("Protocol installed locally", protocol, status);

        // Check if 'protocol' is not undefined before using it
        if (protocol) {
            const { status: configureRemoteStatus } = await protocol.send(did);
            console.log("Did the protocol install on the remote DWN?", configureRemoteStatus);
        } else {
            console.error("Protocol is undefined after installation");
        }
    } else {
        console.log("Protocol already installed");
    }
};


//making the medical Record
const constructMedicalRecord = (summary: string, doctor: string, reason: string) => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const medicalRecord = {
    author: myDid,
    summary: summary,
    doctor: doctor,
    reason: reason,
    dateAdded: `${currentDate}`,
    time: `${currentTime}`
  };
  return medicalRecord;
};


const writeToDwn = async (medicalRecord: any) => {
  // Check if web5 is not null or undefined
  if (web5) {
    const { record } = await web5.dwn.records.write({
      data: medicalRecord,
      message: {
        protocol: "https://medibank.dev/medical-records-protocol",
        protocolPath: "medicalRecord",
        schema: "https://medibank.dev/medicalRecord",
      },
    });
    return record;
  } else {
    // Handle the case where web5 is null
    console.error("web5 is null or undefined");
  }
};

const handleSubmit = async (e: any) => {
  e.preventDefault();
  setIsSaving(true)
  console.log("summary",summary)
  console.log("doctor", doctor)
  console.log("reason", reason)
  const medicalRecord = constructMedicalRecord(summary, doctor, reason);
  const record = await writeToDwn(medicalRecord);
  setIsSaving(false)
};



const fetchMedicalRecord = async (web5: Web5, did: any) => {
  const response = await web5.dwn.records.query({
    from: did,
    message: {
      filter: {
        protocol: "https://medibank.dev/medical-records-protocol",
        schema: "https://medibank.dev/medicalRecord",
      },
    },
  });

  if (response.records && response.status.code === 200) {
    const receivedRecords = await Promise.all(
      response.records.map(async (record) => {
        const data = await record.data.json();
        return data;
      })
    );
    console.log("Records:", receivedRecords);
    return receivedRecords;
  } else {
    console.log("error:", response.status);
  }
};

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* <main className="flex-grow p-4">
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
      </main> */}
      <div>
      <Card>
      <CardHeader>
        <CardTitle>Patient Visit Information</CardTitle>
        <CardDescription>Please fill out this form regarding your recent medical visit.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date-of-visit">Date of Visit</Label>
              <Input id="date-of-visit" placeholder="Enter date of visit" type="date" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="visit-reason">Reason for Visit</Label>
              <Input id="visit-reason" placeholder="Enter reason for visit" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="visit-reason">Name of Doctor</Label>
              <Input id="visit-reason" placeholder="Enter Doctors Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="visit-summary">Visit Summary</Label>
              <Textarea className="min-h-[100px]" id="visit-summary" placeholder="Enter a summary of the visit" />
            </div>
          </div>
        </form> */}
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="doctor">
                Doctor
              </label>
              <input
                type="text"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="doctor"
                placeholder="Name of Doctor"
                id="doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="keywords" className="sr-only">
                Summary
              </label>
              <textarea
                rows={3}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                name="keyWords"
                id="keyWords"
                placeholder="Summary of visit"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            </div>
            <div className="flex flex-col">
              <label className="sr-only" htmlFor="reason">
                Reason For Visit
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="reason"
                id="reason"
              >
                <option value="default">Select Reason (Optional)</option>
                <option value="General">General</option>
                <option value="Eye">Eye</option>
                <option value="Dental">Dental</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              className={`bg-blue-600 w-full hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded
                ${
                  isSaving || doctor === ""
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              type="submit"
              disabled={isSaving || doctor === ""}
            >
              {isSaving ? "Saving to DWN..." : "Save to DWN"}
            </button>
          </form>
      </CardContent>
    </Card>
      </div>
    </div>
  )
}


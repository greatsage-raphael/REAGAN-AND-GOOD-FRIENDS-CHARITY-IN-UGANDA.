import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react'


const bounceAnimation = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

export default function Home() {
  return (
    <>
      <style jsx global>{`${bounceAnimation}`}</style>
    <div className="min-h-screen bg-white">
      

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <Image
            src="/Charity.jpg"
            alt="Diverse communities receiving aid"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Making a Difference Together</h1>
            <p className="text-xl md:text-2xl mb-8">Join us in our mission to create a better Uganda for all</p>
            <Link href="https://forms.gle/yjDk1B8qQNcMHC8GA" className="bg-red-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300">
              Donate Now
            </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                Reagan & Good Friends Charity is committed to providing humanitarian assistance and fostering sustainable development in communities in Uganda. Our dedicated team works tirelessly to make a positive impact on lives every day.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Over 7000 people helped</li>
                  <li>Active in 10+ districts</li>
                  <li>2 years of experience</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image src="/charity1.jpg" alt="Team working on-site" width={200} height={200} className="rounded-lg" />
                <Image src="/charity2.jpg" alt="Impact statistics" width={200} height={200} className="rounded-lg" />
                <Image src="/charity3.jpg" alt="Community engagement" width={200} height={200} className="rounded-lg" />
                <Image src="/charity4.jpeg" alt="Global reach" width={200} height={200} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:animate-bounce" style={{animationDuration: '0.5s'}}>
                <Image src="/healthcharity.jpg" alt="Healthcare" width={300} height={200} className="w-full" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Healthcare</h3>
                  <p className="text-gray-600 mb-4">Providing essential healthcare services to communities in need.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:animate-bounce" style={{animationDuration: '0.5s'}}>
                <Image src="/education.jpg" alt="Education" width={300} height={200} className="w-full" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Education</h3>
                  <p className="text-gray-600 mb-4">Providing essential education services to communities in need. Through textbooks and on site lessons </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:animate-bounce" style={{animationDuration: '0.5s'}}>
                <Image src="/clearWater.jpeg" alt="Clean Water" width={300} height={200} className="w-full" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Borehole Installation</h3>
                  <p className="text-gray-600 mb-4">With our experienced partners, we install boreholes n different communitiesin need of Water.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:animate-bounce" style={{animationDuration: '0.5s'}}>
                <Image src="/ER.jpg" alt="Emergency Relief" width={300} height={200} className="w-full" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Emergency Relief</h3>
                  <p className="text-gray-600 mb-4">Providing essential emergency relief services to communities in need.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section id="get-involved" className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Ways to Help</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-bold">Volunteer</h4>
                    <p>Join our team of dedicated volunteers and make a direct impact in communities worldwide.</p>
                  </li>
                  <li>
                    <h4 className="font-bold">Donate</h4>
                    <p>Your financial support helps us continue our vital work and reach more people in need.</p>
                  </li>
                  <li>
                    <h4 className="font-bold">Partner with Us</h4>
                    <p>Collaborate with GlobalAid to create lasting change through strategic partnerships.</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Stay Informed</h3>
                <Link href="https://forms.gle/yjDk1B8qQNcMHC8GA">
                  <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
                    Get In Touch
                  </button>
                  </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">REAGAN & GOOD FRIENDS CHARITY FOUNDATION</h3>
              <p>Making a difference, one life at a time.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="mr-2" size={18} />
                  <a href="mailto:reagan.ddamulira4@gmail.com">reagan.ddamulira4@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2" size={18} />
                  <a href="tel:+256758144929">+256758144929</a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2" size={18} />
                  <a href="tel:+256782497218">+256782497218</a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2" size={18} />
                  <a href="tel:+256200905322">+256200905322</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
                <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
                <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
                <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 REAGAN & GOOD FRIENDS CHARITY FOUNDATION.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Briefcase, MapPin, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Banner
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
        heading="Careers at Sunsoft"
        subheading="Build your future with innovation, integrity, and impact"
      />

      <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-24 font-saira text-gray-800">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
              Careers at Sunsoft Services Inc
            </h1>
            <p className="text-lg text-gray-600">
              Join a team where your work shapes the future of technology and business solutions.
            </p>
          </div>

          {/* Job Posting Cards with Animation */}
          {[
            {
              title: "1. Systems Analyst",
              duties: [
                "Conduct evaluations of clients’ business needs and elicit system requirements.",
                "Translate business requirements into technical specifications.",
                "Ensure applications function per specification and provide ongoing support.",
                "Contribute to continuous innovation based on client needs.",
                "Technologies: SQL, C#, Microsoft Office SharePoint Server, JavaScript.",
              ],
              requirements: [
                "Bachelor’s in CS, Engineering (any), or related field such as CIS.",
                "1 year experience as Programmer Analyst, Computer Systems Analyst, or similar.",
                "Experience with SQL, C#, SharePoint Server, JavaScript.",
              ],
              salary: "$81,099 per year",
              location: "Various unanticipated locations throughout the U.S.",
              applyTo:
                "Sunsoft Services Inc, 591 Summit Avenue, Suite 400, Jersey City, NJ 07306",
            },
            {
              title: "2. Software Developer",
              duties: [
                "Translate client business needs into software solutions.",
                "Design, code, and develop software applications.",
                "Ensure applications function per client expectations and specs.",
                "Technologies: SQL Server, JavaScript, AJAX, AngularJS.",
              ],
              requirements: [
                "Master’s in CS, Software Engineering, CIS, or Technology (any).",
                "6 months experience as Sr. Technical Lead, Software Engineer, or similar.",
                "Experience with SQL Server, JavaScript, AJAX, AngularJS.",
              ],
              salary: "$123,656 per year",
              location: "Jersey City, NJ 07306 and various U.S. locations",
              applyTo: `President, Wasif Rizwan Mohammed\nSunsoft Services Inc.\n591 Summit Avenue, Ste 400\nJersey City, NJ 07306`,
            },
          ].map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-8 space-y-6 transition hover:shadow-2xl border-l-4 border-blue-600"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-600" />
                <h2 className="text-2xl font-bold text-blue-700">{job.title}</h2>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">Duties:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {job.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">Minimum Requirements:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Salary:</strong> {job.salary}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="flex items-start gap-2 whitespace-pre-line">
                  <Mail className="w-4 h-4 text-gray-500 mt-1" />
                  <strong>To Apply:</strong> {job.applyTo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Career;

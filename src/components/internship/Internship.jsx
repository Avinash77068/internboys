import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaRobot,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";
import { BsFillGearFill, BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Internship = () => {
  const internships = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600" />,
      description:
        "Learn modern frontend technologies like React, Next.js, and modern JavaScript frameworks.",
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <FaServer className="text-4xl mb-4 text-green-600" />,
      description:
        "Master backend technologies including Node.js, Express, and databases like MongoDB and PostgreSQL.",
    },
    {
      id: 3,
      title: "Mobile Development",
      icon: <FaMobileAlt className="text-4xl mb-4 text-purple-600" />,
      description:
        "Build cross-platform mobile applications using React Native and Flutter.",
    },
    {
      id: 4,
      title: "AI/ML",
      icon: <FaRobot className="text-4xl mb-4 text-red-600" />,
      description:
        "Dive into Artificial Intelligence and Machine Learning with Python and TensorFlow.",
    },
    {
      id: 5,
      title: "Cloud Computing",
      icon: <FaCloud className="text-4xl mb-4 text-yellow-500" />,
      description:
        "Learn cloud platforms like AWS, Azure, and Google Cloud Platform.",
    },
    {
      id: 6,
      title: "DevOps",
      icon: <BsFillGearFill className="text-4xl mb-4 text-gray-600" />,
      description:
        "Master CI/CD, Docker, Kubernetes, and other DevOps tools and practices.",
    },
    {
      id: 7,
      title: "Data Science",
      icon: <BsGraphUp className="text-4xl mb-4 text-pink-600" />,
      description:
        "Learn data analysis, visualization, and machine learning with Python and R.",
    },
    {
      id: 8,
      title: "Database Management",
      icon: <FaDatabase className="text-4xl mb-4 text-indigo-600" />,
      description:
        "Master SQL and NoSQL databases, data modeling, and optimization techniques.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="internships">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Internship Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kickstart your tech career with our comprehensive internship
            programs designed for aspiring developers and engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {internship.icon}
                <h3 className="text-xl font-semibold mb-2">
                  {internship.title}
                </h3>
                <p className="text-gray-600">{internship.description}</p>
                <Link to={"/apply"}>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Why Choose Our Internship Program?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">
                Hands-on Experience
              </h4>
              <p className="text-gray-600">
                Work on real-world projects and gain practical experience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">Mentorship</h4>
              <p className="text-gray-600">
                Learn from industry experts and get guidance throughout your
                journey.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">
                Career Opportunities
              </h4>
              <p className="text-gray-600">
                Get a chance to work with top companies after successful
                completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;

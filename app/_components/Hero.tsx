import React from 'react';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-black relative overflow-hidden">
        <div className="relative mx-auto h-screen max-w-screen-xl px-4 py-12 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Unleash Creativity with <span className="text-gray-800">AI Diagrams</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-700 animate-fadeIn">
            Transform your workflows with our intuitive diagramming and markdown tools. Perfect for teams and individuals alike!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <button className='rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800'>
              Discover More
            </button>
            <button className='rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800'><RegisterLink>Register</RegisterLink></button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 text-black py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 animate-slideInUp">
            Exciting Features
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Innovative Design</h3>
              <p className="text-gray-700">
                Create stunning diagrams with our intuitive and sleek design tools. Perfect for any project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Collaborative Canvas</h3>
              <p className="text-gray-700">
                Work together seamlessly with real-time collaboration features that keep everyone in sync.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Markdown Integration</h3>
              <p className="text-gray-700">
                Combine the power of markdown with our advanced diagramming capabilities for a smooth workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-black py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="text-4xl font-bold text-center mb-8 animate-slideInUp">
            Our Journey & Vision
          </h2>
          <div>
            <div className="md:pl-8">
              <p className="text-gray-700">
                Our mission is to redefine how teams and individuals approach diagramming and documentation. We have crafted a platform that integrates cutting-edge design with unparalleled ease of use. From brainstorming sessions to final presentations, our tools empower you to visualize ideas and collaborate effortlessly. Join us in transforming the way you work and create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: How It Works */}
      <section className="bg-gray-200 text-black py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 animate-slideInUp">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Step 1: Sign Up</h3>
              <p className="text-gray-700">
                Create your account and get started with our user-friendly interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Step 2: Create Diagrams</h3>
              <p className="text-gray-700">
                Use our intuitive tools to design and create diagrams effortlessly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Step 3: Collaborate</h3>
              <p className="text-gray-700">
                Share your diagrams and collaborate in real-time with your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white text-black py-6">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="mt-2">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;

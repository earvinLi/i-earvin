'use client';

// External Dependencies
import { useState } from 'react';

// Internal Dependencies
import AppNavigation from '@/modules/AppNavigation';
import AppFooter from '@/modules/AppFooter';
import ContactMeModal from '@/modules/project/ContactMeModal';
import Button from '@/components/base/Button';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constants/projectData';

// Component Definition
export default function Projects() {
  const [isContactMeModalOpen, setIsContactMeModalOpen] = useState(false);

  return (
    <>
      <div className="min-w-[100vh] flex flex-col">
        <AppNavigation />
        <div className="w-[70%] my-0 mx-auto">
          <div className="flex flex-col items-end border-b-4 border-[#00A3DA] pb-4">
            <div className="text-6xl text-bold uppercase">Earvin Li</div>
            <div className="text-2xl my-2 mx-0">Full Stack Engineer</div>
            <Button
              onClick={() => setIsContactMeModalOpen(true)}
              variant="outlined"
            >
              Contact me
            </Button>
          </div>
          <div className="text-4xl text-[#868e96] my-4 mx-0">Projects</div>
          <div className="mb-6 flex flex-col gap-6">
            {projects.map((project) => {
              const {
                title,
                description,
                techList,
                image,
              } = project;

              return (
                <ProjectCard
                  key={title}
                  title={title}
                  description={description}
                  techList={techList}
                  image={image}
                />
              );
            })}
          </div>
        </div>
        <AppFooter />
      </div>
      <ContactMeModal
        isContactMeModalOpen={isContactMeModalOpen}
        setIsContactMeModalOpen={setIsContactMeModalOpen}
      />
    </>
  );
}

import React from 'react';
import Image from 'next/image';

const Skills = () => {
  const skillSections = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C', icon: '/images/c-custom.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      ],
    },
    {
      title: 'Mobile & Front-End',
      skills: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ],
    },
    {
      title: 'Back-End',
      skills: [
        { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'RESTful APIs', icon: {
            light: '/images/api.svg',
            dark: '/images/api-white.svg',
          }
        },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      ],
    },
    {
      title: 'Other',
      skills: [
        { name: 'GitHub', icon: {
            light: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            dark: '/images/logo-github.svg',
          }
        },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', icon: '/images/docker.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
        { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' }
      ],
    },
  ];

  return (
    <>
      <div className="my-64 md:my-32 sm:my-16">
        
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Skills
      </h2>
        <div className="">
          {skillSections.map((section) => (
            <div key={section.title} className="mb-12 md:mb-8 sm:mb-6">
              <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-5 sm:mb-3">{section.title}</h3>
              <div className="grid grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 xs:grid-cols-3 gap-6 md:gap-4 sm:gap-3">
                {section.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-start">
                    <div className="w-16 h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 xs:w-8 xs:h-8 mb-2 sm:mb-1 mx-auto relative flex-shrink-0">
                      {typeof skill.icon === 'string' ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <>
                          <Image
                            src={skill.icon.light}
                            alt={skill.name}
                            fill
                            className="object-contain block"
                          />
                        </>
                      )}
                    </div>
                    <span className="text-light text-sm md:text-xs sm:text-[10px] xs:text-[9px] font-semibold text-center tracking-wide leading-tight break-words w-full px-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
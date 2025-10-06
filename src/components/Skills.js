import React from 'react';

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
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
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
      ],
    },
  ];

  return (
    <>
      <h2 className="font-bold text-9xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="py-12 px-4">
        <div className="max-w-5xl ">
          {skillSections.map((section) => (
            <div key={section.title} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-dark dark:text-light text-left">{section.title}</h3>
              <div className="grid grid-cols-7 sm:grid-cols-5 md:grid-cols-7 gap-4">
                {section.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center aspect-square">
                    <div className="w-16 h-16 mb-3 mx-auto">
                      {typeof skill.icon === 'string' ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <>
                          <img
                            src={skill.icon.light}
                            alt={skill.name}
                            className="w-full h-full object-contain block dark:hidden"
                          />
                          <img
                            src={skill.icon.dark}
                            alt={skill.name}
                            className="w-full h-full object-contain hidden dark:block"
                          />
                        </>
                      )}
                    </div>
                    <span className="text-dark dark:text-light text-m font-semibold text-center tracking-wide mt-3">
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
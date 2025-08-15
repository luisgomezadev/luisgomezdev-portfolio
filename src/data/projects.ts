export const PROJECTS = [
  {
    title: 'PlayMatch',
    description:
      'Aplicación desarrolada con Spring Boot y Angular que permite registrar y consultar canchas sinteticas, hacer reservas, entre otras cosas. Esta aplicación es parte de un proyecto personal que busca facilitar la organización de reservas de las canchas.',
    image: '/projects_images/playmatch.png',
    link: 'https://github.com/luisgomezadev/frontend-playmatch',
    live: 'https://playmatch-lgsoftworks.vercel.app/',
    className: 'lg:row-span-4 lg:col-span-4',
    experience: 'Experiencia Personal',
    home: true,
    technologies: [
      { name: 'Java', color: 'text-[#007396]' }, // color específico de Java
      { name: 'Spring Boot', color: 'text-green-600' },
      { name: 'Spring Security', color: 'text-green-700' },
      { name: 'MySQL', color: 'text-cyan-700' },
      { name: 'Angular', color: 'text-red-600' },
      { name: 'TailwindCSS', color: 'text-sky-400' },
    ],
  },
  {
    title: 'Landing Page | Daniel Kelly',
    description:
      'Landing page responsive para un entrenador personal, desarrollada con Astro y Tailwind CSS. Presenta una estructura clara y moderna que destaca los servicios, eventos, entre otras cosas, optimizando el rendimiento, accesibilidad y velocidad de carga.',
    image: '/projects_images/daniel.png',
    live: 'https://danielkellyfit.vercel.app/',
    link: 'https://github.com/luisgomezadev/danielkellyfit-page',
    className: 'lg:row-span-4 lg:col-span-4',
    experience: 'Experiencia Personal',
    home: true,
    technologies: [
      { name: 'Astro', color: 'text-purple-500' },
      { name: 'TailwindCSS', color: 'text-sky-400' },
    ],
  },
  {
    title: 'Doon',
    description:
      'Aplicación web desarrollada con Vue.js 3 y estilizada con Tailwind CSS, que permite gestionar tareas de forma intuitiva y rápida. Diseñada con un enfoque minimalista y moderno, utiliza localStorage para almacenar la información localmente en el navegador.',
    image: '/projects_images/doon.png',
    live: 'https://doon-teal.vercel.app/',
    link: 'https://github.com/luisgomezadev/doon',
    className: 'lg:row-span-3 lg:col-span-4',
    experience: 'Experiencia Personal',
    home: true,
    technologies: [
      { name: 'TypeScript', color: 'text-blue-500' },
      { name: 'VueJS', color: 'text-emerald-500' },
      { name: 'TailwindCSS', color: 'text-sky-400' },
    ],
  },
]

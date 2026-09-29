export const PROJECTS = [
  {
    title: 'TapiMatch',
    description:
      'Plataforma para la gestión y reserva de canchas sintéticas. Permite a los administradores registrar y administrar sus canchas, gestionar reservas y horarios, mientras que los usuarios pueden buscar disponibilidad y reservar de forma rápida y sencilla.',
    image: '/projects_images/tapimatch.webp',
    link: 'https://github.com/luisgomezadev/frontend-tapimatch',
    linkText: 'Front',
    linkBackend: 'https://github.com/luisgomezadev/backend-tapimatch',
    linkBackendText: 'Back',
    live: 'https://tapimatch.vercel.app/',
    className: 'lg:row-span-4 lg:col-span-4',
    experience: 'Experiencia Personal',
    home: true,
    technologies: [
      {
        name: 'Java',
        image: '/skills/java.webp',
      },
      {
        name: 'Spring Boot',
        image: '/skills/spring.webp',
      },
      {
        name: 'Angular',
        image: '/skills/angular.webp',
      },
      {
        name: 'PostgreSQL',
        image: '/skills/postgresql.webp',
      }
    ],
  },
  {
    title: 'Fitora',
    description:
      'Aplicación para la gestión de gimnasios con dos tipos de usuario, administrador y recepcionista, desde los cuales se gestionan los módulos de clientes, planes, membresías y asistencia. Está en desarrollo y, por ahora, cuenta con el backend: una API protegida con Spring Security y autenticación mediante JWT.',
    image: '/projects_images/fitora.webp',
    linkBackend: 'https://github.com/luisgomezadev/fitora-backend ',
    linkBackendText: 'Ver código',
    experience: 'Experiencia Personal',
    home: true,
    technologies: [
      {
        name: 'Spring Boot',
        image: '/skills/spring.webp',
      },
      {
        name: 'Spring Security',
        image: '/skills/spring-security.webp',
      },
      {
        name: 'JWT',
        image: '/skills/jwt.webp',
      }
    ],
  },
  {
    title: 'Daniel Kelly | Página web',
    description:
      'Sitio web profesional para un entrenador personal, diseñado para presentar sus servicios, programas de entrenamiento, eventos y canales de contacto mediante una experiencia visual moderna, rápida y fácil de navegar.',
    image: '/projects_images/daniel.webp',
    live: 'https://danielkellyfit.vercel.app/',
    link: 'https://github.com/luisgomezadev/danielkellyfit-page',
    className: 'lg:row-span-4 lg:col-span-4',
    experience: 'Experiencia Personal',
    home: true,
    technologies: [
      {
        name: 'Astro',
        image: '/skills/astro.webp',
      },
      {
        name: 'Tailwind CSS',
        image: '/skills/tailwind.webp',
      }
    ],
  },
  {
    title: 'Doon',
    description:
      'Aplicación para la gestión de tareas que permite crear, organizar, editar y eliminar pendientes de forma sencilla. Su interfaz minimalista facilita el seguimiento de las actividades diarias para mejorar la productividad.',
    image: '/projects_images/doon.webp',
    live: 'https://doon-teal.vercel.app/',
    link: 'https://github.com/luisgomezadev/doon',
    className: 'lg:row-span-3 lg:col-span-4',
    experience: 'Experiencia Personal',
    home: true,
    technologies: [
      {
        name: 'Vue.js',
        image: '/skills/vue.webp',
      },
      {
        name: 'Tailwind CSS',
        image: '/skills/tailwind.webp',
      }
    ],
  },
];
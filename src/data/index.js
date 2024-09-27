
const navLink = [
    { name: 'Home', path: 'home' },
    { name: 'Skills', path: 'skills' },
    { name: 'Experience', path: 'experience' },
    { name: 'Works', path: 'works' },
    { name: 'Contact', path: 'contact' },

];

const skills = [
    { name: "HTML", level: "Expert", icon: "🌐" },
    { name: "CSS", level: "Expert", icon: "🎨" },
    { name: "JavaScript", level: "Advanced", icon: "📜" },
    { name: "React", level: "Advanced", icon: "⚛️" },
    { name: "Tailwind CSS", level: "Intermediate", icon: "💡" },
    { name: "Bootstrap", level: "Intermediate", icon: "🅱️" },
    { name: "Node.js", level: "Beginner", icon: "🔧" },
];





const services = [
    {
        title: 'Frontend Developer',
        icon: "https://i.ibb.co.com/Df7XjPL/Front-end.png",
        index: 1
    },
    {
        title: 'React Developer',
        icon: "https://i.ibb.co.com/sWkjjVT/react.png",
        index: 2
    },
    {
        title: 'JavaScript Developer',
        icon: "https://i.ibb.co.com/VN7QJXn/javascript.png",
        index: 3
    },
    {
        title: 'Content Creator',
        icon: "https://i.ibb.co.com/gz8zsbm/content-creator.png",
        index: 4
    },
]


const projects = [
    {
        img: 'https://i.ibb.co/vc63rC7/ashui-1.jpg',
        link: 'https://ahsui.vercel.app',
        title: 'Discover Versatility in ASHUi Component Library Today!',
        type: 'Web development',
        description: `ASHUI is a versatile component library designed for web developers seeking to streamline their development process. It offers pre-built, customizable components tailored for modern, responsive websites. From buttons to complex card layouts, ASHUI provides a complete toolkit.`,
        projectName: 'ASHUI',
        client: 'Demo',
        budget: '$00.00',
        git: 'https://github.com/AHShuvro/ahsui.git',
        duration: '20 days',
        date: '12 Dec 2023',
        features: [
            'Fully customizable components',
            'Responsive design',
            'Lightweight and easy to integrate',
            'Dark and Light theme support',
        ],
        id: 1,
        gallery: [
            'https://i.ibb.co/vc63rC7/ashui-1.jpg',
            'https://i.ibb.co/vc63rC7/ashui-2.jpg',
            'https://i.ibb.co/vc63rC7/ashui-3.jpg',
        ],
        techStack: ['Tailwind', 'JavaScript', 'ES6', 'React'],
        additionalInfo: 'This library was built with performance in mind, using efficient React components to ensure scalability.',
    },
    {
        img: 'https://i.ibb.co/GtfLD4G/clothing.jpg',
        link: 'https://clothing-clone-site.vercel.app/',
        title: 'E-commerce Platform',
        type: 'Web development',
        description: `A fully responsive e-commerce platform built with modern technologies, offering seamless shopping experiences. Users can browse products, view details, and add items to the cart with real-time updates.`,
        projectName: 'Clothing',
        client: 'Demo',
        budget: '$00.00',
        git: 'https://github.com/AHShuvro/clothing-clone-site.git',
        duration: '25 days',
        date: '10 Dec 2023',
        features: [
            'Real-time product filtering',
            'Shopping cart functionality with state management',
            'Responsive layout for mobile and desktop',
            'Secure checkout with Stripe integration',
        ],
        id: 2,
        gallery: [
            'https://i.ibb.co/GtfLD4G/clothing-1.jpg',
            'https://i.ibb.co/GtfLD4G/clothing-2.jpg',
            'https://i.ibb.co/GtfLD4G/clothing-3.jpg',
        ],
        techStack: ['Tailwind', 'JavaScript', 'ES6', 'React'],
        additionalInfo: 'The platform features server-side rendering for SEO optimization and faster load times.',
    },
    {
        img: 'https://i.ibb.co/N9h5rpk/Screenshot-2024-09-19-183504.jpg',
        link: 'https://terminal-0-1.vercel.app/',
        title: 'Know Me by Command: Developer Portfolio',
        type: 'Web development',
        description: `A unique portfolio website styled like a command-line interface, designed for developers who want to present their skills interactively. The CLI-style navigation adds an element of engagement, making it stand out from traditional portfolios.`,
        projectName: 'Terminal Portfolio',
        client: 'Demo',
        budget: '$00.00',
        git: 'https://github.com/AHShuvro/Terminal-0.1.git',
        duration: '15 days',
        date: '12 Dec 2023',
        features: [
            'Command-line interface navigation',
            'Interactive user prompts and responses',
            'Project showcases within terminal commands',
            'Retro-style design with modern technology',
        ],
        id: 3,
        gallery: [
            'https://i.ibb.co/N9h5rpk/Screenshot-2024-09-19-183504.jpg',
            'https://i.ibb.co/N9h5rpk/Screenshot-2024-09-19-183505.jpg',
        ],
        techStack: ['Tailwind', 'JavaScript', 'React', 'Node.js'],
        additionalInfo: 'This portfolio demonstrates my ability to blend creativity with functionality, providing an interactive user experience.',
    },
    {
        img: 'https://i.ibb.co.com/r7RrDq8/Screenshot-2024-09-19-183123.jpg',
        link: 'https://code-pane.vercel.app/',
        title: 'Online Coding Environment: Code Pane',
        type: 'Web development',
        description: `Code Pane is an online IDE where users can write, run, and share code snippets. It supports multiple languages with real-time syntax highlighting, and allows collaboration through shareable links.`,
        projectName: 'Code Pane',
        client: 'Demo',
        budget: '$00.00',
        git: 'https://github.com/AHShuvro/Code-Pane.git',
        duration: '30 days',
        date: '12 Dec 2023',
        features: [
            'Real-time code editor with syntax highlighting',
            'Multiple language support',
            'Live code preview',
            'Collaborative coding with shareable links',
        ],
        id: 4,
        gallery: [
            'https://i.ibb.co/r7RrDq8/Screenshot-2024-09-19-183123.jpg',
        ],
        techStack: ['Tailwind', 'JavaScript', 'React', 'Node.js'],
        additionalInfo: 'The platform is optimized for performance and allows developers to collaborate in real-time.',
    },
    {
        img: 'https://i.ibb.co/9GTG0VL/Brand-shop-1.jpg',
        link: 'https://brand-shop-fawn.vercel.app',
        title: 'Brand Shop: Electronics E-commerce',
        type: 'Web development',
        description: `A modern e-commerce platform focusing on electronic products. It offers advanced search functionality, filters, and user-friendly navigation to enhance the shopping experience.`,
        projectName: 'Brand Shop',
        client: 'Demo',
        budget: '$00.00',
        git: 'https://github.com/AHShuvro/brand-shop.git',
        duration: '28 days',
        date: '12 Dec 2023',
        features: [
            'Advanced product filtering by category and price',
            'Product reviews and ratings',
            'Secure payment gateway integration',
            'Responsive design optimized for all devices',
        ],
        id: 5,
        gallery: [
            'https://i.ibb.co/9GTG0VL/Brand-shop-1.jpg',
        ],
        techStack: ['Tailwind', 'JavaScript', 'React', 'Node.js'],
        additionalInfo: 'This project was built with a focus on scalability and performance for high-traffic e-commerce sites.',
    },
    {
        img: 'https://i.ibb.co/MsgYxKn/dashboard-1.jpg',
        link: 'https://dashboard-1-five.vercel.app/',
        title: 'Admin Hub: Centralized Command Center',
        type: 'Dashboard',
        description: `Admin Hub is a centralized dashboard solution, designed to streamline operations for platform administrators. It features real-time data visualization, user management, and role-based access control.`,
        projectName: 'Admin Dashboard',
        client: 'Demo',
        budget: '$00.00',
        git: 'https://github.com/AHShuvro/Dashboard-1.git',
        duration: '20 days',
        date: '28 Dec 2024',
        features: [
            'Real-time data tracking',
            'User and role management',
            'Interactive charts and graphs',
            'Customizable dashboard layout',
        ],
        id: 6,
        gallery: [
            'https://i.ibb.co/MsgYxKn/dashboard-1.jpg',
        ],
        techStack: ['Tailwind', 'JavaScript', 'React', 'D3.js'],
        additionalInfo: 'This admin dashboard can be integrated into various platforms for effective data management and decision-making.',
    },
    {
        img: 'https://i.ibb.co/rM6F4D8/portfolio-1.jpg',
        link: 'https://ah-shuvro-portfolio.vercel.app/',
        title: 'Blog',
        type: 'Blog',
        description: `This personal portfolio showcases a variety of projects, from e-commerce to component libraries, along with my skills in modern web development. It features a sleek, modern design with smooth animations and an easy-to-navigate layout.`,
        projectName: 'Portfolio',
        client: 'Personal',
        budget: '$00.00',
        git: 'https://github.com/AHShuvro/portfolio-2',
        duration: '15 days',
        date: '1 Jan 2024',
        features: [
            'Responsive design with smooth animations',
            'Project filtering by type',
            'Detailed project showcases',
            'Downloadable resume and contact form',
        ],
        id: 7,
        gallery: [
            'https://i.ibb.co/rM6F4D8/portfolio-1.jpg',
        ],
        techStack: ['Tailwind', 'JavaScript', 'React', 'Framer Motion'],
        additionalInfo: 'This portfolio highlights my ability to design clean and effective user interfaces with a focus on responsiveness.',
    },
    {
        img: 'https://i.ibb.co/rM6F4D8/portfolio-1.jpg',
        link: 'https://my-portfolio-alpha-beige.vercel.app',
        title: 'Personal Portfolio: Showcasing Development Skills',
        type: 'Portfolio',
        description: `This personal portfolio showcases a variety of projects, from e-commerce to component libraries, along with my skills in modern web development. It features a sleek, modern design with smooth animations and an easy-to-navigate layout.`,
        projectName: 'Portfolio',
        client: 'Personal',
        budget: '$00.00',
        git: 'https://github.com/AHShuvro/my-portfolio',
        duration: '15 days',
        date: '1 Jan 2024',
        features: [
            'Responsive design with smooth animations',
            'Project filtering by type',
            'Detailed project showcases',
            'Downloadable resume and contact form',
        ],
        id: 8,
        gallery: [
            'https://i.ibb.co/rM6F4D8/portfolio-1.jpg',
        ],
        techStack: ['Tailwind', 'JavaScript', 'React', 'Framer Motion'],
        additionalInfo: 'This portfolio highlights my ability to design clean and effective user interfaces with a focus on responsiveness.',
    }
];


const feedbackData = [
    {
        feedback: "Exceptional service! They turned my outdated website into a sleek masterpiece. Highly recommend for anyone seeking top-notch web development.",
        name: "Alexander Flik",
        company: "BlueTech Solutions"
    },
    {
        feedback: "Incredible attention to detail! Their team transformed my vision into a stunning reality. Couldn't be happier with the results!",
        name: "Thomas",
        company: "PixelPerfect WebWorks"
    },
    {
        feedback: "Outstanding professionalism! From start to finish, they exceeded my expectations. The website they created surpassed all others in design and functionality. Amazing job!",
        name: "Emily",
        company: "CodeCraft Studios"
    },
    {
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore? Nam consequuntur natus rerum minus. Ratione, id!",
        name: "Lorem, ipsum.",
        company: "Lorem."
    }
];


const sliderImages = [
    { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
    { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
    { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
    { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
    { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
];

export { navLink, services, projects, feedbackData, skills, sliderImages};
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'components/card';

export const metadata = {
    title: 'Portfolio'
};

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce solution built with Next.js and Stripe integration. Features include product catalog, shopping cart, secure checkout, and order management.',
        tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
        image: '/images/corgi.jpg',
        link: '#'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking. Built for productivity and seamless team collaboration.',
        tags: ['React', 'Node.js', 'WebSockets'],
        image: '/images/corgi.jpg',
        link: '#'
    },
    {
        title: 'Analytics Dashboard',
        description: 'An interactive analytics dashboard featuring data visualization, custom reports, and real-time metrics. Helps businesses make data-driven decisions.',
        tags: ['TypeScript', 'D3.js', 'PostgreSQL'],
        image: '/images/corgi.jpg',
        link: '#'
    }
];

export default function PortfolioPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-4">Portfolio</h1>
                <p className="mb-6 text-lg">
                    A showcase of projects demonstrating expertise in web development,
                    design, and modern technologies. Each project represents a unique
                    challenge and creative solution.
                </p>
            </section>
            <section className="flex flex-col gap-8">
                <h2>Featured Projects</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <Card title="Want to work together?">
                    <p className="mb-4">
                        Interested in collaborating on a project or have a question?
                        Feel free to reach out and start a conversation.
                    </p>
                    <Link href="/" className="btn">
                        Get in Touch
                    </Link>
                </Card>
            </section>
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="bg-white rounded-sm text-neutral-600 overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-4 px-6 py-6 flex-1">
                <h3 className="text-neutral-900">{project.title}</h3>
                <p className="text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 bg-neutral-100 rounded text-neutral-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    href={project.link}
                    className="btn text-center mt-2"
                >
                    View Project
                </Link>
            </div>
        </div>
    );
}

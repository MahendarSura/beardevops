
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Calendar,
  User2,
  Share2,
  Copy,
  CheckCircle2,
  AlertCircle,
  Twitter,
  Linkedin,
  Facebook,
} from 'lucide-react';

const dockerCommands = [
  {
    name: 'List all running containers',
    command: 'docker ps',
    description: 'Shows all containers that are currently running',
  },
  {
    name: 'List all containers',
    command: 'docker ps -a',
    description: 'Shows all containers (running and stopped)',
  },
  {
    name: 'Start a container',
    command: 'docker run -d nginx',
    description: 'Starts an Nginx container in detached mode',
  },
  {
    name: 'Stop a container',
    command: 'docker stop <container_id>',
    description: 'Stops a running container',
  },
  {
    name: 'Remove a container',
    command: 'docker rm <container_id>',
    description: 'Removes a stopped container',
  },
  {
    name: 'Clean up system',
    command: 'docker system prune',
    description:
      'Removes unused data (stopped containers, unused networks, dangling images)',
  },
];

const faqs = [
  {
    question: 'What is Docker container management?',
    answer:
      'Docker container management refers to the practice of organizing, deploying, and maintaining Docker containers throughout their lifecycle in a production environment.',
  },
  {
    question: 'Why is container management important?',
    answer:
      'Effective container management ensures optimal resource utilization, improved security, and seamless scaling of applications in production environments.',
  },
  {
    question: 'What are the best practices for Docker in production?',
    answer:
      'Key practices include using official base images, implementing proper security measures, regular updates and maintenance, and efficient resource management.',
  },
];

const BlogPost = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const { blogId } = useParams();

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-900 text-gray-300 font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071"
          alt="Docker Containers"
          className="absolute inset-0 w-full h-full object-cover filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <Link
              to="/blogs"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
              aria-label="Back to blogs"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
              Docker Container Management: Master the Art of Containerization
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-400 text-sm select-none">
              <div className="flex items-center gap-2">
                <User2 className="w-5 h-5" />
                Azfar Alam
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                March 10, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                7 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Social Share */}
        <aside className="flex items-center gap-4 mb-12" aria-label="Share this article">
          <span className="text-gray-500 font-medium">Share this article:</span>
          <a
            href="https://twitter.com/intent/tweet?text=Docker%20Container%20Management%20Guide%20by%20BeardEvOps"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-5 h-5 text-blue-400" />
          </a>
          <a
            href="https://linkedin.com/shareArticle?mini=true&url=https://beardevops.com/blogs/docker-container-management"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </a>
          <a
            href="https://facebook.com/sharer/sharer.php?u=https://beardevops.com/blogs/docker-container-management"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-5 h-5 text-blue-800" />
          </a>
        </aside>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            In today&apos;s fast-paced development environment, mastering Docker container
            management is crucial for maintaining efficient and scalable applications. This
            comprehensive guide will walk you through essential concepts, best practices, and
            practical commands for managing Docker containers in production.
          </p>

          <h2>What Are Docker Containers?</h2>
          <p className="mb-8">
            Docker containers are lightweight, standalone, and executable packages that include
            everything needed to run a piece of software, including the code, runtime, system
            tools, libraries, and settings. They ensure consistency across different development
            and production environments.
          </p>

          <h2>Benefits of Docker in Production</h2>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>Consistent environments across development and production</li>
            <li>Improved resource utilization and scaling</li>
            <li>Faster deployment and easier maintenance</li>
            <li>Better isolation and security</li>
          </ul>

          {/* Commands Section */}
          <h2>Essential Docker Commands</h2>
          <div className="space-y-6 mb-12">
            {dockerCommands.map(({ name, command, description }) => (
              <section
                key={command}
                className="bg-gray-800 border border-gray-700 rounded-lg p-5"
                aria-label={`Docker command: ${name}`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{name}</h3>
                  <button
                    onClick={() => handleCopyCommand(command)}
                    aria-label={`Copy command: ${command}`}
                    className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
                    type="button"
                  >
                    {copiedCommand === command ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900 rounded-md p-3 font-mono text-sm overflow-x-auto select-all">
                  {command}
                </pre>
                <p className="mt-2 text-sm text-gray-400">{description}</p>
              </section>
            ))}
          </div>

          {/* Pro Tips */}
          <aside
            className="bg-yellow-600/10 border border-yellow-600 rounded-lg p-6 mb-12 flex items-start gap-4"
            aria-label="Pro tip"
          >
            <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Pro Tip</h3>
              <p>
                Always clean up unused Docker images and containers with{' '}
                <code className="bg-yellow-900 rounded px-2 py-1">docker system prune</code> to save
                space and maintain system performance.
              </p>
            </div>
          </aside>

          {/* FAQs */}
          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6 mb-16">
            {faqs.map(({ question, answer }) => (
              <section
                key={question}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6"
                aria-label={`FAQ: ${question}`}
              >
                <h3 className="font-semibold mb-3">{question}</h3>
                <p className="text-gray-400">{answer}</p>
              </section>
            ))}
          </div>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-pink-600/20 to-purple-700/20 border border-pink-600/30 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-pink-400">
              Ready to Master Docker?
            </h3>
            <p className="mb-6 max-w-xl mx-auto">
              Join our <strong>BeardEvOps Community</strong> to learn more about DevOps
              practices, container management, and cutting-edge deployment techniques.
            </p>
            <button
              className="px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-500/40 transition"
              type="button"
              aria-label="Join the BeardEvOps community"
            >
              Join the Community
            </button>
          </section>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;


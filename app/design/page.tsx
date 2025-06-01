"use client";
import React, { useState } from "react";
import {
  Eye,
  Calendar,
  Tag,
  Play,
  X,
  FileText,
  Box,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tools: string[];
  type: string;
  hasVideo?: boolean;
  videoUrl?: string;
  hasP3D?: boolean;
  p3dUrl?: string;
  hasGallery?: boolean;
  galleryImages?: string[];
  hasDocument?: boolean;
  documentUrl?: string;
}

interface Category {
  id: string;
  label: string;
}

type ModalType = "video" | "document" | "p3d" | "gallery";

interface ModalState {
  isOpen: boolean;
  url: string;
  title: string;
  type: ModalType;
  galleryImages: string[];
  currentImageIndex: number;
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    url: "",
    title: "",
    type: "video",
    galleryImages: [],
    currentImageIndex: 0,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "GOLD RIMZ 3D",
      category: "sculpture",
      year: "2024",
      image: "https://i.imgur.com/tpqEuib.jpeg",
      description:
        "Exploring geometric forms through digital sculpting techniques",
      tools: ["Blender", "ZBrush", "KeyShot"],
      type: "Personal Project",
      hasVideo: true,
      videoUrl:
        "https://drive.google.com/file/d/189wiwHYyfEQ8RMn8Y7SbGMiA0xdnkgCy/preview",
      hasP3D: true,
      p3dUrl: "https://p3d.in/e/fwLMB",
    },
    {
      id: 2,
      title: "3D LOTION AD",
      category: "product",
      year: "2024",
      image: "https://i.imgur.com/6lt3Ahc.jpeg",
      description: "Ad for a lotion company.",
      tools: ["3ds Max", "V-Ray", "Photoshop"],
      type: "Client Work",
      hasVideo: true,
      videoUrl:
        "https://drive.google.com/file/d/1O3CCSBb9OYm82frUWqTaXk4xCB5h1LnW/preview",
    },
    {
      id: 3,
      title: "AWEC ANIMATED",
      category: "logo",
      year: "2025",
      image: "https://i.imgur.com/IS4IxhH.jpeg",
      description: "Logo animation fora church.",
      tools: ["3ds Max", "V-Ray", "Photoshop"],
      type: "Client Work",
      hasVideo: true,
      videoUrl:
        "https://drive.google.com/file/d/1rjVMrWOKWgS-z6r05fClYXAyNh3sqA34/preview",
    },
    {
      id: 4,
      title: "DIAMANTE",
      category: "product",
      year: "2023",
      image: "https://i.imgur.com/V8KnOk5.jpeg",
      description: "Sleek wireless headphone design with focus on ergonomics",
      tools: ["Fusion 360", "KeyShot", "Illustrator"],
      hasVideo: true,
      type: "Concept Design",
      videoUrl:
        "https://drive.google.com/file/d/1UxqqMill1TiP8E9r08T_hu80xUJHRhaz/preview",
    },
    {
      id: 5,
      title: "Character Design Study",
      category: "character",
      year: "2023",
      image: "https://i.imgur.com/vbm1urX.jpeg",
      description:
        "Stylized character exploration with emphasis on form and poses",
      tools: ["ZBrush", "Maya", "Substance Painter"],
      type: "Character Design",
      hasDocument: true,
      documentUrl:
        "https://docs.google.com/document/d/1vvClaYfJCqrX00aJAdTrwmkACjSuaDPAE-ZvRh9963A/edit?usp=sharing",
    },
    {
      id: 6,
      title: "ARCHITECTURAL VISUALIZATION",
      category: "environment",
      year: "2023",
      image: "https://i.imgur.com/VOBgzyC.jpeg",
      description: "Technical visualization of interior spaces and structures",
      tools: ["SolidWorks", "KeyShot", "After Effects"],
      type: "Technical Render",
      hasGallery: true,
      galleryImages: [
        "https://drive.google.com/file/d/1qXg7XPQUyMRVGJ12euIQgUcCl6VPMs30/preview",
        "https://drive.google.com/file/d/16AENiKL-JLOY2CR_evY3ShojHRJvGRJY/preview",
        "https://drive.google.com/file/d/1EE-gCA81IaUN8PL9xffYBEURQSXSv5_V/preview",
      ],
    },
    {
      id: 7,
      title: "BLONDIE",
      category: "logo",
      year: "2025",
      image: "https://i.imgur.com/4sRIa4m.jpeg",
      description: "Logo for a food brand.",
      tools: ["SolidWorks", "KeyShot", "After Effects"],
      type: "Logo design",
      hasGallery: true,
      galleryImages: [
        "https://drive.google.com/file/d/1-l7Lk6ouyZ_iLb9OzLQB2MEnlApTMuxJ/preview",
      ],
    },
    {
      id: 8,
      title: "ONEPOWER X",
      category: "logo",
      year: "2025",
      image: "https://i.imgur.com/T7iCvNO.jpeg",
      description: "Logo for a bill payment web app",
      tools: ["SolidWorks", "KeyShot", "After Effects"],
      type: "Client Work",
      hasGallery: true,
      galleryImages: [
        "https://drive.google.com/file/d/1gZZ5Dxhiynrqzza7HX91vRR8994pnr8V/preview",
      ],
    },
    {
      id: 9,
      title: "TARINUMU PROJECT",
      category: "logo",
      year: "2024",
      image: "https://imgur.com/FHgwD4z.jpeg",
      description: "Film Animation project presentation cover design + logo.",
      tools: ["3ds Max", "V-Ray", "Photoshop"],
      type: "Client Work",
      hasGallery: true,
      galleryImages: [
        "https://drive.google.com/file/d/1fuxiqgskZnX6GJi1GJ4iRdQHQgGspUaw/preview",
        "https://drive.google.com/file/d/1JD_jjz3_qQofVvme_KtonIw2-5mUCG3K/preview",
        "https://drive.google.com/file/d/1_kt86yxzXHQyddMbvgRduieghy62oM8D/preview",
      ],
    },
    {
      id: 10,
      title: "BET GENIUS",
      category: "logo",
      year: "2024",
      image: "https://imgur.com/BtkdRTv.jpeg",
      description: "Logo for a betting company.",
      tools: ["3ds Max", "V-Ray", "Photoshop"],
      type: "Client Work",
      hasGallery: true,
      galleryImages: [
        "https://drive.google.com/file/d/1GoZBWoc-RkGyKxSHMmqI6ACMviJNShn6/preview",
      ],
    },
  ];

  const categories: Category[] = [
    { id: "all", label: "All Work" },
    { id: "logo", label: "Logo" },
    { id: "product", label: "Product" },
    { id: "character", label: "Character" },
    { id: "environment", label: "Environment" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openModal = (
    url: string,
    title: string,
    type: ModalType,
    galleryImages: string[] = []
  ) => {
    setModal({
      isOpen: true,
      url,
      title,
      type,
      galleryImages,
      currentImageIndex: 0,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      url: "",
      title: "",
      type: "video",
      galleryImages: [],
      currentImageIndex: 0,
    });
  };

  const nextImage = () => {
    setModal((prev) => ({
      ...prev,
      currentImageIndex:
        (prev.currentImageIndex + 1) % prev.galleryImages.length,
    }));
  };

  const prevImage = () => {
    setModal((prev) => ({
      ...prev,
      currentImageIndex:
        prev.currentImageIndex === 0
          ? prev.galleryImages.length - 1
          : prev.currentImageIndex - 1,
    }));
  };

  const renderModalContent = () => {
    if (modal.type === "p3d") {
      return (
        <div className="w-full" style={{ height: "480px" }}>
          <iframe
            allowFullScreen
            width="100%"
            height="100%"
            loading="lazy"
            frameBorder="0"
            src={modal.url}
            title={modal.title}
            className="border-0"
          />
        </div>
      );
    } else if (modal.type === "gallery") {
      return (
        <div className="w-full">
          <div className="relative">
            <iframe
              src={modal.galleryImages[modal.currentImageIndex]}
              className="w-full h-96 border-0"
              title={`${modal.title} - Image ${modal.currentImageIndex + 1}`}
            />

            {modal.galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  →
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                  {modal.currentImageIndex + 1} / {modal.galleryImages.length}
                </div>
              </>
            )}
          </div>

          {modal.galleryImages.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {modal.galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setModal((prev) => ({ ...prev, currentImageIndex: index }))
                  }
                  className={`flex-shrink-0 w-16 h-16 border-2 transition-colors ${
                    index === modal.currentImageIndex
                      ? "border-black"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                >
                  <iframe
                    src={img}
                    className="w-full h-full border-0 pointer-events-none"
                    title={`Thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="w-full aspect-video">
          <iframe
            src={modal.url}
            className="w-full h-full border-0"
            allow="autoplay"
            title={modal.title}
            style={{ aspectRatio: "16/9" }}
          />
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-light tracking-tight text-black mb-2">
                Design Portfolio
              </h1>
              <p className="text-gray-600 text-lg font-light max-w-2xl">
                Exploring visual communication, user experiences, and brand
                identities through thoughtful design
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{projects.length} Projects</span>
              <span>•</span>
              <span>Updated 2025</span>
            </div>
          </div>
        </div>
      </header>
      {/* Filter Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                <Image
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-20" : "opacity-0"
                  }`}
                />

                {/* Hover Actions */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {project.hasDocument && (
                    <button
                      onClick={() =>
                        openModal(
                          project.documentUrl!,
                          project.title,
                          "document"
                        )
                      }
                      className="bg-white text-black p-3 hover:bg-gray-100 transition-colors"
                      title="View Document"
                    >
                      <FileText size={20} />
                    </button>
                  )}
                  {project.hasVideo && (
                    <button
                      onClick={() =>
                        openModal(project.videoUrl!, project.title, "video")
                      }
                      className="bg-white text-black p-3 hover:bg-gray-100 transition-colors"
                      title="Play Video"
                    >
                      <Play size={20} />
                    </button>
                  )}
                  {project.hasP3D && (
                    <button
                      onClick={() =>
                        openModal(project.p3dUrl!, project.title, "p3d")
                      }
                      className="bg-white text-black p-3 hover:bg-gray-100 transition-colors"
                      title="View 3D Model"
                    >
                      <Box size={20} />
                    </button>
                  )}
                  {project.hasGallery && (
                    <button
                      onClick={() =>
                        openModal(
                          "",
                          project.title,
                          "gallery",
                          project.galleryImages!
                        )
                      }
                      className="bg-white text-black p-3 hover:bg-gray-100 transition-colors"
                      title="View Image Gallery"
                    >
                      <ImageIcon size={20} />
                    </button>
                  )}
                  {!project.hasDocument &&
                    !project.hasVideo &&
                    !project.hasP3D &&
                    !project.hasGallery && (
                      <button className="bg-white text-black p-3 hover:bg-gray-100 transition-colors">
                        <Eye size={20} />
                      </button>
                    )}
                </div>

                {/* Content Indicators */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {project.hasVideo && (
                    <div className="bg-black bg-opacity-70 p-2 rounded">
                      <Play size={16} className="text-white" />
                    </div>
                  )}
                  {project.hasDocument && (
                    <div className="bg-black bg-opacity-70 p-2 rounded">
                      <FileText size={16} className="text-white" />
                    </div>
                  )}
                  {project.hasP3D && (
                    <div className="bg-black bg-opacity-70 p-2 rounded">
                      <Box size={16} className="text-white" />
                    </div>
                  )}
                  {project.hasGallery && (
                    <div className="bg-black bg-opacity-70 p-2 rounded">
                      <ImageIcon size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 text-xs font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium text-black group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 shrink-0">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={14} className="text-gray-400" />
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-500 bg-gray-100 px-2 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </main>
      {/* Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-80"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-black">{modal.title}</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 p-4">{renderModalContent()}</div>
          </div>
        </div>
      )}
    </div>
  );
}

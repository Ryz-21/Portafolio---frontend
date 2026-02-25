import { useState, useEffect } from "react"

// Importar imágenes para Sistema de Gestión
import gestion1 from "../assets/img/Sistema de Gestion/gestion-1.png"
import gestion2 from "../assets/img/Sistema de Gestion/gestion-2.png"
import gestion3 from "../assets/img/Sistema de Gestion/gestion-3.png"
import gestion4 from "../assets/img/Sistema de Gestion/gestion-4.png"
import gestion5 from "../assets/img/Sistema de Gestion/gestion-5.png"

// Importar imágenes para Web Ecommerce
import eco1 from "../assets/img/WEB ECOMMERCE/ecommerce-1.png"
import eco2 from "../assets/img/WEB ECOMMERCE/ecommerce-2.png"
import eco3 from "../assets/img/WEB ECOMMERCE/ecommerce-3.png"
import eco4 from "../assets/img/WEB ECOMMERCE/ecommerce-4.png"
import eco5 from "../assets/img/WEB ECOMMERCE/ecommerce-5.png"
import eco6 from "../assets/img/WEB ECOMMERCE/ecommerce-6.png"
import eco7 from "../assets/img/WEB ECOMMERCE/ecommerce-7.png"
import eco8 from "../assets/img/WEB ECOMMERCE/ecommerce-8.png"
import eco9 from "../assets/img/WEB ECOMMERCE/ecommerce-9.png"

export default function Proyectos() {

  const projects = [
    {
      id: 1,
      name: "Sistema de gestión",
      images: [
        gestion1,
        gestion2,
        gestion3,
        gestion4,
        gestion5
      ]
    },
    {
      id: 2,
      name: "Web ecommerce",
      images: [
        eco1, eco2, eco3, eco4, eco5, eco6, eco7, eco8, eco9
      ]
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide logic
  useEffect(() => {
    if (!selectedProject) {
      setCurrentImageIndex(0)
      return
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        (prev + 1) % selectedProject.images.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedProject])

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % selectedProject.images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    )
  }

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto animate-reveal">
      <h2 className="text-5xl font-black uppercase mb-12">
        Proyectos
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="aspect-video bg-zinc-100 dark:bg-zinc-900 
                       border-2 border-black dark:border-white 
                       p-8 cursor-pointer
                       hover:bg-black hover:text-white 
                       dark:hover:bg-white dark:hover:text-black
                       transition-all duration-500"
          >
            <span className="text-6xl font-black opacity-10">
              0{project.id}
            </span>

            <h3 className="text-3xl font-black uppercase mt-4">
              {project.name}
            </h3>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center
                        bg-black/70 backdrop-blur-sm
                        px-4 transition-opacity duration-300">

          <div className="relative w-full max-w-4xl
                          bg-white dark:bg-black
                          border-2 border-black dark:border-white
                          p-6
                          animate-[fadeIn_.4s_ease-in-out]">

            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4
                         w-10 h-10 flex items-center justify-center
                         border-2 border-black dark:border-white
                         text-black dark:text-white
                         hover:bg-black hover:text-white
                         dark:hover:bg-white dark:hover:text-black
                         transition-all duration-300
                         hover:rotate-90 hover:scale-110"
            >
              ✕
            </button>

            <h3 className="text-3xl font-black uppercase mb-6">
              {selectedProject.name}
            </h3>

            {/* CAROUSEL (React Controlled) */}
            <div className="relative w-full">
              {/* Wrapper */}
              <div className="relative h-56 md:h-96 overflow-hidden rounded-lg bg-zinc-900">

                {selectedProject.images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}

              </div>

              {/* Flecha IZQUIERDA */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group"
              >
                <span className="
                w-12 h-12 flex items-center justify-center
                rounded-full
                border-2
                border-black dark:border-white
                bg-black dark:bg-white
                text-white dark:text-black
                 transition-all duration-300
               group-hover:bg-white group-hover:text-black
               dark:group-hover:bg-black dark:group-hover:text-white
               group-hover:scale-110
              ">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </button>

              {/* Flecha DERECHA */}
              <button
                type="button"
                onClick={nextImage}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group"
              >
                <span className="
                  w-12 h-12 flex items-center justify-center
                   rounded-full
                     border-2
                      border-black dark:border-white
                       bg-black dark:bg-white
                       text-white dark:text-black
                          transition-all duration-300
                             group-hover:bg-white group-hover:text-black
                                dark:group-hover:bg-black dark:group-hover:text-white
                                   group-hover:scale-110
                                     ">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              {/* Indicadores (Opcional pero recomendado para UX) */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full border-1 border-white ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    aria-current={index === currentImageIndex}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></button>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}

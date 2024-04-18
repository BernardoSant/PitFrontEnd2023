import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
      <footer aria-label="Site Footer" className="border-t-4">
    <div
      className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="text-green-500">
            <span className="font-bold text-4xl tracking-tight">Fit<span className='text-orange-500'>Food</span></span>
          </div>

          <p className="max-w-xs mt-4 text-sm text-gray-500">
          Escolha inteligente para uma vida saudável e saborosa. Descubra nossos serviços!
          </p>

          <ul className="flex gap-6 mt-8">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook />
                
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                <FaInstagram />
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <FaTwitter />
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>

                <FaGithub />
              </a>
            </li>
          </ul>
        </div>

        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
        >
          <div>
            <p className="font-medium text-gray-400">Services</p>

            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Assinaturas
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Cardápios
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Entregas
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-400">Empresa</p>

            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Sobre Nós
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Conheça a equipe
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-400">Links de Ajuda</p>

            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Contato
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    FAQs
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Cancelamento de planos
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-400">Políticas</p>

            <nav aria-label="Footer Navigation - Legal" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Accessibilidade
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Política de devolução
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75">
                    Política de reembolso
                  </a>
                </li>

                <li>
                  <a
                    href="/TermosUso.html"
                    className="text-gray-500 transition hover:opacity-75"
                    download="true"
                    target="_blank"
                    rel="noreferrer"
                  >
                  Termos de uso
                  </a> 
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        &copy; 2023. Fit food. Todos os direitos reservados.
      </p>
    </div>
  </footer>
  )
}

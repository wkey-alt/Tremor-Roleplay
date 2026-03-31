import { SERVER_DATA, NAV_LINKS } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-display font-black tracking-tighter uppercase italic flex items-center">
                <span className="text-white">Tremor</span>
                <span className="text-primary ml-1.5">RP</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              {SERVER_DATA.description}. Připoj se k nejlepšímu roleplay zážitku v CZ/SK komunitě.
            </p>
            <div className="flex gap-4">
              <a 
                href={SERVER_DATA.discord} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all hover:scale-110 active:scale-95 group"
              >
                <span className="sr-only">Discord</span>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.666 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
                </svg>
              </a>
              <a 
                href={SERVER_DATA.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all hover:scale-110 active:scale-95 group"
              >
                <span className="sr-only">TikTok</span>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.1-.12 6.2-.13 9.3-.01 1.43-.35 2.91-1.2 4.1-1.1 1.64-3.07 2.67-5.04 2.73-2.01.05-4.04-.72-5.4-2.21-1.36-1.49-1.86-3.62-1.42-5.57.44-1.95 1.95-3.61 3.88-4.21.9-.28 1.85-.35 2.78-.29v4.02c-.63-.06-1.29.02-1.86.3-.77.38-1.29 1.14-1.4 1.99-.13.9.23 1.86.9 2.47.67.61 1.62.83 2.5.59.88-.24 1.58-.97 1.81-1.86.14-.54.15-1.1.15-1.66V.02z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase italic mb-6 tracking-widest text-sm">Rychlé Odkazy</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-primary transition-colors text-sm uppercase tracking-widest">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase italic mb-6 tracking-widest text-sm">Server Info</h4>
            <ul className="space-y-4 text-sm text-gray-500 uppercase tracking-widest">
              <li>Framework: {SERVER_DATA.framework}</li>
              <li>Whitelist: {SERVER_DATA.whitelist.status}</li>
              <li>Connect: {SERVER_DATA.connectCommand}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Tremor RP. Všechna práva vyhrazena.</p>
          <p>Created with passion for RP</p>
        </div>
      </div>
    </footer>
  );
}

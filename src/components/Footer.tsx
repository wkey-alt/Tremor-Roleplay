import { SERVER_DATA, NAV_LINKS } from "../constants";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <LogoIcon size="md" />
              <span className="text-2xl font-display font-black tracking-tighter uppercase italic">{SERVER_DATA.name}</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              {SERVER_DATA.description}. Připoj se k nejlepšímu roleplay zážitku v CZ/SK komunitě.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <span className="sr-only">Discord</span>
                {/* Discord Icon Placeholder */}
                <div className="w-5 h-5 bg-white/50 rounded-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <span className="sr-only">TikTok</span>
                {/* TikTok Icon Placeholder */}
                <div className="w-5 h-5 bg-white/50 rounded-sm" />
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
          <p>&copy; {new Date().getFullYear()} {SERVER_DATA.name}. Všechna práva vyhrazena.</p>
          <p>Created with passion for RP</p>
        </div>
      </div>
    </footer>
  );
}

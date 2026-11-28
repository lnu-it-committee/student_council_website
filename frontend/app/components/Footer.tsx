const CONTACTS = {
  email: 'fpmi.studrada@gmail.com',
  telegram: 'https://t.me/Solkafa',
  instagram: 'https://www.instagram.com/ami_lnu/',
  site: 'https://ami.lnu.edu.ua/students/government',
} as const;

const PARTNERS = [
  { name: 'GlobalLogic', href: 'http://www.globallogic.com.ua/uk/' },
  { name: 'SoftServe', href: 'http://softserve.ua/' },
] as const;

export default function Footer() {
  return (
    <footer className="ftr" id="contacts">
      <div className="ftr-in">
        <p className="ftr-eb">07 · зв’язок</p>
        <h2 className="ftr-title">
          <span>Контакти</span>
        </h2>
        <p className="ftr-lead">Є ідея чи питання? Пишіть нам куди зручно.</p>

        <div className="ftr-links">
          
          <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
            ✈ Telegram голови
          </a>
          <a href={CONTACTS.instagram} target="_blank" rel="noopener noreferrer">
            📷 Instagram факультету
          </a>
          <a href={CONTACTS.site} target="_blank" rel="noopener noreferrer">
            🌐 Сторінка на сайті ФПМІ
          </a>
        </div>

        <div className="ftr-partners">
          {PARTNERS.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
          ))}
        </div>

        <div className="ftr-big" aria-hidden="true">
          ФПМІ
        </div>
        <p className="ftr-copy">
          © {new Date().getFullYear()} Студентська рада факультету прикладної математики та
          інформатики · ЛНУ ім. Івана Франка. Університетська 1.
        </p>
      </div>
    </footer>
  );
}
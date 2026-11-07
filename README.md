# 🏛️ Сайт Студентської ради факультету прикладної математики та інформатики

[![GitHub pull requests](https://img.shields.io/github/issues-pr/lnu-it-committee/student_council_website)](https://github.com/lnu-it-committee/student_council_website/pulls)
[![Contributors](https://img.shields.io/github/contributors/lnu-it-committee/student_council_website)](https://github.com/lnu-it-committee/student_council_website/graphs/contributors)
[![GitHub last commit](https://img.shields.io/github/last-commit/lnu-it-committee/student_council_website)](https://github.com/lnu-it-committee/student_council_website/commits/main)

Офіційний вебпортал Студентської ради факультету прикладної математики та інформатики ЛНУ ім. Івана Франка. 
Проєкт створений ІТ-комітетом для того, щоб зробити студентське самоврядування відкритим, доступним та діджиталізованим.

## 🎯 Мета проєкту
Створити єдиний інформаційний хаб для студентів факультету, який включає:
- Ознайомлення зі структурою студради та її комітетами.
- Прозорий доступ до документації (протоколи засідань, положення).
- Швидкий зв'язок зі студрадою через інтерактивні форми.
- Зручну адмін-панель для пресцентру, щоб публікувати новини та анонси без залучення розробників.

## 🛠 Технічний стек
- **Frontend:** React (Next.js), Tailwind CSS
- **Backend:** Python (FastAPI), SQLAlchemy
- **Database:** PostgreSQL
- **Infrastructure:** Docker, GitHub Actions (CI/CD)

## 🗂 Структура репозиторію
\`\`\`text
├── frontend/          # Клієнтська частина сайту (React)
├── backend/           # API та бізнес-логіка (FastAPI)
├── admin/             # Закрита панель для управління контентом
└── docs/              # Технічна документація для розробників
\`\`\`

## 🚀 Локальний запуск

### Попередні вимоги
- Встановлений [Node.js](https://nodejs.org/) (v18+)
- Встановлений [Python](https://www.python.org/) (3.10+)
- Встановлений та запущений [Docker](https://www.docker.com/)

### Крок 1. Клонування репозиторію
\`\`\`bash
git clone https://github.com/lnu-it-committee/student_council_website.git
cd student_council_website
\`\`\`

### Крок 2. Налаштування Backend
\`\`\`bash
cd backend
python -m venv venv
source venv/bin/activate  # Для Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # Додайте свої локальні ключі
uvicorn main:app --reload
\`\`\`

### Крок 3. Налаштування Frontend
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
Сайт буде доступний за адресою: `http://localhost:3000`

## 🤝 Як зробити внесок (Contributing)
Розробка ведеться за методологією **GitHub Flow**. Прямі пуші в гілку `main` заборонені.

1. Перейдіть на дошку задач (GitHub Projects) і візьміть Issue у роботу.
2. Створіть нову гілку від `main` (формат: `feat/nazva-fichi`, `bugfix/nazva-bagu` або `docs/opys`).
   \`\`\`bash
   git checkout -b feat/add-contact-form
   \`\`\`
3. Зробіть коміти з описом змін (використовуйте [Conventional Commits](https://www.conventionalcommits.org/)).
4. Запуште гілку та створіть Pull Request.
5. Позначте (Request Review) відповідну команду рев'юерів (`@lnu-it-committee/frontend`, `@lnu-it-committee/backend` або `@lnu-it-committee/qa`).
6. Після перевірки та апруву код буде змерджено.

## 👥 Команда розробників
Проєкт підтримується ІТ-комітетом студради. Якщо ви студент нашого факультету і хочете долучитися — пишіть голові ІТ-комітету або залишайте заявку на вступ до нашої [GitHub-організації](https://github.com/lnu-it-committee).

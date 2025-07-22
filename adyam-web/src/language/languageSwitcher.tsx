import { useTranslation } from 'react-i18next';
import "./LanguageSwitcher.css";


const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'am', label: 'አማርኛ' },
  // Add more languages here as needed
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      className="language-switcher"
      value={i18n.language}
      onChange={e => changeLanguage(e.target.value)}
      style={{
      padding: '6px 12px',
      borderRadius: '6px',
      background: 'transparent',
      color: '#333',
      fontSize: '1rem',
      marginRight: 8,
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color 0.2s',
      }}
      onMouseOver={e=>(e.currentTarget.style.borderColor="#0078d4")}
      onFocus={e => (e.currentTarget.style.borderColor = '#0078d4')}
      onBlur={e => (e.currentTarget.style.borderColor = '#ccc')}
    >
      {LANGUAGES.map(lang => (
      <option key={lang.code} value={lang.code} className="w-full hover:border hover:bg-border-b-blue-700">
        {lang.code}
      </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
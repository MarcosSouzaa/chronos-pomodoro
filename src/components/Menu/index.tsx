import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react'; //usando o Hoock dos Efeitos Colaterais

/*Usando Estado e criando um tipo diferente de String, dark ou light */
/*Criei no useState e removi pra cá criando um tipo AvailableTheme */
type AvailableThemes = 'dark' | 'light';

export function Menu() {
  /* Buscando a chave do tema que salvei no local storage */
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
    /* ou 
    return storageTheme === 'light' ? 'light : 'dark';  */
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    //Salvando chave 'theme' e valor theme no local Storage do navegador
    localStorage.setItem('theme', theme);

    return () => {
      console.log('Olha, este componente srá atualizado!');
    };
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para Home'
        title='Ir para Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para Configurações'
        title='Ir para Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}

        {/*Aqui eu poderia fazer if/else, mas preferi fazer um objeto com
        chave e valor lá encima e usar aqui passando o theme:
        const nextThemeIcon = {dark: <SunIcon />,light: <MoonIcon />,};*/}
      </a>
    </nav>
  );
}

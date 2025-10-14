import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

/*Usando Estado e criando um tipo diferente de String, dark ou light */
/*Criei no useState e removi pra cá criando um tipo AvailableTheme */
type AvailableThemes = 'dark' | 'light';

export function Menu() {
  /*Usando Estado e criando um tipo diferente de String, dark ou light */
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Não siga o link mudando de página
    console.log('Clicado', Date.now());
    /*Vou pegar da memória o tema interno que está nela. prevTheme é o tema anterior
vou criar a função nextTheme (qual é o próximo tema, que é o contrário do atual
então, se prevTheme for igual a 'dark', ele será(?), senão (:), pode voltar para 
'dark' e returno o nextTheme que será configurado lá encima */
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      return nextTheme;
    });
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
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
        <SunIcon />
      </a>
    </nav>
  );
}

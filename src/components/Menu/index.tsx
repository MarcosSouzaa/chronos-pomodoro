import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react'; //usando o Hoock dos Efeitos Colaterais

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

    /*Vou pegar da memória o tema interno que está nela. prevTheme é o tema anterior
vou criar a função nextTheme (qual é o próximo tema, que é o contrário do atual
então, se prevTheme for igual a 'dark', ele será(?), senão (:), pode voltar para 
'dark' e returno o nextTheme que será configurado lá encima */
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  /* Três formas de usar EFEITOS COLATERAIS
   ----- Passando uma função
   Executa todas as vezes que o componente renderiza na tela
   useEffect(() => {
     console.log('useEffect sem dependências', Date.now());
   });*/

  /*----- Passando um array vazio (array de dependência), como segundo parâmetro
  Executa apenas quando o react monta o componente na tela pela primeira vez
  Ideal para ecommerce com API externa
  useEffect(() => {
  console.log('useEfects com array de dependências vazio', Date.now());
  }, []);*/

  /*----- Passando um array com parâmetro, ou seja, uma dependência como segundo parâmetro
  Quando eu der o setTheme vou executar essa função e renderizar o Tema */
  useEffect(() => {
    console.log('Theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    /* Função que limpa restos deixados e atualiza o componente
    antes de mudar o tema */
    return () => {
      console.log('Olha, este componente srá atualizado!');
    };
  }, [theme]);

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

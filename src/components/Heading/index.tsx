import objStyles from './styles.module.css';

type HeadingProps = {
  /*ReactNode pode ser qualquer coisa que o React renderiza 
(string, number, elemento, array de elementos, fragmentos, etc) */
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  //const {children} = props; estou desestruturando o props dentro do parametro da função
  return <h1 className={objStyles.heading}>{children}</h1>;
}

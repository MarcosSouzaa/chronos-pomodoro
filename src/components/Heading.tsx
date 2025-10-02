/*Importando o css module. Esse .module faz com que o css tenha um escopo
permite também eu usar uma variável pra pegar os valores das classes que
estão nesse arquivo Heading.module.css. Vou criar um objeto Style para usar
como uma variável*/
import objStyles from './Heading.module.css';

//Vou criar uma function e retornar um heading
//Vou usar a variável objStyles para pegar a classe que eu quero usar
//vou instalar uma extensão chamada "CSS Modules" para o VSCode
//Essa extensão vai me ajudar a ver as classes que eu tenho disponíveis
//no arquivo Heading.module.css
//Vou usar a classe heading que eu criei no arquivo Heading.module.css
export function Heading(props.) {
  return (
    //Posso usar template string para usar mais de uma classe
    // <h1 className={`${objStyles.heading} ${objStyles.cyan}`}>Olá Mundo!</h1>
    <h1 className={objStyles.heading}>{props.children}</h1>
  );
}

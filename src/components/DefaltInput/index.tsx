import styles from './styles.module.css';
/*Criando uma Props (igual a um objeto { }"As props são sempre um objeto" 

  DefaltInputProps = {} "Aqui eu defino o tipo da props"
  Posso criar vários tipos separados por:|, mas ao invés disso,
  posso usar uma Intersection: & {} para combinar duas coisas que 
  uno todas as propriedades do objeto. Ao invés de ficar criando,
  posso pegar as propriedades do prório componente jsx e fazer
  a interseção com o meu tipo e o outro tipo que é: 
  react.ComponentProps<'input'>; Agora, posso inclusive retirar 
  o type de dentro daqui do meu DefaltProps, que ele não vai gerar
  erro no meu Destroct. Além disso, eu quero ter coisas específicas
  no meu elemento como 'id:string', então vou passar aqui { } no meu 
  elemento e vou sobscrever o elemento <input> ou seja, estou 
  forçando que meu elemento tenha um id. Lá no index, vou precisar
  passar o id. Ex: id = 'meuImput* e também já posso usar o id
  no label e no imput e precisamos criar uma propriedade label,
  ex.: labelText
  labelText?: string /*a ? diz que a label é opcional quando
  eu quiser usar esse argumento*/
type DefaltInputProps = {
  id: string;
  labelText: string /*Não deixarei label opcional*/;
} & React.ComponentProps<'input'>;

export function DefaltInput({
  id,
  type,
  labelText,
  ...rest /*rest pega todo o resto das propriedades que vierem no input*/
}: DefaltInputProps) {
  return (
    /*recorto do app.tsx para usar globalmente */
    /* Posso usar uma condição aqui: Se acondiçao ? for verdadeira
    faça isso, senão : 'False' ex: 
    {condicao ? 'Verdadeiro' : 'False'} 
    ABAIXO: se existir o labelText exibe o label, senão exibe vazio:
     {labelText ? <label htmlFor={id}>{labelText}</label> : ''}
     Como não trabalho com a condiçao falsa e trabalho só com a verdadeira,
     posso usar a condiçao verdadeira && mostre isso aqui. Ex:
     {labelText && <label htmlFor={id}>{labelText}</label>}
     */
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}

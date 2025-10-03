import objStyles from './Container.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={objStyles.container}>
      <div className={objStyles.content}>{children}</div>
    </div>
  );
}

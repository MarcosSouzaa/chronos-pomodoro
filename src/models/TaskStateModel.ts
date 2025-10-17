import type { TaskModel } from './TaskModel';

/* Aqui vai ficar o estado completo da aplicação */
export type TaskStateModel = {
  /*Aqui vou usar um array de TaskModel */
  tasks: TaskModel[];
  secondsRemaning: number; //esse é o contador
  formattedSecondsRemaining: string; // é o secondsRemaning formatado em segundos
  activeTask: TaskModel | null; //se tiver uma task ativa ou nula
  currentCycle: number; // são as bolinhas de 1 a 8 para eu saber aonde estou
  // é a configuração do sistema
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};

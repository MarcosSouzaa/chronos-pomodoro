/*Aqui poderia ser um Type, uma Interface, poderia ser uma Classe. Vou usar Type
porque aqui não haverá lógica, será só um modelo de dados */
export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chega ao final(se interromper, volta null)
  interruptDate: number | null; // quando o task for interrompida
  type: 'worktime' | 'shortBreakTime' | 'longBreakTime';
};

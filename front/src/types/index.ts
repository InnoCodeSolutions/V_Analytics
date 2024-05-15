export interface Credentials {
  username: string;
  password: string;
  role?: string; // Adicione o ? para tornar a propriedade opcional
}
export interface Dados {
  id: number;
  atribuicao: string;
  finalizados: string;
  em_andamento: string;
  validados:string;
  nao_validados:number;
  nao_finalizados:number;
}
export interface Props {
  analistas: Dados[];
}
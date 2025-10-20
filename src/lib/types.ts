// src/lib/types.ts
// 📚 Define a estrutura que um Livro terá
export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  preco: number; // Em reais (ex: 49.90)
  estoque: number; // Quantidade disponível
  capaUrl: string; // URL da capa
  descricao: string;
}

// Tipos de dados que usaremos no Context API (Carrinho)
export interface CarrinhoItem {
  livro: Livro;
  quantidade: number;
}

export interface CarrinhoContextType {
  itens: CarrinhoItem[];
  adicionarAoCarrinho: (livro: Livro, quantidade?: number) => void;
  removerDoCarrinho: (livroId: number) => void;
}

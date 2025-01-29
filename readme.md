### Anotações Importantes

> Antes de refatorar, tenha certeza que já foi feita a cobertura de testes.

> Pequenas modificações que permitam um ciclo de feedback rápido são o segredo para evitar confusão.

### Métodos de Refatoração
- Extract Function (Extrair Função): Técnica que consiste em pegar um trecho de código e transformá-lo em uma função separada. Útil quando:
  - O código é muito longo ou complexo
  - Há duplicação de código
  - O trecho de código tem uma responsabilidade clara e única
  - Deseja-se melhorar a legibilidade do código
- Substituir variável temporária por consulta: Técnica que consiste em substituir uma variável temporária por uma função/método que retorna o valor calculado. Útil quando:
  - A variável é calculada uma única vez e não é modificada depois
  - O cálculo é simples e pode ser encapsulado em uma função
  - Melhora a legibilidade ao dar um nome significativo para o cálculo
  - Facilita a reutilização do cálculo em outros lugares do código
  - Ajuda a evitar duplicação de lógica
- Internalizar variável (Inline Variable): Técnica que consiste em substituir uma variável por sua expressão direta. Útil quando:
  - A variável não adiciona clareza ao código
  - A expressão é simples e autoexplicativa
  - A variável está sendo usada apenas uma vez
  - A variável está dificultando outras refatorações
  - Deseja-se simplificar o código eliminando variáveis desnecessárias
- Mudar declaração de função: Técnica que consiste em alterar a assinatura de uma função (nome, parâmetros, retorno). Útil quando:
  - O nome da função não reflete claramente seu propósito
  - Os parâmetros precisam ser reordenados ou modificados
  - É necessário adicionar ou remover parâmetros
  - O tipo de retorno precisa ser alterado
  - Deseja-se melhorar a interface da função
  - A função evoluiu e sua declaração atual não representa bem seu comportamento

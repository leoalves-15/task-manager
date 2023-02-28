## `Instalação e inicialização`
Quando finalizar o cline ou o download rode
```sh
yarn
```
para instalar as dependências.

Depois rode para iniciar a aplicação
```sh
yarn start
```
Que será aberta em  [http://localhost:3000](http://localhost:3000).

Para rodar o storybook basta rodar o comando 
```sh
yarn storybook
```

## `Tecnologias`
 `styled-components` [https://styled-components.com/](https://styled-components.com/)
Motivos: Visto que seja uma tecnologia prática e reaproveitável, além disso combinado com a indicação do desafio, foram os motivos que levaram a escolha, para estilos.

 `React com Typescript`
Motivos: Além de ser minha stack principal, react, principalmente com o typing, facilita muito a vida do desenvolvedor, evitando vícios de linguagens e erros banais.

 `React DnD`[ https://react-dnd.github.io/react-dnd/about](https://react-dnd.github.io/react-dnd/about) 
 Motivos: Resolvi, fazer algo diferente e fazer um drag in drop, já que na descrição deixava livre a questão de UX e UI.
 
 `StoryBook` https://storybook.js.org/ 
 Motivos: Já a um tempo uso como padrão de desenvolvimento documentar minhas aplicações sobre tudo com storybook e um micro manual no notion (esse não deu tempo), mas é como se fosse um manual para usuários, enfim, a documentação no front tem sido cada vez mais importante sobre tudo em grandes equipes e deve ser padrão.
 
 `Axios` https://axios-http.com/ptbr/docs/intro
 Motivos: Lib que abstrai as requisições hhtp, como o axios já é uma lib familiar e popular no mundo dev foi escolhida, principalmente pela sua facilidade.
 
 `react-icons` https://react-icons.github.io/react-icons/
 Motivos: Além de ser amplamente difundido, foi escolhido pela indicação do desafio e também por possuir os ícones do Font-Awesome
 
 # Observações

1 - Renderização depois mudanças, primeiro eu fiz um estado que recebia os dados da api e daí eu manipulava ele e rederizava em tela, mesmo depois de fazer uma requizição que alterava os dados, esssa maneira era mais performática, pois agora eu faço uma nova requisição assim que a de alteração, criação ou exclusão seja concluida, e o motivo disso é que um dos requesitos que adotei seria a integridade dos dados e nesse caso eu priorizei isso e não a peformace, uma vez que tenho certeza que tudo que está sendo renderizado em tela é exatamente o que está na API.

2 - Usei uma abordagem diferente da indicada no desafio em relação a mudar os cards de coluna, espero que não me cause problemas, mas acho que ficou legal além de todas funcionalidades pedidas serem entregues.

3 - usei a paleta de cores da própria ada.

4 - O card de new e de edit estão juntos e o de view separado pois eles tem responsabilidades diferente, respectivamente alterar dados dos cards, seja criando ou atualizando e apenas mostrar.

 ### DESAFIO
 ##### requisitos
 
A API que provemos deve ser usada para persistência dos cards (ela trabalha com persistência em memória) e não deve ser alterada. ✅
________________________________________________________________________________

A interface gráfica será apenas uma tela, nela deve haver três colunas chamadas "To do", "Doing" e "Done". ✅
________________________________________________________________________________

Os cards deve ser listados nessas colunas de acordo com o valor do campo lista presente no card. Os valores de lista devem ser "ToDo", "Doing" e "Done", respectivamente. ✅
________________________________________________________________________________

Deve haver um local que permita criar um card passando valores para o titulo e conteudo, deve haver um botão para adicionar o card. ✅

________________________________________________________________________________
Um novo card deve sempre cair na lista "To Do" após persistido na API. ✅
________________________________________________________________________________

O card deverá ter dois modos: Visualização e Edição. ✅
________________________________________________________________________________

No modo de visualização o card terá um cabeçalho com seu título, o conteúdo e 4 botões. ✅  (fiz diferente como explicado anteriormente mas a feat foi entregue)
________________________________________________________________________________

O conteudo do card pode ser markdown, utilize uma biblioteca para renderizá-lo no modo de visualização (recomendamos uma combinação de dompurify e marked). Lembre-se de estilizar o html resultante do parse do markdown... [Se quiser usar highlight para campos de código no markdown será um diferencial]. ❌
________________________________________________________________________________

Um dos botões do card deverá excluí-lo (persistindo pela API), outro colocá-lo em modo de edição. ✅

________________________________________________________________________________
Os dois outros botões devem mudar o card para a lista anterior (se houver) ou para a lista seguinte (se houver). A decisão de desabilitar, esconder ou apenas não gerar o evento desses botões quando não houver a proxima lista ou a anterior é sua.
 ✅ (fiz diferente como explicado anteriormente mas a feat foi entregue)
________________________________________________________________________________
No modo de edição, o card conterá um input para o titulo, um textarea para o conteudo e dois botões.✅
________________________________________________________________________________

No modo de edição, um dos botões cancela a edição, quando precionado os campos devem ser resetados para o valor atual e voltar o card ao modo de visualização. ✅

________________________________________________________________________________
O outro botão salva o card, persistindo as informações pela API. Também volta ao modo de visualização em seguida. ✅

________________________________________________________________________________
Toda decisão de visual, de UI e UX é sua. Apenas utilize uma única tela. ✅
________________________________________________________________________________

Se estiver usando REACT priorize componentes funcionais e hooks. ✅

________________________________________________________________________________
O projeto deve ser colocado em um repositório GITHUB ou equivalente, estar público, e conter um readme.md que explique em detalhes qualquer comando ou configuração necessária para fazer o projeto rodar. ✅

________________________________________________________________________________
A entrega será apenas a URL para clonarmos o repositório. ✅

#### Diferenciais 

Qualidade visual levando em conta práticas de UI e UX será considerado um diferencial. Bem como a instalação e bom uso de bibliotecas como styled-components e react-icons ou seus equivalentes para Angular se aplicável. ✅
________________________________________________________________________________
Arquiteturas que separem responsabilidades✅, de baixo acoplamento e alta-coesão são preferíveis, sobretudo usando dependências injetadas, que permitam maior facilidade para testes unitários e de integração. ❌
________________________________________________________________________________
Avaliaremos se o código é limpo (com boa nomenclatura de classes, variáveis, métodos e funções) e dividido em arquivos bem nomeados, de forma coesa e de acordo com boas práticas. Bem como práticas básicas como tratamento de erros. ✅
________________________________________________________________________________
Desacoplar e testar os componentes e serviços com testes unitários será considerado um diferencial.  ❌
________________________________________________________________________________
O uso de typescript (se não for obrigatório) acompanhado das devidas configurações e tipagens bem feitas, bem como uso de técnicas de abstração usando interfaces (especialmente da lógica de persistência) serão consideradas um deferencial. ✅
________________________________________________________________________________
O uso de Linter será considerado um diferencial. ❌
________________________________________________________________________________
A criação de um docker-compose e de dockerfiles que ao rodar docker-compose up subam o sistema por completo (front e back) será considerado um diferencial. ❌
________________________________________________________________________________
Entregou incompleto, teve dificuldade com algo, ou fez algo meio esquisito para simplificar alguma coisa que não estava conseguindo fazer? Deixe uma observação com a justificativa no readme.md para nós... ✅


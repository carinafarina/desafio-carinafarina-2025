
# O DESAFIO

Olá! Você foi contratado para ajudar na organização de um abrigo de animais.
Sua missão será encontrar pessoas aptas a levar os animais para casa.


## REGRAS PARA REUNIR PESSOA COM ANIMAIS
1. O animal vai para a pessoa que mostrar todos seus brinquedos favoritos na ordem desejada
2. Uma pessoa pode intercalar brinquedos que o animal queira ou não, desde que estejam na ordem desejada
3. Gatos não dividem seus brinquedos
4. Se ambas as pessoas tiverem condições de adoção, ninguém fica com o animal (tadinho)
5. Uma pessoa não pode levar mais de três animais para casa
6. Loco não se importa com a ordem dos seus brinquedos desde que tenha outro animal como companhia


## ANIMAIS

- Rex	cão	RATO, BOLA
- Mimi	gato	BOLA, LASER
- Fofo	gato	BOLA, RATO, LASER
- Zero	gato	RATO, BOLA
- Bola	cão	CAIXA, NOVELO
- Bebe	cão	LASER, RATO, BOLA
- Loco	jabuti	SKATE, RATO







## ENTRADAS E SAÍDAS
1. O programa deve receber três parâmetros de texto: os brinquedos da primeira pessoa, os da segunda pessoa e a ordem em que os animais deve ser considerados
2. Cada um desses parâmetros deve conter os itens separados por vírgula
3. O programa deve retornar uma estrutura contendo a lista em ordem alfabética dos animais e com quem ficaram ou a mensagem de erro, se houver
4. O formato de saída deve ser "nome animal - pessoa número" ou "nome animal - abrigo"
5. Caso animal seja inválido ou duplicado, apresentar erro "Animal inválido"
6. Caso brinquedo seja inválido ou duplicado, apresentar erro "Brinquedo inválido"

## EXEMPLOS
Entrada para um caso válido

```javascript
'RATO,BOLA','RATO,NOVELO', 'Rex,Fofo'
```

Saída

```javascript
{
  lista: ['Fofo - abrigo', 'Rex - pessoa 1']
}
```

Entrada para um caso inválido

```javascript
'CAIXA,RATO','RATO,BOLA', 'Lulu'
```
Saída

```javascript
{
  erro: 'Animal inválido'
}
```
O CÓDIGO

Você está recebendo uma estrutura básica para desenvolver a lógica do desafio. O arquivo principal está localizado dentro da pasta ```src``` e se chama ```abrigo-animais.js```. Você pode desenvolver a sua lógica criando outros arquivos, métodos e até mesmo outras classes, porém o resultado deve poder ser obtido através do método ```encontraPessoas.```

ALERTA:

É importante que essa estrutura básica não seja alterada, pois as etapas automáticas da nossa validação dependem disso. Conseguir executar os passos descritos mais adiante na seção ```VALIDANDO A SOLUÇÃO``` também ajudará você a verificar que seu código segue a estrutura definida.

Exemplo de chamada

```javascript
new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');

```
INSTALANDO E RODANDO NA SUA MÁQUINA

1. Instalar o Node 
2. Instalar dependencias do projeto com o seguinte comando:
```
npm install
```

VALIDANDO A SOLUÇÃO

Junto com a estrutura básica você está recebendo alguns cenários de testes no arquivo ```abrigo-animais.test.js``` para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução.
Para testar sua solução com os cenários existentes ou novos, rode o seguinte comando:
```
npm test
```
Para saber mais consulte a Documentação do Jest .

VALIDANDO A ENTREGA

Para garantir que seu desafio vai ser considerado entregue, revise os seguintes pontos:

GIT

O repositório deve ser público e ter o nome e branch indicados na seção ```ENTREGANDO O DESAFIO.```

Para verificar que o repositório é público, deslogue-se do github e tente ver o código. Se conseguir, nós também conseguimos! Lembrando que vamos usar o link para o usuário informado durante o cadastro na Gupy. Veja como alterar a visibilidade .

CÓDIGO

A solução deve ser entregue em javascript e a estrutura de pastas e arquivos deve seguir o indicado na seção ```O CÓDIGO.```

O export da classe deve ser mantido da seguinte maneira para compatibilidade com o arquivo de testes:

```
export { AbrigoAnimais as AbrigoAnimais };
```

Se todos os passos forem seguidos corretamente, você terá um repositório como o da figura abaixo (lembrando que é permitido criar mais arquivos), onde seuUsername é o seu usuário do GitHub, que você informou no questionário da Gupy.
<img width="500" height="642" alt="image" src="https://github.com/user-attachments/assets/d59da1ad-04ee-4797-944a-98b28c305d42" />

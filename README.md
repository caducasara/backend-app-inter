
---
DEPENDENCIAS NECESSÁRIAS:

Ao clonar e abrir o projeto em sua maquina, rode o comando yarn ou npm install, para instalar as dependencias do projeto.

Segue a lista de dependencias utilizadas caso queira instalar separadamente:

-Express
-typescript -D
-ts-node -D 
-@types/express -D
-@types/node -D
-nodemon -D

---

RECURSOS DISPONIVEIS NA API:


- Usuário
 [ ] Cadastrar novo usuário
 [ ] Efeturar login e retornar token de acesso

- PIX
 [ ] Efetuar solicitação de PIX
 [ ] Receber PIX
 
 Regras: 
  - quando receber um pix, salvar na tabela de transação

---

RODANDO O SERVIDOR NODE:

- Antes de rodar os comandos necessarios para iniciar o servidor, certifique-se de que você tem o Docker instalado na sua maquina.
- Com o docker instalado e com o comando docker ja disponivel no seu terminal, vamos aos comandos.

- Primeiro entre com o seu terminal na pasta onde esta o projeto;
- Rode os comandos nesta sequancia:

 docker-compose up -d (pode ser executado sem "-d" caso preferir);
 
 yarn start:dev ou npm start:dev;
 
Pronto! Seu servidor ja está sendo executado :D

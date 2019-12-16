# Qzela Challenge

O objetivo desse teste é criar um aplicativo que mostre no mapa 5 pin centralizados que ao clicar apareça os dados do pin

## Inicializando o aplicativo

Clone o projeto do repositório [challengeQzela](https://github.com/Rogerio3001/challengeQzela) e entre na pasta [appforqzela](https://github.com/Rogerio3001/challengeQzela/tree/master/appforqzela).

Para iniciar o projeto, tenha instalado o [node/npm](https://nodejs.org/en/download/package-manager/) e o ambiente montado do [react native](https://facebook.github.io/react-native/).

para instalar o node siga o passo a passo contido no [site](https://nodejs.org/en/download/package-manager/).

para configurar o ambiente do react native [click aqui](https://medium.com/swlh/how-to-setup-your-development-environment-using-react-native-on-windows-768a14ff8aec)

Acesse a pasta appforqzela do projeto e execute o seguinte comando.

```bash
npm i 
```
copie o arquivo build.gradle contido na raiz do projeto e insira no caminho ".../node_modules/react-native-maps/lib/android/"

Caso esteja usando um celular físico altere o arquivo "src/common.js" e insira o ip do host da API, do contrario insira o localhost
``` node
//const Api = 'SEU IP'
const Api = 'http://192.168.0.10:3000'
```

```bash
react-native run-android
```

## Inicializando a API
Clone o projeto do repositório [challengeQzela](https://github.com/Rogerio3001/challengeQzela) e entre na pasta [appforqzela-backend](https://github.com/Rogerio3001/challengeQzela/tree/master/appforqzela-backend).

Para iniciar o projeto, tenha instalado o [node/npm](https://nodejs.org/en/download/package-manager/)

Para instalar o node siga o passo a passo contido no [site](https://nodejs.org/en/download/package-manager/).

Acesse a pasta appforqzela-backend do projeto e execute o seguinte comando.

```bash
npm i 
npm start
```
Obs: É necessário acesso a internet no host da API, já que a mesma usa um banco on-line

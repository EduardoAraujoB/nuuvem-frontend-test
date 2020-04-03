# Overview

That's a project from a challenge made by nuuvem, and is a front-end of a search system, the api used to do a search is the [Chuck Norris Api](https://api.chucknorris.io/)

---

## Sumary

- [ How to setup ](#how-to-setup)
- [ Scripts ](#scripts)
- [ Code Linters ](#code-linters)
- [ State Management ](#state-management)
- [ Debug ](#debug)
- [ Tests ](#tests)
- [ Libraries ]()
- [ Screenshots ]()

---

## How to Setup

First download the aplicattion ( you can skip that if you already have the code )

```
git clone https://github.com/EduardoAraujoB/nuuvem-frontend-test.git
```

After that you can install the dependencies by executing the following command in the root folder of the project

```
npm install
```

or with yarn

```
yarn
```

Now you have 2 options to start the project:

1. Start the apllication in development mode
2. Generate a production build

We will star the aplicattion in devolopment mode, but you can see more about it in the [ scripts ](#scripts) session, so lets do that!

```
npm run start
```

or with yarn

```
yarn start
```

Now you can open your browser on http://localhost:3000 and the aplicattion will be running, have a good time!

---

## Scripts

There is four types of scritpts on the project

- `start`: Run the aplicattion on development mode, so you can edit files on the aplicattion and the server will re-start automatically. **note**: This script isn't recommend for **production**

- `test`: Run the tests of the aplicattion in interative mode
- `build`: Generate a production build of the aplicattion, this command just build the aplicattion, to run it will need the **node**, see more here [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- `eject`: If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. **note**: That's a one way operation, be careful about that

---

## Code Linters

This project use two different code linters and a another
extension to the IDE, that is...

### Eslint

Or EcmaScriptLint, is the linter responsible to check problems in the syntax and return errors, your configurations are shared and used by others linters

### Prettier

This linter is used only for check the **code style**, they don't will check the syntax, just find a way to do the code more **legible** and have a integration with **eslint**

### Editor Config

That isn't a linter, just a extension to share some configs between other editors, like the format of the end of lines, identation with spaces or tabs, etc...

---

## State Management

Ok, lets talk about state management... <br>
This Project use React as a library to management the state, but the React has some limitations in how to management a state beteween many components, so to improve that, we have the Redux!

### Why Redux?

Redux works with a different architecture called flux architecture, that means of your project will have a global state with a method to store and manage that value, called **reducer**, an **action** to change that **reducer**, and a **dispatcher** to dispatch an action.<br>
<br>
So this help so much in organize components because your component don't will need to carefull about carry information about your fathers components, with Redux your components will keep a single responsability, avoind unecessary logics to share information.

### A little bit about Sagas

Ok, the "problem" is that Redux works at a syncronous way, that means of your can't do an assynchronous operation, like a call to an API, in the Redux, for this you will use a saga, that's a middleware applied on Redux to intercepted request and dispatch actions. Not only for that, **Sagas** help so much to controll **side effects** on aplicattions.

---

## Debug

To debug the State, Actions, Reducers, Sagas, etc... I use a toll called Reactotron, this is a great tool and have Integration with Redux, Mobx and React Native, I really recommended it, you can see more about [here](https://github.com/infinitered/reactotron)

---

## Tests

Now, lets explain what is used to test the aplicattion

### Why Jest?

Jest is used beacause it have a good integration with React and others tests librabries, have a great performance and a nice documentation.

### Testing library

This is the library used to manipule React Componets, manipulate the DOM and fire events in the tests, have other alternatives like the Enzyme, but I like the testing Library.

---

## Libraries

Here I will list others cool libraries that is used and don't is cited previously.

### Styled Components

This library always to wirte `CSS` inside the `JS` and is used with React, so you can use it like a **CSS pre-processor**, but not only that, how does it use **React**, you can do many things, like pass propertiers and change styles based on it, see more [here](https://github.com/styled-components/styled-components)

### Axios

This library is used to do **HTTP Request** with a easy way, it's easy do use, easy to setup and configure **querys**, **headers**, etc... Is more efficient than **fetch**.

---

## Screenshots

![Screenshot 1](https://user-images.githubusercontent.com/42449213/78402027-4933cb80-75d0-11ea-9306-dbe957efe22a.png)
![Screenshot 2](https://user-images.githubusercontent.com/42449213/78402118-6ec0d500-75d0-11ea-94d9-91bcfc8f3e5e.png)
![Screenshot 3](https://user-images.githubusercontent.com/42449213/78402164-8435ff00-75d0-11ea-9598-91764bf078eb.png)

### Thanks

Thank you nuuvem for give me this challenge ~~please contract me~~, that's all, folks


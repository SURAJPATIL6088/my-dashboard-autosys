# My Dahsboard App

## Project Overview :

### Dashboard Application Overview
#### Project Description
The dashboard application is designed to provide users with an intuitive and responsive interface for visualizing temperature related data. It includes charts, custom components, and widgets that display relevant numbers. The application adheres to best practices, utilizes React hooks, and ensures code quality.
<br>
#### Core Features
1. Dynamic Layout:<br>
The application adapts seamlessly to different screen sizes. <br>
A navigation bar facilitates easy access to various dashboard sections. <br>
2. Charts: <br>
Two interactive charts are integrated to visualize data trends.
<br>
3. Custom Components: <br>
A custom component is developed to display the charts elegantly.


## Project Setup :
#### React + Vite Setup : 

1. `npm create vite@latest`
2. `npm install`
3. `cd my-dashboard-app`
4. `npm run dev`

#### Tailwind Installation in React + Vite : 
1. Install Tailwind CSS. <br>
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
2. Configure your template paths <br>
***file : tailwind.config.js***
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3. Add the Tailwind directives to your CSS. <br>
***file : index.css***
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4. Start your build process. <br>

#### React router dom :
```
npm i react-router-dom
```

#### E Charts : 
```
npm install echarts
```


## Design decisions and technologies used :
#### A. React:
1. React is a popular JavaScript library for building user interfaces. <br>
2. It allows you to create reusable components, manage state efficiently, and build dynamic web applications. <br>
3. Component-Based Architecture: I’ve organized the widgets and layout components into separate files (e.g., NumberWidget, PercentageWidget, etc.). This component-based approach makes the code modular and maintainable.  <br>
4. Virtual DOM: React’s virtual DOM efficiently updates only the necessary parts of the actual DOM, improving performance.  <br>
<br>

B. Tailwind CSS: <br>
1. Utility-First CSS Framework: Tailwind CSS provides a set of utility classes that you can apply directly to HTML elements. It allows you to rapidly style your components without writing custom CSS.<br>
2. Responsive Design: I’ve used Tailwind’s responsive classes (e.g., sm:, md:, lg:) to make the widgets adapt to different screen sizes.



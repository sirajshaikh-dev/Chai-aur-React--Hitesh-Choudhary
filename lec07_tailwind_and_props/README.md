# Lec07; Tailwind CSS and Props in React

This project is a practice implementation of Tailwind CSS and props usage in a React application. It is based on a tutorial from the [Chai aur Code YouTube channel](https://www.youtube.com/watch?v=bB6707XzCNc&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=7).

## Overview

The project demonstrates:

- **Setting Up Tailwind CSS** in a React project.
- **Creating Reusable Components** using props.
- **Passing and Using Props** to customize component data.
- **Styling Components** dynamically with Tailwind classes.

## Installation

### Prerequisites

- Node.js and npm installed on your system.
- Basic understanding of React and Tailwind CSS.

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/tailwind-props-practice.git
    cd tailwind-props-practice
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and go to `http://localhost:3000` to view the app.

## Code Structure

### `App.js`

```jsx
import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-3xl text-red-400 font-bold underline bg-green-300 rounded-2xl'>
        Tailwind and Props
      </h1>
      <Card
        username="Sundar"
        btnText="Visit"
        imgUrl="https://img-cdn.inc.com/image/upload/w_600,ar_16:9,c_fill,g_auto,q_auto:best/images/panoramic/sundar-pichai-google-inc-1493186230_538103_o987ze.webp"
      />
      <Card username="Natalie Paisley" />
    </>
  );
}
export default App;
```
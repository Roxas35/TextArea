import React from 'react';
import { createRoot } from 'react-dom/client';
import { LimitedTextarea } from './Pages/textarea';


const root = document.querySelector('#root');
const app = createRoot(root);

app.render(
    <React.StrictMode>
        <LimitedTextarea limit={148} value=""/>
    </React.StrictMode>
)
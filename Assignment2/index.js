import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { store } from './App/Store';
import { Provider } from 'react-redux';
import LoginForm from './Assignment/LoginForm';
import AuthenticationApp from './Assignment/AuthenticationFlow/AuthenticationApp';
import DynamicApp from './Assignment/DynamicForm/DynamicApp';
import SortableListApp from './Assignment/SortableList/SortableListApp';
import { SortableList } from './Assignment/SortableList/SortableList';
import WebSocketApp1 from './Assignment/WebSocket/WebSocketApp1';
import WebSocketApp from './Assignment/WebSocket/WebSocketApp';
import LazyLoadedComponent from './Assignment/LazyLoadedComponent/LazyLoadedComponent';
import LazyApp from './Assignment/LazyLoadedComponent/LazyApp';
import I18nApp from './Assignment/Internationalization/i18nApp';
import FileUpload from './Assignment/FileUpload';
import WebSocketChatApp from './Assignment/WebSocketIntegration/WebSocketChatApp';
import App from './App';
import TaskForm from './Assignment2/TaskForm';
import Counter from './Assignment/Redux/ReduxApp';
import TaskApp from './Assignment2/TaskApp';
import ContextProvider from './Context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
{/*<Provider store={store}>
  <Counter/>
</Provider>*/}

{/*<BrowserRouter>
  <App12/>
</BrowserRouter>*/}

{/*<React.StrictMode>
    <App/>
</React.StrictMode>*/}

<ContextProvider>
  <TaskForm/>
</ContextProvider>
  </>
);


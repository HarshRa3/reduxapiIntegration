import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import axios from './Redux/axios';
// axios.interceptors.request.use(config=>{
//     console.log(config);
//   })
//   axios.interceptors.response.use(response=>{
//     console.log(response);
//     return response
//   })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <App />
    </Provider>
);


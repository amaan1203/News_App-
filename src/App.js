import Header from './components/Header';
import { useEffect, useState } from 'react';
import ArticleContainer from './components/ArticleContainer';
import Spinner from './components/Spinner';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  // console.log(countryCode);
  const [loading, setLoading] = useState(false);
  // const apiUrl = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=eced018eb5d14afc9b55a85e4e1ab25b`;
  const [Articles, setArticles] = useState([]);
  const [keyword, setkeyword] = useState('India');


  return (
    <div className="flex flex-col h-[100vh] mx-auto items-center">
      <div className='mt-28'><Header articles={Articles} loading={loading} setLoading={setLoading}  setArticles={setArticles} keyword={keyword} setkeyword={setkeyword} /></div>
        <div>
          <h2 className='text-5xl w-full text-center'>Top Headlines of <span className=' font-extrabold underline' >{keyword}</span></h2>
        </div>
        <div className=' mx-auto flex   ml-16  items-center '>
          {
            loading ?(<Spinner />) : ( <ArticleContainer articles={Articles} loading={loading} setLoading={setLoading} />)
          }
         
      </div>
    </div>
  );
}

export default App;

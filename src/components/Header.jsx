import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { UseEffect } from 'react';
import { useState } from 'react';

const Header = (props) => {
  const { keyword, setkeyword, loading, setLoading, setArticles } = props;
  const apiUrl2 = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=b170ab32ed0a434099b80cf4b286ff98`;


  useEffect(() => {
    setkeyword('India');
    fetchData();
  }, [])


  useEffect(() => {
    fetchData();
  }, [keyword]);

  const fetchData = async () => {

    try {
      setLoading(true);
      const output = await fetch(apiUrl2);
      const data = await output.json();
      setArticles(data.articles);
    }

    catch {
      console.log('error in retrieving the data from keyword search');
    }

    setLoading(false);


  }


  function inputChangeHandler(event) {
    setkeyword(event.target.value);

  }

  function clickHandler() {

    fetchData(apiUrl2)


  }

    function HomeClickHandler() {

    setkeyword('India');

  }

  function EntertainmentClickHandler(){
    setkeyword('Entertainment');
  }

   function WorldClickHandler() {

    setkeyword('World');

  }

  function EducationClickHandler() {

    setkeyword('Education');
    fetchData();
  }

  function SportsClickHandler() {

    setkeyword('Sports');
    fetchData();
  }



  return (
    <div>


      <nav class=" header bg-[rgb(156, 0, 29)]  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">

          <h1  onClick={HomeClickHandler} className=' hover:cursor-pointer  font-semibold text-5xl mr-6'>Up-2-Date</h1>


          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <div class='Search-Bar max-w-md  mr-0 '>
              <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full   w-20  text-gray-300">
                  <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <input
                  class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  onChange={inputChangeHandler}
                  value={keyword}

                  placeholder="Search something.." />
              </div>
            </div>

          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex  text-md flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <button onClick={EntertainmentClickHandler} class=" hover:cursor-pointer  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover: md:p-0  dark:text-white dark:hover:bg-gray-700  hover:border-b-2 hover:border-white transition duration-300 ease-in-out  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Entertainment</button>
              </li>
              <li>
                <button onClick={WorldClickHandler}class=" hover:cursor-pointer  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover: md:p-0  dark:text-white dark:hover:bg-gray-700  hover:border-b-2 hover:border-white transition duration-300 ease-in-out  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">World</button>
              </li>
              <li>
                <button onClick={EducationClickHandler} class=" hover:cursor-pointer  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover: md:p-0  dark:text-white dark:hover:bg-gray-700  hover:border-b-2 hover:border-white transition duration-300 ease-in-out  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Education</button>
              </li>
              <li>
                <button onClick={SportsClickHandler} class=" hover:cursor-pointer  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover: md:p-0  dark:text-white dark:hover:bg-gray-700  hover:border-b-2 hover:border-white transition duration-300 ease-in-out  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sports</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>




    </div>
  );
};

export default Header;

import { useEffect, useState } from "react"

function SearchBar(props)
{
    const [amount, setAmount] = useState(15)
    const apiUrl = 'https://pixabay.com/api'
    const apiKey = '27872230-e96feb883c7d702deeb21dc30'
    const [images, setImages] = useState([])

    const onTextChange = async (e) => {
        if (e.target.value === '')
            setImages([])
        else {
            const resp = await fetch(`${apiUrl}/?key=${apiKey}&q=${e.target.value}&image_type=photo&per_page=${amount}&safesearch=true`, {
                method: "GET"
            })
                .then(response => {return response.json()})
                .catch(err => {
                    console.log(err)
                })
                
            setImages(resp.hits)
        }
    }

    const renderImages = (images) => {
        return images.map((image) => {
            return (
                <div className="flex items-center justify-center" style={{width: '33.33%'}}>
                    <img className='' key={image.id} src={image.webformatURL}></img>
                </div>)
        })
    }
	return (
        <>
          <div className="flex flex-col">
              <form className="p-20">
                  <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                          </svg>
                      </div>

                      <input type="search"  
                          id="default-search"
                          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search images in pixabay..."
                          onChange={onTextChange}
                          required
                      />
                  </div>
              </form>

                <div className="flex flex-wrap">
                  {renderImages(images)}
                </div>
          </div>
    </>)
}

export default SearchBar
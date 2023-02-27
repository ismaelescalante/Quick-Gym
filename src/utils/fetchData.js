export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'c7b9cc3726msha3258e4f8ebcb52p1df72djsnf1b22494cdae',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c7b9cc3726msha3258e4f8ebcb52p1df72djsnf1b22494cdae',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };
  



export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}
/* when user types in input box (addEventListener keyup)
    get what they typed
    make a call to the search api with the query string
    When the results come back
        foreach result generate html and add to our HTML list

    */
import { foodKey } from './keys.js';
const baseUrl = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=";
   function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  }

async function getSearchResults(query) {
    const options = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          generalSearchInput: query,
          includeDataTypes: {
            "Survey (FNDDS)": true,
            Foundation: true,
            Branded: false
          },
          requireAllWords: "true",
          ingredients: "bacon"
        })
      };
    const results = await fetch(baseUrl+foodKey, options).then(convertToJson);
    return results
}

function renderSearchResults(results) {
    const resultsListElement = document.getElementById('searchResults');
    resultsListElement.innerHTML = results.map((item) => `<li>${item.description}</li>`).join('');
}

   export async function search(ev) {
       const query = ev.target.value;
        console.log(query);
        if(query.length > 2) {
        const results = await getSearchResults(query);
        console.log(results);
        renderSearchResults(results.foods);
        }
        }

   
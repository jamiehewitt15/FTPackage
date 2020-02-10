const fetch = require('node-fetch');

const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
    ];



const getURLdata = async url => {
    try {
      const response = await fetch(url)
        .then(checkStatus);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("Sorry there was an error. Please check the URL you are requesting from", error);
    }
  };



function dataFromURLs(urls){ 
    urls.map(getURLdata) 
};

dataFromURLs(urls);
  
  
function checkStatus(res) {
    if (res.ok) { // res.status >= 200 && res.status < 300
        return res;
    } else {
        throw new Error(res.statusText);
    }
}


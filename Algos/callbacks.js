async function fetch(ur,callback)
{
    
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
    const req = new XMLHttpRequest();
    req.addEventListener("load", xhrSuccess);

    const xhrSuccess = (event) =>{
        callback();
    }

}

fetch("asajf",()=>{
    console.log('callback is called');
});
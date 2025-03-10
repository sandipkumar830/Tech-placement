let btn = document.querySelector("button");
btn.addEventListener("click", async() => {
    let  quote = await getQuotes();
    // console.log(quote);

    let p = document.querySelector("#quote");
    p.innerText = quote;
})


let url = "https://quotes-api-self.vercel.app/quote";

async function getQuotes() {
    try{
        let res = await axios.get(url);
       
        return (res.data.quote);

    }catch(e){
        console.log("error" , e);
        return "NO QUOTE FOUND";
    }
}
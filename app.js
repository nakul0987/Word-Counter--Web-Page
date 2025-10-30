let word=document.querySelector('.desc');
let result=document.querySelector('.result');
let btnCount=document.querySelector('.counter');
let btnDone=document.querySelector(".done");
let text=word.value;


btnDone.addEventListener('click',()=>{
    console.log(word.value);
});

btnCount.addEventListener('click',()=>{
    let text=word.value.trim();
    if(text===" "){
        result.innerHTML=0;
        console.log("Count is 0.");
        return;
    }

    let words=text.split(/\s+/);
    let count= words.length;
    result.innerHTML=count;
    console.log("Count is ",count);
})





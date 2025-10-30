let word=document.querySelector('.desc');
let text=word.textContent;
let result=document.querySelector('.result');
let btn=document.querySelector('button');
console.log(word.textContent);
let count=0;
for(let i=0;i<text.length;i++){
    if(text[i]==" "){
        count++;
    }
}

console.log("Count is ",count+1);

btn.addEventListener('click',()=>{
    result.innerHTML=count+1;
})


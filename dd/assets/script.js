"use strict";

let inp=document.querySelector('input');
 let img=document.querySelector('.text');

 inp.addEventListener('change',(e)=>{
     let readf=new FileReader();

     readf.readAsDataURL(e.target.files[0]);

     readf.addEventListener('load',()=>{
         let image=document.createElement('img');
         image.scr=readf.result;
         img.append(image);
     });
 });

 img.addEventListener('click', (e)=>{
     console.log(e.target);
 });
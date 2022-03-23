let Skills = document.querySelector(".Skills")
let EffectSkills = document.querySelector(".Effect__Skills")
let Credentials = document.querySelector(".Credentials")
let EffectsCredentials = document.querySelector(".Effect__Credentials")
let Facts = document.querySelector(".Facts")
let EffectsFacts = document.querySelector(".Effect__Facts")
let Links = document.querySelector(".Links")

console.log(EffectSkills);

Skills.addEventListener("mouseover",function(event){
    EffectSkills.classList.add("Effect__Skills--Toggled")
})

Skills.addEventListener("mouseleave",function(event){
    EffectSkills.classList.remove("Effect__Skills--Toggled")
})

Credentials.addEventListener("mouseover",function(event){
    EffectsCredentials.classList.add("Effect__Credentials--Toggled")
})

Credentials.addEventListener("mouseleave",function(event){
    EffectsCredentials.classList.remove("Effect__Credentials--Toggled")
})

Facts.addEventListener("mouseover",function(event){
    EffectsFacts.classList.add("Effect__Facts--Toggled")
})

Facts.addEventListener("mouseleave",function(event){
    EffectsFacts.classList.remove("Effect__Facts--Toggled")
})

console.log(Links.querySelector("button"));

Links.querySelector("button").addEventListener("click",function(event){
    if (!document.querySelector(".Email").classList.contains("Email--Toggled")){
       navigator.clipboard.writeText("nikolai@raahauge.eu");
        document.querySelector(".Email").classList.add("Email--Toggled")
        setTimeout(function(){ document.querySelector(".Email").classList.remove("Email--Toggled");},3000)
    }
})
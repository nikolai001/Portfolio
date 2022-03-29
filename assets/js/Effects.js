const Skills = document.querySelector(".Skills")
const EffectSkills = document.querySelector(".Effect__Skills")
const Credentials = document.querySelector(".Credentials")
const EffectsCredentials = document.querySelector(".Effect__Credentials")
const Facts = document.querySelector(".Facts")
const EffectsFacts = document.querySelector(".Effect__Facts")
const Links = document.querySelector(".Links")
const SkillsButton = document.querySelector(".Skills__Button")
const FactsButton = document.querySelector(".Facts__Button")
const Unfolded = document.querySelector(".Unfolded")
const UnfoldedSkills = document.querySelector(".Unfolded__Skills")
const UnfoldedFacts = document.querySelector(".Unfolded__Facts")
const UnfoldedSkillsButton = document.querySelector(".Unfolded__Skills__Top__Button")
const UnfoldedFactsButton = document.querySelector(".Unfolded__Facts__Top__Button")

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

SkillsButton.addEventListener("click",function(){
    if (!Unfolded.classList.contains("Unfolded--Active")){
        Unfolded.classList.add("Unfolded--Active")
        UnfoldedSkills.classList.add("Unfolded__Element--Active")
        document.querySelector("body").style.overflow = "hidden"
    }
})

FactsButton.addEventListener("click",function(){
    if (!Unfolded.classList.contains("Unfolded--Active")){
        Unfolded.classList.add("Unfolded--Active")
        UnfoldedFacts.classList.add("Unfolded__Element--Active")
        document.querySelector("body").style.overflow = "hidden"
    }
})

UnfoldedSkillsButton.addEventListener("click",function(){
    Unfolded.classList.remove("Unfolded--Active")
    UnfoldedSkills.classList.remove("Unfolded__Element--Active")
    document.querySelector("body").style.overflow = "auto"
})

UnfoldedFactsButton.addEventListener("click",function(){
    Unfolded.classList.remove("Unfolded--Active")
    UnfoldedFacts.classList.remove("Unfolded__Element--Active")
    document.querySelector("body").style.overflow = "auto"
})
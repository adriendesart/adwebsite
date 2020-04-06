export const getBrowserLanguage =()=>{
    var lang = navigator.language || navigator.browserLanguage;
    var language = "";
    
    if(lang.includes("fr")){
       language = "fr";
    } else {
       language = "en";
    }
    return language;
}
function my_Dictionary()    {       //  
    var Nick = {                    //  
        Species:"human",            //  This sction is my KVP
        Color:"white dude",         //  
        Age:31,                     //  
        Sound:"AHHHHHHHHHHHH!",     //  
    };                                
    delete Nick.Sound;              //  This section deletes the Nick.Sound before it can be displayed
    document.getElementById("Dictionary").innerHTML = Nick.Sound;       // This section attempts to display the Nick.Sound from the KVP
}
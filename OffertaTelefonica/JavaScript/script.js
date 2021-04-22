function inizializzaSelection()
{
    //inserimento opzioni sesso
    var sesso=["--- Sesso --- ","Maschio","Femmina"];
    for(var i=0;i<3;i++)
    {
        var s=document.createElement("option");
        s.value=sesso[i];
        s.innerHTML=sesso[i];
        document.getElementById("sesso").appendChild(s);
    }
    //inserimento opzioni occhi
    var occhi=["--- Occhi --- ","Nero","Marroni","Verde","Azzurro"];
    for(var i=0;i<5;i++)
    {
        var o=document.createElement("option");
        o.value=occhi[i];
        o.innerHTML=occhi[i];
        document.getElementById("occhi").appendChild(o);
    }
    //inserimento opzioni provincia
    var residenza=["--- Provincia --- ","BG","BS","CO","CR","LC","LO","MN","MI","MB","PV","SO","VA"];
    for(var i=0;i<13;i++)
    {
        var p=document.createElement("option");
        p.value=residenza[i];
        p.innerHTML=residenza[i];
        document.getElementById("residenza").appendChild(p);
    }
}
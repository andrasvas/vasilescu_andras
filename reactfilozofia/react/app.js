const btn = document.createElement("button"); //gomb elem létrehozása


//rakattintunk a gombra es kuldd egy ertesitest a weboldalrol ami jelzi azt hogy ez egy nativ kod
btn.onclick = function(){
    alert("Ez egy nativ kód")
};

//beleirunk a gombnak a szovegebe
btn.innerHTML = "Nativ gomb";

//hozzadjuk a nativ-button-container tartalmahoz a gombot
document.getElementById("nativ-button-container").appendChild(btn);

//react-os megoldas

const gomb = React.createElement("button",{
    onClick: function(){
        alert("Ez egy react kód");
    }
},"React gomb")

ReactDOM.render(gomb,document.getElementById("react-button-container"))
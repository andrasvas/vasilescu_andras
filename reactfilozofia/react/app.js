btn.onClick = function(){
    alert("Ez egy nativ kód")
};

btn.innerHTML = "Nativ gomb";

document.getElementById("nativ-button-container").appendChild(btn);

const gomb = React.createElement("button",{
    onClick: function(){
        alert("Ez egy react kód");
    }
},"React gomb")

ReactDOM.render(gomb,document.getElementById("react-button-container"))
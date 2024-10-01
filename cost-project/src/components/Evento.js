function Evento({ numero }) {
    function alerta() {
    alert(`Você clicou? ${numero}`);
}
return (
        <div>
            <button onClick={alerta}>Clique aqui!</button>
        </div>
    )
}



export default Evento
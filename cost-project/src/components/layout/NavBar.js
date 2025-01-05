import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
        <div>
            <ul>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contato</Link>
                <Link to={'/company'}>Empresa</Link>
                <Link to={'/newproject'}>Novo Projeto</Link>
            </ul>
        </div>
        </>
    )
}

export default NavBar
import './footer.css';

const Footer = ({ backgroundColor }) => {
    return (
        <footer style={{ backgroundColor }} className="footer">
            <p id="desenv">Desenvolvido por:</p>
            <p id="nomeDesenv">Gustavo Oki</p>
        </footer>
    )
}

export default Footer;
import './info.css'

const Info = () => {
    return (
        <>
            <div className="info">
                <p>Work:</p>
                <input type="time" id="work-time" step="1"/>
            </div>

            <div className="info">
                <p>Relax:</p>
                <input type="time" id="relax-time" step="1"/>
            </div>
        </>
    )
}

export default Info;
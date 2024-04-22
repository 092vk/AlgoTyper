const Game = ({onGame})=>{
    return (
        <div className="home">
            <div className="title">
                TYPING Master
            </div>
            <div className="author">
                Coding & <br /> 
                Design By Vk092
            </div>

            <div className="getInfo">
                <form>

                    <label>Enter Your GitHub Id</label>
                    <input className="GitHubId"></input>
                    
                    <label>Enetr your GitHub Repo Name</label>
                    <input className="GitHubRepo"></input>

                    <label>Enter the address of Your file with respect to your Repository, for eg: if you want to export test.txt inside your repo enter "text.txt" but if you want to get test.txt inside unitTest folder enter : "unitTest/test.txt"</label>
                    <input type="text" className="Address"></input>


                </form>
            </div>

            <button className="btnPlay" onClick={()=>onGame('playGame') }>CLICK ME TO PLAY
            </button>

        </div>
    )
}

export default Game;

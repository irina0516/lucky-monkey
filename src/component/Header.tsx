import React from "react";
import "../assets/sass/header.scss";

interface headerData {
    display : boolean [],
    menuDisplay : boolean
}

const Header = () => {
    let headerBtn = ['Membership', 'Community', 'Connect Wallet'];

    const [state, setStates] = React.useState({
		display : [true, false, false],
        menuDisplay : false
	})
    const updateStatus = (params: Partial<headerData>) => setStates({ ...state, ...params });
    
    const onHeaderClick = (index : any) => {
        let temp = state.display;
        for (let i=0 ; i<3 ; i++) {
            temp[i] = false;
        }
        temp[index] = true;
        updateStatus({display : temp});
    } 
    const onMenuClick = () => {
        updateStatus({menuDisplay : !state.menuDisplay});
    }
    return (
        <div className="header">
            <div className="big-header">
                <div>
                    {headerBtn.map((i,k) => (
                        <a key={k} href="#" onClick={()=>onHeaderClick(k)} className={state.display[k] ? 'active' : ''}>{i}</a>
                    ))}
                </div>
            </div>
            <div className="small-header relative">
                <button type="button" className="button" onClick={()=>onMenuClick()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
                <div className={state.menuDisplay ? 'dropdown show' : 'dropdown hide'}>
                    <ul>
                        {headerBtn.map((i,k) => (
                            <li key={k}>{i}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
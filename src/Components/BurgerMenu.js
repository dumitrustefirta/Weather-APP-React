import React from 'react';

export function toggleBurgerMenu() {
    return (
        <React.Fragment>
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
        </React.Fragment>
    )
}
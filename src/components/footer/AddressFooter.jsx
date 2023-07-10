import React from 'react';
import {dsnCN} from "../../hooks/helper";

function AddressFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-address' , className)} {...restProps}>
            <p>
                29 av. Victor Hugo <br/>
                13100 Aix-en-Provence<br/>
                France
            </p>
        </div>
    );
}

export default AddressFooter;
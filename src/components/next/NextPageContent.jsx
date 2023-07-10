import React from 'react';
import NextPage from "./NextPage";

function NextPageContent({...restProps}) {
    return (
        <NextPage to="/contact"  text="Contactez-nous pour un entretien !" {...restProps}>
            Nous recrutons !
        </NextPage>
    );
}

export default NextPageContent;
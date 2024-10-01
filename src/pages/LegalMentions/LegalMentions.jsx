import React from 'react';
import cvMaeva from 'var/cv.json';
import Article from 'components/Article/article';

function LegalMentions() {
    return (
        <React.Fragment>
            <h1>Mentions Légales</h1>
            <Article
                title="Informations générales"
                paragraphs={ [
                    [cvMaeva.firstName + " " + cvMaeva.lastName, 'Impasse Frédéric Faÿs, ' + cvMaeva.adress, cvMaeva.email]
                ] }
            />
        </React.Fragment>
    )
}

export default LegalMentions;

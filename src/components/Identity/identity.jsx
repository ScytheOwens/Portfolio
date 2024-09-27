import PropTypes from "prop-types";

function Identity({person}) {
    return (
        <article className='widget-identity'>
            <section className='widget-identity-info'>
                <p className='widget-identity-info-text'>Nom complet : { person.firstName + " " + person.lastName }</p>
                <p className='widget-identity-info-text'>Date de naissance : { new Date(person.birthdate).toLocaleDateString() } ({ new Date().getFullYear() - new Date(person.birthdate).getFullYear() } ans)</p>
                <p className='widget-identity-info-text'>Adresse : { person.adress }</p>
                <p className='widget-identity-info-text'>Email :  { person.email }</p>
                <p className='widget-identity-info-text'>Téléphone : { person.mobile }</p>
                <p className='widget-identity-info-text'>Permis { person.driving.license }{ person.driving.hasVehicule ? " - véhiculé" : null }</p>
            </section>
            <img className='widget-identity-media' src={ require('assets/images/' + person.photo) } alt={ 'Photo de ' + person.firstName + " " + person.lastName }/>
        </article>
    )
}

Identity.Prototypes = {
    person: PropTypes.object.isRequired
}

export default Identity;

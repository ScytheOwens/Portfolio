import PropTypes from "prop-types";
import Article from "components/Article/article";

function Card({media, title, link, date, content}) {
    return (
        <a href={ link } className='widget-card' target="_blank">
            <img className='widget-card-media' src={ require('assets/images/' + media) } alt={ 'Photo de ' + title }/>
            <section className="widget-card-content">
                <h2 className="widget-card-content-title">{ title }</h2>
                <p className="widget-card-content-timestamp">{ date }</p>
                { content.map((item, index) => 
                    <Article
                        title={ item.title }
                        paragraphs={ [item.content] }
                    />
                )}
            </section>
        </a>
    )
}

Card.Prototypes = {
    media: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string
}

export default Card;

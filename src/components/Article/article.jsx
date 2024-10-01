import PropTypes from "prop-types";

function Article({title, subtitle, date, paragraphs}) {
    return (
        <article className='widget-article'>
            <p className="widget-article-timestamp">{ date }</p>
            <h3 className="widget-article-title">{ title }</h3>
            <p className="widget-article-subtitle">{ subtitle }</p>
            { console.log(paragraphs) }
            { paragraphs.map((paragraph, index) =>
                Array.isArray(paragraph) ? 
                    <ul className="widget-article-content widget-article-list" key={ 'paragraph-' + index }>
                        { paragraph.map((item, index) =>
                            <li className="widget-article-list-item" key={ 'item-' + index }>{ item }</li>
                        )}
                    </ul> :
                <p className="widget-article-content widget-article-text">{paragraph}</p>
            )}
        </article>
    )
}

Article.Prototypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    subtitle: PropTypes.string,
    paragraphs: PropTypes.array.isRequired
}

export default Article;
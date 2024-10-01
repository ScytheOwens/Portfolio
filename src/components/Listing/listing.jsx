import PropTypes from "prop-types";

function Listing({itemList}) {
    return (
        <div className='widget-listing'>
            { itemList.map((item, index) =>
                <section className='widget-listing-item' key={"listing-item-" + index}>
                    <h3 className='widget-listing-item-title'>{ item.name }</h3>
                    <ul className='widget-listing-item-list'>
                        {
                            item.list.map((element, index) =>
                                <li className='widget-listing-item-list-element' key={"listing-item-element-" + index}>{ element }</li>
                            )
                        }
                    </ul>
                </section>
            )}
        </div>
    )
}

Listing.Prototypes = {
    itemList: PropTypes.array.isRequired
}

export default Listing;

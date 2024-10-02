import React from 'react';
import cvMaeva from 'var/cv.json';
import Article from 'components/Article/article';
import Identity from 'components/Identity/identity';
import Listing from 'components/Listing/listing';

function Cv() {
    return (
        <React.Fragment>
            <section className='widget-presentation'>
                <h1 className='widget-presentation-title'>Développeuse Web Fullstack</h1>
                <div className='widget-presentation-content'>
                    <Identity
                        person={cvMaeva}
                    />

                    <section className='widget-presentation-content-section'>
                        <h2 className='widget-presentation-content--section-title'>Formation</h2>
                        { cvMaeva.educationalBackground.map((school, index) => 
                            <Article key={ 'school-' + index }
                                date={ new Date(school.date).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) }
                                title={ school.diploma }
                                subtitle={ school.schoolName + ', ' + school.place }
                                paragraphs={ [""] }
                            />
                        ) }
                    </section>

                    <section className='widget-presentation-content-section'>
                        <h2 className='widget-presentation-content-section-title'>Expérience professionnelle</h2>
                        { cvMaeva.professionalBackground.map((experience, index) => 
                            <Article key={ 'experience-' + index }
                                date={ new Date(experience.beginOn).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) + ' - ' + new Date(experience.endOn).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) }
                                title={ experience.job + ' en ' + experience.status }
                                subtitle={ experience.company + ', ' + experience.place }
                                paragraphs={ [experience.tasks] }
                            />
                        ) }
                    </section>

                    <section className='widget-presentation-content-section'>
                        <h2 className='widget-presentation-content-section-title'>Expérience personnelle</h2>
                        { cvMaeva.personnalBackground.map((experience, index) => 
                            <Article key={ 'experience-' + index }
                                date={ experience.date }
                                title={ experience.name }
                                subtitle={ experience.organisation + ', ' + experience.place }
                                paragraphs={ [""] }
                            />
                        ) }
                    </section>

                    <section className='widget-presentation-content-section'>
                        <h2 className='widget-presentation-content-section-title'>Compétences</h2>
                        <Listing
                            itemList={cvMaeva.hardSkills}
                        />
                    </section>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Cv;

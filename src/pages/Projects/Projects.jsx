import React from 'react';
import projects from 'var/projects.json';
import Card from 'components/Card/card';

function Projects() {
    projects.sort(function (a, b) {
        return new Date(a.realisedOn).getTime() - new Date(b.realisedOn).getTime()
    }).reverse();

    return (
        <React.Fragment>
            <h1>Tous les projets</h1>
            <section className='widget-gallery'>
                { projects.map((project, index) => 
                    <Card key={ 'project-card' + index}
                        media={ project.media }
                        title={ project.name }
                        link={ project.link }
                        date={ new Date(project.realisedOn).toLocaleDateString(undefined, { month: 'long', year: 'numeric'}) }
                        content={ [
                            {
                                title: 'Missions',
                                content: project.jobs
                            },
                            {
                                title: 'Stack technique',
                                content: project.technicalEnvironment
                            }
                        ] }
                    />
                )}
            </section>
        </React.Fragment>
    )
}

export default Projects;

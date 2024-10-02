import React from 'react';
import cvMaeva from 'var/cv.json';
import projects from 'var/projects.json';
import Article from 'components/Article/article';
import Card from 'components/Card/card';
import Identity from 'components/Identity/identity';
import Listing from 'components/Listing/listing';

function displayTab(tabId) {
    const ELEMENT = document.getElementById(tabId)
    if (!ELEMENT.classList.contains('current')) {
        document.querySelectorAll('.widget-tab-window-tab').forEach(tab => {
            tab.classList.remove('current');
        });
        ELEMENT.classList.add('current');
    }
}

function Home() {
    const lastProjects = projects.sort(function (a, b) {
        return new Date(a.realisedOn).getTime() - new Date(b.realisedOn).getTime()
    }).slice(-3).reverse();

    return (
        <React.Fragment>
            <article className='widget-tab'>
                <div className='widget-tab-aside'>
                    <section className='widget-tab-aside-head'>
                        <h1 className='widget-tab-aside-head-title'>Maëva Grondin</h1>
                        <p className='widget-tab-aside-head-subtitle'>Développeuse Web<br/>Fullstack</p>
                    </section>
                    <nav className='widget-tab-aside-menu'>
                        <section className='widget-tab-aside-menu-submenu'>
                            <h2 className='widget-tab-aside-menu-submenu-title'>Profil</h2>
                            <ul className='widget-tab-aside-menu-submenu-items'>
                                <li className='widget-tab-aside-menu-submenu-items-item' onClick={ () => displayTab("general") }>Général</li>
                                <li className='widget-tab-aside-menu-submenu-items-item' onClick={ () => displayTab("skills") }>Compétences</li>
                                <li className='widget-tab-aside-menu-submenu-items-item' onClick={ () => displayTab("experiences") }>Expériences</li>
                            </ul>
                        </section>
                        <section className='widget-tab-aside-menu-submenu'>
                            <h2 className='widget-tab-aside-menu-submenu-title'>Récent</h2>
                            <ul className='widget-tab-aside-menu-submenu-items'>
                                { lastProjects.map((project, index) => 
                                    <li className='widget-tab-aside-menu-submenu-items-item' key={ 'tab-label-' + index } onClick={ () => displayTab("tab-" + project.id) }>{ project.name }</li>
                                ) }
                            </ul>
                        </section>
                    </nav>
                </div>
                <div className='widget-tab-window'>
                    <section className='widget-tab-window-tab current' id='general'>
                        <h2 className='widget-tab-window-tab-title'>Général</h2>
                        <div className='widget-tab-window-tab-content'>
                            <Identity
                                person={cvMaeva}
                            />
                        </div>
                    </section>
                    <section className='widget-tab-window-tab' id='skills'>
                        <h2 className='widget-tab-window-tab-title'>Compétences</h2>
                        <div className='widget-tab-window-tab-content'>
                            <Listing
                                itemList={cvMaeva.hardSkills}
                            />
                        </div>
                    </section>
                    <div className='widget-tab-window-tab' id='experiences'>
                        <h2 className='widget-tab-window-tab-title'>Expériences</h2>
                        <div className='widget-tab-window-tab-content'>
                            { cvMaeva.professionalBackground.map((experience, index) => 
                                <Article key={ 'experience-' + index }
                                    date={ new Date(experience.beginOn).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) + ' - ' + new Date(experience.endOn).toLocaleDateString(undefined, { month: 'long', year: 'numeric' }) }
                                    title={ experience.job + ' en ' + experience.status }
                                    subtitle={ experience.company + ', ' + experience.place }
                                    paragraphs={ [experience.tasks] }
                                />
                            ) }
                        </div>
                    </div>
                    { lastProjects.map((project, index) => 
                        <div className='widget-tab-window-tab' id={ "tab-" + project.id } key={ "tab-project-" + index }>
                            <h2 className='widget-tab-window-tab-title'>{ project.name }</h2>
                            <div className='widget-tab-window-tab-content'>
                                <Card
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
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </React.Fragment>
    )
}

export default Home;

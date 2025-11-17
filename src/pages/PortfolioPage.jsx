import { Card, Row, Tabs, Tab } from 'react-bootstrap';

import completePortfolio from '../../src/content/portfolio.json';

function PortfolioPage() {
    return (
        <div>
            <Row className='margin-top-10 mx-auto'>
                <h1 className='primary-color roboto-regular text-center mb-5'>Main Missions</h1>
                <Card className='w-75 mx-auto white-background secondary-border-slim p-5 text-justify'>
                    <Tabs
                        defaultActiveKey="Landing Page for Local Business"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        {
                            completePortfolio.mainProjects.map((project) => (
                                <Tab eventKey={project.project_name} title={project.project_name} key={project.id}>
                                    <p className='primary-color'>
                                        {project.description}
                                    </p>
                                </Tab>
                            ))
                        }
                    </Tabs>
                </Card>
            </Row>


            <Row className='margin-top-10 mx-auto'>
                <h1 className='primary-color roboto-regular text-center mb-5'>Side Quests</h1>
                <Card className='w-75 mx-auto white-background secondary-border-slim p-5 text-justify'>
                    <Tabs
                        defaultActiveKey="Notion Templates"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        {
                            completePortfolio.sideProjects.map((project) => (
                                <Tab eventKey={project.project_name} title={project.project_name} key={project.id}>
                                    <p className='primary-color'>
                                        {project.description}
                                    </p>
                                </Tab>
                            ))
                        }
                    </Tabs>
                </Card>
            </Row>
        </div>
    );
}

export default PortfolioPage;
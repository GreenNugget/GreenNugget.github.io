import { Card, Row, Col } from 'react-bootstrap';

import completePortfolio from '../../src/content/portfolio.json';

function PortfolioPage() {
    return (
        <Row className='margin-top-10 mx-auto'>
            {
                completePortfolio.mainProjects.map((project) => (
                    <Col xl={4} className='mb-5'>
                        <Card className='w-100 dark-blue-background clear-blue-border mx-auto' key={project.id}>
                            <Card.Title className='secondary-dark-blue-background p-3'>
                                <h4 className='roboto-bold main-white'>{project.project_name}</h4>
                            </Card.Title>
                            <Card.Text className='p-3'>
                                <p className='main-white roboto-regular w-100 text-justify fs-5'>{project.description}</p>
                            </Card.Text>
                        </Card>
                    </Col>
                    
                ))
            }
        </Row>
    );
}

export default PortfolioPage;
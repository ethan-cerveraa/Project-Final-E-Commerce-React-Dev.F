import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SidebarSearch = () => {
    return (
        <>
            <h5>Categories</h5>
            <ListGroup variant="flush">
                <ListGroup.Item as='a'>Toys</ListGroup.Item>
                <ListGroup.Item as='a'>Kitchen</ListGroup.Item>
                <ListGroup.Item as='a'>Beauty</ListGroup.Item>
                <ListGroup.Item as='a'>Home</ListGroup.Item>
                <ListGroup.Item as='a'>See more...</ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default SidebarSearch;
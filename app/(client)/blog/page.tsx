import Container from '@/components/Container';
import React from 'react';

const SingleBlogPage =async ({
    params,
}:{
    params:Promise<{slug:string}>
}) => {
    const {slug} =await params;
    return (
        <div>
            <Container>
                <p>Single Blog Page</p>
                <p>{slug}</p>
            </Container>
        </div>
    );
};

export default SingleBlogPage;
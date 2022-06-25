import React from 'react';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const { deploymentId } = router.query
    return (
        <>
            <pre>{deploymentId}</pre>
            <Footer />
        </>
    );
}
import React from 'react';
import Layout from '../components/Layout';
import TitleSection from '../components/TitleSection';
import RequestTable from '../components/RequestTable';

function Admin() {
    return (
        <Layout>
             <TitleSection>Mis Solicitudes</TitleSection>
             <RequestTable></RequestTable>
        </Layout>
    );
}

export default Admin;
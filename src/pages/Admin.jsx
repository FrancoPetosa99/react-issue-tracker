import React from 'react';
import Layout from '../components/Layout';
import TitleSection from '../components/TitleSection';
import RequestTable from '../components/RequestTable';
import RequerimientosDashboards from '../components/dashboards/requerimientos/RequerimientosDashboards';

function Admin() {
    return (
        <Layout>
             <TitleSection>Mis Solicitudes</TitleSection>
             <RequerimientosDashboards />
        </Layout>
    );
}

export default Admin;
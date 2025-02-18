import React from 'react';
import Layout from '../components/Layout';
import TitleSection from '../components/TitleSection';
import UsersDashboards from '../components/dashboards/users/UsersDashboards';

function Users() {
    return (
        <Layout>
            <TitleSection>Usuarios Externos</TitleSection>
            <UsersDashboards />
        </Layout>
    );
}

export default Users;
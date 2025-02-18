import React from 'react';
import Layout from '../components/Layout';
import TitleSection from '../components/TitleSection';
import ExternalUserForm from '../components/forms/usuarios/ExternalUserForm';
import BtnBack from '../components/btns/BtnBack';

function RegisterExternalUser() {
    return (
        <Layout>
            <TitleSection>Registrar Usuario</TitleSection>
            <BtnBack />
            <ExternalUserForm />
        </Layout>
    );
}

export default RegisterExternalUser;
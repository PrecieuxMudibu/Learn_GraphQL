import { gql, useQuery } from '@apollo/client';
import ClientRow from './ClientRow';

const GET_CLIENTS = gql`
    query getClients {
        clients {
            id
            name
            email
            phone
        }
    }
`;

export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Quelque chose s'est mal passé.</p>;

    return (
        <>
            {!loading && !error && (
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.clients.map((client) => (
                            <ClientRow key={client.id} client={client} />
                        ))}

                        {/* {console.log('TEST', data.clients)} */}
                    </tbody>
                </table>
            )}
        </>
    );
}

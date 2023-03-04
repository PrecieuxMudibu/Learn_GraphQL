import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/clientQueries';
import ClientRow from './ClientRow';
import Spinner from './Spinner';

export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <Spinner />;
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
                    </tbody>
                </table>
            )}
        </>
    );
}

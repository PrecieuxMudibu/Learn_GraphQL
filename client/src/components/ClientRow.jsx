import { FaTrash } from 'react-icons/fa';
import React from 'react';

export default function ClientRow({ client }) {
    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className="btn btn-danger btn-sm">
                    <FaTrash />
                </button>
            </td>
        </tr>
    );
}

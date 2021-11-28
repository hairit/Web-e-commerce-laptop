import React from 'react';
import { useEffect } from 'react';

export default function Home({changeAdminMode}) {
    useEffect(() => {
        changeAdminMode('on');
    }, [])
    return (
        <div className="admin-home">
            abc
        </div>
    )
}

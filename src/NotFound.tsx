import React from 'react';
import { useNavigate } from 'react-router-dom';

const RouteNotFound = () => {
    const history = useNavigate();
    return (
        <div>
            <button onClick={() => history('/help')} />
        </div>
    );
};

export default RouteNotFound;
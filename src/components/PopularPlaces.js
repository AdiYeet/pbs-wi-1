import React from 'react';
import './PopularPlaces.css';
import Card from './Card';

import BascomHallThumbnail from '../assets/thumbnails/Bascom150x150.png';
import CapitalBuildingThumbnail from '../assets/thumbnails/Capitol150x150.png';
import MemorialUnionThumbnail from '../assets/thumbnails/MemorialUnion150x150.png';

function PopularPlaces() {
    // Placeholder data
    const places = [
        { id: 1, name: 'Capital Building', image: CapitalBuildingThumbnail },
        { id: 2, name: 'Memorial Union', image: MemorialUnionThumbnail },
        { id: 3, name: 'Bascom Hall', image: BascomHallThumbnail },
        { id: 4, name: 'Memorial Library', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'State Street', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="popular-places">
            <h2><b>Popular</b> Places</h2>
            <div className="cards-container">
                {places.map(place => (
                    <Card key={place.id} name={place.name} image={place.image} />
                ))}
            </div>
        </div>
    );
}

export default PopularPlaces;

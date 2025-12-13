import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const position = [23.80, 90.41]
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
const Coverage = () => {
    const [serviceCenters, setServiceCenter] = useState([]);
    useEffect(() => {
        fetch('./serviceCenter.json')
            .then(res => res.json())
            .then(data => setServiceCenter(data));
    }, [])
    // console.log(serviceCenters)
    const mapRef = useRef()
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     const location = e.target.location.value;
    //     const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
    //     if (district) {
    //         const coord = [district.latitude, district.longitude];
    //         mapRef.current.flyTo(coord, 12)

    //     }

    // }
    return (
        <div >
            {/* <h2 className="text-5xl text-center font-bold text-secondary mt-10">We are available in 64 districts</h2>
            <div className='my-10'>
                <form
                    onSubmit={handleSearch}
                    className='flex flex-col justify-center items-center'
                >
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search" name='location' />

                    </label>
                </form>

            </div> */}
            <h3 className='text-3xl text-center my-5 font-bold'>Service Coverage Map</h3>
            {/* <h3 className='text-3xl text-center my-5 font-bold'>We are services almost all over Bangladesh</h3> */}
            <div className='border max-w-7xl rounded-4xl mx-auto my-10'>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    className='h-[350px]  mx-auto rounded-4xl overflow-hidden relative z-0'
                    ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map(center => <Marker position={[center.latitude, center.longitude]} key={center._id}>
                            <Popup>
                                {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;
import React from 'react';
import contacts from './data/modileNumbersData.json';

const MobileNumbers = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Mobile Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map((contact, index) => (
                    <div key={index} className="bg-white border hover:border-custom-red duration-500 hover:shadow-md ease-in-out rounded-lg p-6">
                        <p className="text-lg font-bold mb-2">{contact.title}</p>
                        <p className="text-gray-600 mb-2">{contact.address}</p>
                        {contact.phone1 && <p className="text-blue-500 mb-1">{contact.phone1}</p>}
                        {contact.phone2 && <p className="text-blue-500 mb-1">{contact.phone2}</p>}
                        <p className="text-gray-500">{contact.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileNumbers;
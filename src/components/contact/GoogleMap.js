import React from 'react';

const GoogleMap = () => {
    return (
        <div className="rounded h-100">
            <iframe
                className="rounded h-200 w-100"
                style={{ height: '400px' }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.551879799239!2d72.836627!3d19.145437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b741e2716d9b%3A0xfa0bdde881901ed5!2sM%20G%20A%20Group!5e0!3m2!1sen!2sin!4v1741611659136!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MGA Group Office Location Map"
            />
        </div>
    );
};

export default GoogleMap;
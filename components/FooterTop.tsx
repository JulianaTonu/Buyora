import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

interface ContactItemData {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

const data: ContactItemData[] = [
    {
        title: "Visit Us",
        subtitle: "Dhanmondi, Dhaka",
        icon: (
            <MapPin className='w-6 h-6 text-gray-600 group-hover:text-primary transition-colors' />
        ),
    },
    {
        title: "Call Us",
        subtitle: "+008 01674782381",
        icon: (
            <Phone className='w-6 h-6 text-gray-600 group-hover:text-primary transition-colors' />
        ),
    },
    {
        title: "Working Hours",
        subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
        icon: (
            <Clock className='w-6 h-6 text-gray-600 group-hover:text-primary transition-colors' />
        ),
    },
    {
        title: "Email Us",
        subtitle: "Shopora@gmail.com",
        icon: (
            <Mail className='w-6 h-6 text-gray-600 group-hover:text-primary transition-colors' />
        ),
    },
]


const FooterTop = () => {
    return (
        <div className='mb-10 pb-5 grid grid-cols-1 lg:grid-cols-4 items-center  gap-8 border-b'>
            {data?.map((item, index) => (
                <div key={index} className=' p-4 hover:bg-gray-50 rounded-md flex items-center gap-3'>
                    {item.icon}
                    <div>
                        <h1 className='font-semibold'>{item?.title}</h1>
                        <p className='text-sm text-gray-500'>{item?.subtitle}</p>
                    </div>
                </div>

            ))}
        </div>
    );
};



export default FooterTop;
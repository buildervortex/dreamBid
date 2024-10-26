import React, { useState } from 'react';
import CommentCard from '../components/userManagement/commentCard';

export default function UserManagement() {
    // Comment data array
    const comments = [
        { id: 1, user: 'Cadman Stiller', text: 'The amount of upgrades you can do to this car by bolting on stock Ford parts...', timestamp: '2 hours ago' },
        { id: 2, user: 'Jordan Fields', text: 'Love the flexibility of this car. The parts are cheap and readily available...', timestamp: '1 day ago' },
        { id: 3, user: 'Emily Cooper', text: 'This is definitely one of the best models. It’s easy to upgrade and maintain...', timestamp: '3 days ago' },
        { id: 4, user: 'Emily Cooper', text: 'This is definitely one of the best models. It’s easy to upgrade and maintain...', timestamp: '3 days ago' },
        { id: 5, user: 'Emily Cooper', text: 'This is definitely one of the best models. It’s easy to upgrade and maintain...', timestamp: '3 days ago' },
        { id: 6, user: 'Emily Cooper', text: 'This is definitely one of the best models. It’s easy to upgrade and maintain...', timestamp: '3 days ago' },
        { id: 7, user: 'Emily Cooper', text: 'This is definitely one of the best models. It’s easy to upgrade and maintain...', timestamp: '3 days ago' },
    ];

    // State to track how many comments to show and button label
    const [visibleComments, setVisibleComments] = useState(4);
    const [isExpanded, setIsExpanded] = useState(false);

    // Handler to show more or fewer comments
    const toggleComments = () => {
        if (isExpanded) {
            setVisibleComments(4); // Show only 4 comments
        } else {
            setVisibleComments(comments.length); // Show all comments
        }
        setIsExpanded(!isExpanded); // Toggle the expanded state
    };

    return (
        <div className='flex h-screen'>
            {/* Static Sidebar */}
            <div className='w-1/5 bg-yellow-200 h-full sticky top-0'>
                <p className='p-4'>SideBar</p>
            </div>
            {/* Dynamic Scrollable Content */}
            <div className='w-4/5 h-full overflow-y-scroll flex flex-col items-center'>
                <div className='flex items-center justify-center w-full mt-4 mb-4'>
                    <h1 className='text-4xl mt-4'>Comments</h1>
                </div>


            </div>

        </div>
    );
}

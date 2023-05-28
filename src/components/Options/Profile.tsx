import React from "react";

interface AvatarProps {
    image?: string;
    name: string;
}

const Profile = ({ image, name }: AvatarProps) => {
    const initials = name.split(" ").reduce((previous, current) => {
        if (!previous) return current[0];
        return previous[0] + current[0];
    }, "");

    if (image)
        return (
            <div
                className="profile-icon profile-icon-image"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />
        );

    return (
        <div className="profile-icon">
            <p>{initials[0]}</p>
        </div>
    );
};

export default Profile;

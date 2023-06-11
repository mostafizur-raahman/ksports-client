import React from "react";

const SingleInstructor = ({ teacher }) => {
    const { name, img, email, bio, likes, experience, category } = teacher;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="hto image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Email:{email}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;

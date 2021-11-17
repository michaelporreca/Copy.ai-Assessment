import React from "react";

const Tags = () => {

    const [tags, setTags] = React.useState([]);

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    return (
        <div className="taginput">
                {tags.map((tag, index) => (
                    <div key={index} className="tagcontainer">
                        <div className="tag">{tag}</div>
                    </div>
                ))}
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Add a tag"
            />
        </div>
    );
};

export default Tags;
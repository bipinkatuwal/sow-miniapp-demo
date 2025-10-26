import React, { useEffect, useRef, useState } from 'react'
import "../pages/PriceList.css";
import toast from 'react-hot-toast';

const EditableCell = ({ value, onSave, type = "text" }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingValue, setEditingValue] = useState(value);
    const inputRef = useRef();

    useEffect(() => {
        setEditingValue(value); // update when parent changes
    }, [value]);

    useEffect(() => {
        if (isEditing) inputRef.current?.focus();
    }, [isEditing])

    const handleBlur = async () => {
        if (editingValue.trim() === "") {
            // revert to old value if empty
            toast.error("Field can't be empty!");
            setEditingValue(value);
            setIsEditing(false);
            return;
        }
        if (editingValue !== value) {
            await onSave(editingValue);
        }

        setIsEditing(false);
    }


    return isEditing ? (
        <input
            className='product-service-input'
            ref={inputRef}
            type={type}
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={(e) => e.key === "Enter" && handleBlur()}
        />
    ) : (
        <span className='product-service-span' onClick={() => setIsEditing(true)}>
            {editingValue}
        </span>
    )
}

export default EditableCell
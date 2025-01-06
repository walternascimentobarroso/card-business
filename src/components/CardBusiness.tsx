import React from "react";

interface Person {
  photo: string;
  name: string;
  surname: string;
  address: string;
  phone: string;
  email: string;
}

const CardBusiness: React.FC = () => {
  const person: Person = {
    photo: "https://via.placeholder.com/150",
    name: "John",
    surname: "Doe",
    address: "123 Main Street, Cityville",
    phone: "+1234567890",
    email: "johndoe@example.com",
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-96">
      <img
        src={person.photo}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">
        {person.name} {person.surname}
      </h2>
      <p className="text-gray-600">{person.address}</p>
      <div className="mt-4 space-y-2 w-full">
        <InfoRow
          label="Phone"
          value={person.phone}
          onCopy={() => handleCopy(person.phone)}
        />
        <InfoRow
          label="Email"
          value={person.email}
          onCopy={() => handleCopy(person.email)}
        />
        <InfoRow
          label="Address"
          value={person.address}
          onCopy={() => handleCopy(person.address)}
        />
      </div>
    </div>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
  onCopy: () => void;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, onCopy }) => (
  <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
    <span className="text-sm text-gray-700">
      {label}: {value}
    </span>
    <button
      onClick={onCopy}
      className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600"
    >
      Copy
    </button>
  </div>
);

export default CardBusiness;

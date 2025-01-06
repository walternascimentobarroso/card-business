import React, { useState } from "react";

interface Person {
  photo: string;
  name: string;
  surname: string;
  address: string;
  phone: string;
  email: string;
  nif: string;
  cpf: string;
  password: string;
}

const CardBusiness: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"public" | "private">("public");

  const person: Person = {
    photo: "https://via.placeholder.com/150",
    name: "John",
    surname: "Doe",
    address: "123 Main Street, Cityville",
    phone: "+1234567890",
    email: "johndoe@example.com",
    nif: "123456789",
    cpf: "98765432100",
    password: "mySecurePassword",
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

      {/* Tabs */}
      <div className="flex space-x-4 mt-6">
        <button
          className={`px-4 py-2 rounded-t-md ${
            activeTab === "public"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("public")}
        >
          Public
        </button>
        <button
          className={`px-4 py-2 rounded-t-md ${
            activeTab === "private"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("private")}
        >
          Private
        </button>
      </div>

      {/* Content */}
      <div className="w-full p-4 bg-gray-100 rounded-b-md">
        {activeTab === "public" ? (
          <div>
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
        ) : (
          <div>
            <InfoRow
              label="NIF"
              value={person.nif}
              onCopy={() => handleCopy(person.nif)}
            />
            <InfoRow
              label="CPF"
              value={person.cpf}
              onCopy={() => handleCopy(person.cpf)}
            />
            <InfoRow
              label="Password"
              value={person.password}
              onCopy={() => handleCopy(person.password)}
            />
          </div>
        )}
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
  <div className="flex justify-between items-center bg-white p-2 rounded-md mb-2 shadow-sm">
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

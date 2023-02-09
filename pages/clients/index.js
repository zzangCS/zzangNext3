import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "menu", name: "Manuel" },
  ];
  return (
    <div>
      ClientPage
      <ul>
        {clients.map((clients) => (
          <li key={clients.id}>
            <Link
              href={{ pathname: "clients/[id]", query: { id: clients.id } }}
            >
              {clients.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;

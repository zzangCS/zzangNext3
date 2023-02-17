import { useRouter } from "next/router";

const ClientsIdPage = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>the project page for a selected</h1>
    </div>
  );
};

export default ClientsIdPage;

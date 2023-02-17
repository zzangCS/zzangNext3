import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push("clients/max/projecta");
  };

  return (
    <div>
      ClientProjectPage
      <button onClick={loadProjectHandler}>Load A</button>
    </div>
  );
};

export default ClientProjectPage;

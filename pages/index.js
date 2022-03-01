import { useGlobalAuthContext } from "../AuthContext";
export default function Home() {
  const { user } = useGlobalAuthContext();

  return (
    <div>
      <h1 className="text-blue-500">Hello {user?.data?.name}</h1>
    </div>
  );
}

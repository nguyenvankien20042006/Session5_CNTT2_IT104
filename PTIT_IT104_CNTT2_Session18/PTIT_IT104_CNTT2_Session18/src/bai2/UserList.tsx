import { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

const users: User[] = [
  { id: 1, name: "kien1", age: 16 },
  { id: 2, name: "kien2", age: 20 },
  { id: 3, name: "kien3", age: 25 },
  { id: 4, name: "kien4", age: 15 },
  { id: 5, name: "kien5", age: 19 },
];

export default function UserList() {
  const filteredUsers = useMemo(
    () => users.filter((user) => user.age > 18),
    []
  );

  return (
    <div>
      <h2>Danh sách người dùng trên 18 tuổi:</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}

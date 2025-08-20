import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function UserTable() {
  const users = [
    { id: 1, name: "Malcolm Lockyer", birthday: "21/03/1961", gender: "Nam", address: "New york" },
    { id: 2, name: "Maria", birthday: "11/02/1990", gender: "Nữ", address: "London" }
  ];

  return (
    <table className="user-table">
      <TableHeader />
      <tbody>
        {users.map((u, index) => (
          <TableRow
            key={u.id}
            stt={index + 1}
            name={u.name}
            birthday={u.birthday}
            gender={u.gender}
            address={u.address}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;

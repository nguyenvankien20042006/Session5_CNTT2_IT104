import ActionButtons from "./ActionButtons";

type TableRowProps = {
  stt: number;
  name: string;
  birthday: string;
  gender: string;
  address: string;
};

function TableRow({ stt, name, birthday, gender, address }: TableRowProps) {
  return (
    <tr>
      <td>{stt}</td>
      <td>{name}</td>
      <td>{birthday}</td>
      <td>{gender}</td>
      <td>{address}</td>
      <td>
        <ActionButtons
          onEdit={() => alert(`Sửa: ${name}`)}
          onDelete={() => alert(`Xóa: ${name}`)}
        />
      </td>
    </tr>
  );
}

export default TableRow;

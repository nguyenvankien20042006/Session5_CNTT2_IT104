type ActionButtonsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
  return (
    <div className="action-buttons">
      <button className="btn-edit" onClick={onEdit}>Sửa</button>
      <button className="btn-delete" onClick={onDelete}>Xóa</button>
    </div>
  );
}

export default ActionButtons;

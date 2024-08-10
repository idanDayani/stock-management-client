import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-4 right-4">
      <Button onClick={() => navigate("/")} type="primary">
        Back to Portfolio
      </Button>
    </div>
  );
}

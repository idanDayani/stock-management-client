import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="absolute top-4 right-4">
      <Button
        onClick={() => navigate("/")}
        type="primary"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 border-none font-semibold py-2 px-4 rounded-lg"
      >
        Back to Portfolio
      </Button>
    </div>
  );
}

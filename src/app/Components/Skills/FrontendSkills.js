import Card from "@/app/General/Card";
import EachSkill from "./EachSkill";
import { useMediaQuery } from "react-responsive";

const FrontendSkills = () => {
  const isMobile = useMediaQuery({ minWidth: 768 });

  return (
    <Card
      style={
        {
          // display: "flex",
          // flex: `0 0 ${isMobile ? "30%" : "50%"}`,
          // gap: "32px",
          // justifyContent: "center",
          // flexDirection: "column",
          // backgroundColor: "#080c14",
        }
      }
    >
      <h3
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "18px",
          marginBottom: "6px",
        }}
      >
        Frontend
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <EachSkill
          skill="React"
          extent={"95%"}
          style={{ backgroundColor: "#27c467" }}
        />
        <EachSkill
          skill="Next.JS"
          extent={"70%"}
          style={{ backgroundColor: "#f4bf1e" }}
        />
        <EachSkill
          skill="Vite"
          extent={"40%"}
          style={{ backgroundColor: "#7c81ff" }}
        />
        <EachSkill
          skill="Tailwind CSS"
          extent={"30%"}
          style={{ backgroundColor: "#32a761" }}
        />
      </div>
    </Card>
  );
};

export default FrontendSkills;

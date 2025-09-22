import Card from "@/app/General/Card";
import EachSkill from "./EachSkill";

import { useMediaQuery } from "react-responsive";

const BackendSkills = () => {
  const isMobile = useMediaQuery({ minWidth: 768 });

  return (
    <Card
      style={{
        display: "flex",
        flex: `0 0 ${isMobile ? "30%" : "50%"}`,

        gap: "32px",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#080c14",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "18px",
          marginBottom: "6px",
        }}
      >
        Backend
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <EachSkill
          skill="NodeJS"
          extent={"100%"}
          style={{ backgroundColor: "#19ad55" }}
        />
        <EachSkill
          skill="ExpressJs"
          extent={"100%"}
          style={{ backgroundColor: "#3a6cea" }}
        />
        <EachSkill
          skill="MongoDB"
          extent={"95%"}
          style={{ backgroundColor: "#ff9232" }}
        />
        <EachSkill
          skill="Web Socket"
          extent={"70%"}
          style={{ backgroundColor: "#209e53" }}
        />
        {/* <EachSkill
          skill="JWT"
          extent={"80%"}
          style={{ backgroundColor: "blue" }}
        /> */}
      </div>
    </Card>
  );
};

export default BackendSkills;

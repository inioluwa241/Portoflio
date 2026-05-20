import StartUpItem from "./StartUpItem";

const startup = [
  {
    id: "1",
    name: "Book Social",
    tagline: "Read anytime and anywhere",
    description:
      "A startup focused on giving Afican authors as well as readers a place to meet and connect without fear of piracy.",
    logo: "/book-social-logo.png",
    status: "building",
    // achievements: [
    //   "Raised $500K seed funding",
    //   "50+ active users",
    //   "Partnerships with 10 tech companies",
    // ],
    technologies: [
      "React",
      "Node.js",
      "react native",
      "flutter",
      "mongoDB",
      "figma",
    ],
  },
  {
    id: "2",
    name: "Goal OS ",
    tagline: "Goal immersion system",
    description:
      "A goal immersion system, bringing your goals into your eeryday life rather than locked in an app somewhere on you device.",
    logo: "/goalOs-logo.png",
    status: "active",
    achievements: [
      "Pre launched with active users",
      "Featured in Sciencius circle",
      "90% user satisfaction",
    ],
    technologies: ["react native", "supabase", "SQlite"],
  },
];

const StartUpList = function (props) {
  return (
    <div>
      {startup.map((eac, index) => {
        return (
          <StartUpItem
            key={index}
            src={eac.logo}
            name={eac.name}
            tagline={eac.tagline}
            status={eac.status}
            description={eac.description}
            achievements={eac.achievements}
            technologies={eac.technologies}
          />
        );
      })}
    </div>
  );
};

export default StartUpList;

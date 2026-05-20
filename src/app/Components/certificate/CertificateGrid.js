import { title } from "framer-motion/client";
import classes from "./CertificateGrid.module.css";
import CertificateItem from "./CertificateItem";
// import PortfolioItem from "./PortfolioItem";

const certificates = [
  {
    title: "web developer",
    site: "ECX",
    certification_date: "april 18",
    certificate_link: "",
  },
  {
    title: "Mobile app developer",
    site: "Techcrush",
    certification_date: "jan 2026",
    certificate_link: "",
  },
];

const CertificateGrid = function () {
  return (
    <div className={classes["certificate-grid"]}>
      {certificates.map((eac, index) => {
        return (
          <CertificateItem
            key={index}
            title={eac.title}
            site={eac.site}
            certificate_link={eac.certificate_link}
            certification_date={eac.certification_date}
          />
        );
      })}
    </div>
  );
};

export default CertificateGrid;

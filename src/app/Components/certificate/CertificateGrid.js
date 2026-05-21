import { title } from "framer-motion/client";
import classes from "./CertificateGrid.module.css";
import CertificateItem from "./CertificateItem";
// import PortfolioItem from "./PortfolioItem";

const certificates = [
  {
    src: "/Inioluwa Fredrick-certificate.png",
    title: "web developer",
    site: "ECX",
    certification_date: "may 2025",
    certificate_link:
      "https://drive.google.com/file/d/19_t4ySiv76nc7QsG81HDfQLkX19LsDHQ/view",
  },
  {
    src: "/Inioluwa Samuel Ebi-Fredrick.png",
    title: "Mobile app developer",
    site: "Techcrush",
    certification_date: "jan 2026",
    certificate_link:
      "https://drive.google.com/file/d/1b4r-_Uj_U4BC6H7VP43dkA9g-hmV9WPl/view?usp=drive_link",
  },
];

const CertificateGrid = function () {
  return (
    <div className={classes["certificate-grid"]}>
      {certificates.map((eac, index) => {
        return (
          <CertificateItem
            key={index}
            src={eac.src}
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

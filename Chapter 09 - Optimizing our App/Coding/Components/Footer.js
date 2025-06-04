// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/elamaranp/"
        target="_blank"
        title="Elamaran's Linkedin Profile"
      >
        Elamaran
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="hhttps://github.com/elamaran07/Food-App-React.git"
        target="_blank"
        title="Food Fire Github Repository"
      >
        <strong>
          Food<span>Fire</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;

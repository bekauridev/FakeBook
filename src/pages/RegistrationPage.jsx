// import CreateAccount from "../components/form/CreateAccount";
import { Link } from "react-router-dom";
import styles from "./RegistrationPage.module.css";
function RegistrationPage() {
  return (
    <div className={styles.RegistrationPage}>
      {/* <CreateAccount /> */}
      Currently this feature not works
      <Link to="/"> Go home </Link>
    </div>
  );
}

export default RegistrationPage;

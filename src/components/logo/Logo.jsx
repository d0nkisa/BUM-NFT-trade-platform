import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Logo.module.scss";
import classNames from "classnames";

export default function Logo({ type }) {
    if (type == "muted") {
        return (<img type={type} src="/images/logo-muted.svg" />);
    }
    else {
        return (<img type={type} src="/images/logo.svg" />);
    }
}

Logo.defaultProps = {
    type: 'default',
};
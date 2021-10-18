import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Logo.module.scss";
import classNames from "classnames";

export default function Header(props) {
    if (props.type == "muted") {
        return (
            <img className={props.type} src="/images/logo-muted.svg" alt="muteable-logo" />
        );
    }
    else
        return (
            <img className={props.type} src="/images/logo.svg" alt="muteable-logo" />
        );
}
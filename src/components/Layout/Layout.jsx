import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import { Container } from "@mui/material";
import css from "./Layout.module.css";


export default function Layout({ children }) {
  return (
    <>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </Container>
      </main>
    </>
  );
}
